const asc = 'asc';
const desc = 'desc';
const keyName = 'name';
const keyEmission = 'emission';
const typeCompany = 'Company';
const typeCountry = 'Country';
const typeNone = 'None';
const allowedValues = /^[A-Za-z1-9-._ ]*$/;

const img = 'img/'
const sortSvg = img + 'sort.svg';
const sortUpSvg = img + 'sort-up.svg';
const sortDownSvg = img + 'sort-down.svg';
const filterSvg = img + 'filter.svg'
const locationSvg = img + 'location.svg'
const officeBuildingSvg = img + 'office-building.svg'

const dataUrl = '/data/emission_data.json'

const Data = {
    data: [],
    filterValue: '',
    currentType: typeNone,
    loadData: function() {
        fetch(dataUrl)
            .then(resp => resp.json())
            .then(data => this.data = data)
    },
    get filteredData() {
        if (this.filterValue === '' && this.currentType === typeNone && !this.filterValue.match(allowedValues)) {
            return this.data;
        }
        if (this.currentType === typeCountry || this.currentType === typeCompany) {
            return this.data
                .filter(item => item.type === this.currentType)
                .filter(item => item.name.includes(this.filterValue));
        }
        return this.data.filter(item => item.name.includes(this.filterValue));
    },
    currentSortKey: '',
    currentSortDirection: '',
    sortData: function (key) {
        if (this.currentSortKey === key) {
            this.currentSortDirection = this.currentSortDirection === asc ? desc : asc;
        } else {
            this.currentSortKey = key;
            this.currentSortDirection = asc;
        }
        this.data.sort((a, b) => {
            const key = this.currentSortKey;
            let value = 0;
            if (a[key] > b[key]) {
                value = 1;
            } else if (a[key] < b[key]) {
                value = -1;
            }
            return this.currentSortDirection === desc ? (value * -1) : value;
        });
    },
    selectArrowSrc: function (key) {
        let selected = sortSvg;
        if (this.currentSortKey === key) {
            selected = this.currentSortDirection === desc ? sortDownSvg : sortUpSvg;
        }
        return selected;
    },
    cycleType: function () {
        switch (this.currentType) {
            case typeNone:
                this.currentType = typeCompany;
                return;
            case typeCompany:
                this.currentType = typeCountry;
                return;
            case typeCountry:
                this.currentType = typeNone;
                return;
            default:
                this.currentType = typeNone;
        }
    },
    get typeSrc() {
        let typeSrc = filterSvg;
        if (this.currentType === typeCountry) {
            typeSrc = locationSvg;
        }
        if (this.currentType === typeCompany) {
            typeSrc = officeBuildingSvg;
        }
        return typeSrc;
    },
}
