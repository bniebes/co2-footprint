# C02-Footprint

Website which shows emission data of different companies and countries.

## Update Emission Data

Edit or replace the emission_data.json file in 'src/static/data/emission_data.json'.

It is expected that the file name is 'emission_data.json'.

## Development

### Required Tools

- Text Editor/Web IDE
- Docker

### Used Technologies

- HTML
- CSS
- Javascript
- AlpineJS
    - alpinejs
    - alpinejs-i18n
- Nginx
- Docker

### Run Locally

```sh
docker compose -f compose.yaml up --build
```

After running the above command, the website is available on localhost port 80.

Open the browser at http://localhost.
