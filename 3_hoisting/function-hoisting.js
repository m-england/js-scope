let humanGreet = function greet() {
    console.log("Hello!");   
}

vulcanGreet();
humanGreet();

function vulcanGreet() {
    let greet = innerGreeting();
    console.log(greet);

    function innerGreeting() {
        return "Live Long and Prosper";
    }
}


