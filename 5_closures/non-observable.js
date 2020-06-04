var greeting = "Hello"

function greet(myName) {
    // var greeting = "Live Long and Propser";
    output();

    function output() {
        console.log(
            `${ greeting }, ${ myName }!`
        );
    }
}

greet("Billy Bob");