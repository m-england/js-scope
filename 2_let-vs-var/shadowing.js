function something() {
    var ship = "Enterprise";
    {
        let ship = 42;
        console.log(ship);
    }
 
    console.log(ship);
}

// function something2() {
//     let ship = "Enterprise";
//     {
//         var ship = 42;
//         console.log(ship);
//     }
//     console.log(ship);
// }


something();
