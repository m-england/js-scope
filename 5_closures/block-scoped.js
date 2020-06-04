
var hits;

{ 
    let count = 0;
    hits = function getCurrent(){
        count = count + 1;
        return count;
    };
}

// var hits = makeCounter();

// function makeCounter() { 
//     let count = 0;
//     return function getCurrent(){
//         count = count + 1;
//         return count;
//     };
// }


console.log(hits());
console.log(hits());
console.log(hits());