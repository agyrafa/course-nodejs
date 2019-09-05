const axios = require('axios');
const $ = require('string');

axios.get('https://api.hgbrasil.com/weather?woeid=BRXX0137')

    .then(
        (res) => console.log($(res.data.results.description).contains('nublado'))
    )
    .catch(
        (err) => console.log(err)
    );