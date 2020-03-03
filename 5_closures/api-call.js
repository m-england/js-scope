const axios = require('axios');

function getSomeBacon(type) {
    axios.get(`https://baconipsum.com/api/?type=${ type }&paras=1&format=text`)
    .then(function (response) {
        console.log(type, response.data);
    });
}


getSomeBacon('meat-and-filler')
