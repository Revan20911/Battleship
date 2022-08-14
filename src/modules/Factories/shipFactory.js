import { Ship } from "../Classes/Ship";

const generateFleet = (() => {

    const playerFleet = [];

    const carrier = {

        name: 'Carrier',
        len: 5,
    };

    const battleship = {

        name: 'Battleship',
        len: 4,
    };

    const destroyer = {

        name: 'Destroyer',
        len: 3,

    }

    const submarine = {

        name: 'Submarine',
        len: 3,

    }

    const ptboat = {

        name: 'Patrol Boat',
        len: 2,

    }


    const fleet = [carrier, battleship, destroyer, submarine, ptboat];

    fleet.forEach((ship) =>{

        const fleetShip = new Ship(ship.len, ship.name);

        playerFleet.push(fleetShip);
    })


    return { playerFleet };

})();

