const localeKey = "locale";
const defaultLocale = "de";
const rtlLocales = ["ar"];

let locale = sessionStorage.getItem(localeKey) || defaultLocale;

const labels = {
    en: {
        language: "Language",
        imprint: "Imprint",
        contact: "Contact",
        licenses: "Licences",
        footprint_data: "Footprint data",
        filter: "Filter",
        filter_placeholder: "Filter (Letters, Numbers, Special [.,_-])",
        letters: "Letters",
        numbers: "Numbers",
        special: "Special",
        name: "Name",
        type: "Type",
        emission: "Emission",
        homepage: "Homepage",
        link: 'Link',
        license: 'License',
        address: 'Address',
        email: "Email",
        phone: 'Phone',
        responsible: 'Responsible person',
        legalForm: 'Legal form',
        registryCourt: 'Registry court',
        registryNumber: 'Registry number',
    },
    de: {
        language: "Sprache",
        imprint: "Impressum",
        contact: "Kontakt",
        licenses: "Lizenzen",
        footprint_data: "Fußabdruck Daten",
        filter: "Filter",
        filter_placeholder: "Filter (Buchstaben, Zahlen, Spezial [.,_-])",
        name: "Name",
        type: "Typ",
        emission: "Emission",
        homepage: "Startseite",
        link: 'Link',
        license: 'Lizenz',
        address: 'Adresse',
        email: "Email",
        phone: 'Telefon',
        responsible: 'Verantwortliche',
        legalForm: 'Rechtsform',
        registryCourt: 'Registergericht',
        registryNumber: 'Registernummer',
    },
    ar: {
        language: "لغة",
        imprint: "بصمة",
        contact: "اتصال",
        licenses: "التراخيص",
        footprint_data: "بيانات البصمة",
        filter: "منقي",
        filter_placeholder: "منقي (حروف ,أعداد ,خاص [.,_-])",
        name: "اسم",
        type: "يكتب",
        emission: "انبعاث",
        homepage: "الصفحة الرئيسية",
        link: 'وصلة',
        license: 'رخصة',
        address: 'عنوان',
        email: "بريد إلكتروني",
        phone: 'هاتف',
        responsible: 'مسؤول',
        legalForm: 'استمارة قانونية',
        registryCourt: 'محكمة التسجيل',
        registryNumber: 'رقم التسجيل',
    },
};

document.addEventListener("alpine-i18n:ready", function () {
    window.AlpineI18n.create(locale, labels);
    setLocale(locale);
});

function setLocale(loc) {
    AlpineI18n.locale = loc;
    sessionStorage.setItem(localeKey, loc || defaultLocale)
    if (rtlLocales.includes(loc)) {
        document.body.setAttribute("dir", "rtl");
    } else {
        document.body.setAttribute("dir", "ltr");
    }
}
