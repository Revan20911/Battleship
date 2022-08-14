
import { Ship } from "../Classes/Ship";

const generateFleet = (() => {

    const playerFleet = [];

    const carrier = {

        name: 'Carrier',
        len: 5,
    }

    const battleship = {

        name: 'Battleship',
        len: 4,
    }

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

const shipFactory = (() => {


    function placeShip(fleetShip, clickedCell, axis, board){

        let x = clickedCell.x;
        let y = clickedCell.y;

        if(axis === 'x'){
    
            for(let i = 0; i < fleetShip.len; i++){

                fleetShip
                    .position
                    .push([x + i, y]);
                
            }
            setCells(board, fleetShip.position);
        }
        else if(axis === 'y'){

            for(let i = 0; i < fleetShip.len; i++){

                fleetShip
                    .position
                    .push([x, y + i]);
                
            }
            setCells(board, fleetShip.position);
        }
        
    }

    function setCells(board, position){

        board.board.forEach((cell) => {
            
            for(let i = 0; i < position.length; i++){

                if(cell.x == position[i][0] && cell.y == position[i][1]){

                    cell.hasShip = true;
                    cell.color();
                    console.log(cell);

                }

            }
        })
    }

   return { placeShip };
})();

export {generateFleet, shipFactory};