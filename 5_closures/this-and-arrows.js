const axios = require('axios');

function getSomeBacon(type) {
    axios.get(`https://baconipsum.com/api/?type=${ type }&paras=1&format=text`)
        .then((response) => {
            // console.log(type, response.data);
            console.log(this);
        });
}

let fakeScope = {a: 'They dont have bacon in star trek'};
// let otherBacon = getSomeBacon.bind(fakeScope);

getSomeBacon('meat-and-filler');
// otherBacon('meat-and-filler');