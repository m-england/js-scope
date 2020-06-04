// outer/global scope: RED(1)

function adder(num1) {
    // function scope: BLUE(2)

    return function addTo(num2){
        // function scope: GREEN(3)
        return num1 + num2;
    };
}

var add10To = adder(10);
var add42To = adder(42);

console.log(add10To(15));
console.log(add42To(9));