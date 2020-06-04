let ships = [
    { callSign: 'NCC-1701', name: 'USS Enterprise' },
    { callSign: 'NX-74205', name: 'USS Defiant' },
    { callSign: 'NCC-74656', name: 'USS Voyager' },
    { callSign: 'NCC-3069', name: 'USS Magellan' }
];

function lookupShip(callLetters) {

    return function greetShip(greeting){
        let ship = ships.find(s => s.callSign == callLetters);
        return `${ greeting }, ${ ship.name }!`;
    };
}

var approachingShips = [
    lookupShip('NCC-74656'),
    lookupShip('NCC-3069')
];

console.log(approachingShips[0].name);

console.log(approachingShips[0]("Hail"));

console.log(approachingShips[1]("Please Acknowledge"));

console.log(ships);