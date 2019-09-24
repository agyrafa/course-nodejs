const axios = require('axios');
const $ = require('string');

axios.get('https://api.hgbrasil.com/weather?woeid=BRXX0137')

    .then(
        (res) => console.log('OK', $(res.data.results.description).contains('nublado'))
    )
    .catch(
        (err) => console.log('erro', err)
    );