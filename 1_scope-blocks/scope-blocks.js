var ships = [
    { callSign: 'NCC-1701', name: 'USS Enterprise' },
    { callSign: 'NX-74205', name: 'USS Defiant' },
    { callSign: 'NCC-74656', name: 'USS Voyager' },
    { callSign: 'NCC-3069', name: 'USS Magellan' }
];

function getShipName(callLetters) {
    for (let ship of ships) {
        if (ship.callSign == callLetters) {
            return ship.name;
        }
    }
}

var shipToRepair = getShipName('NX-74205');

console.log(shipToRepair);