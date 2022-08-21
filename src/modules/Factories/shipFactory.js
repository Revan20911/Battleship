
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

});

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
        }
        else if(axis === 'y'){
            for(let i = 0; i < fleetShip.len; i++){

                fleetShip
                    .position
                    .push([x, y + i]);
            }
        }
        setCells(board, fleetShip.position, '');
    }

    function placeOpponentShips(fleetShip, axis, board){

        //TODO: Create function that adds ships to the opponent's board and make them invisible.

        let clickedCell = randomCell(board);
            
    
        let x = clickedCell.x;
        let y = clickedCell.y;

            if(axis === 'x'){
                for(let i = 0; i < fleetShip.len; i++){
    
                    fleetShip
                        .position
                        .push([x + i, y]);
                }
            }
            else if(axis === 'y'){
                
                for(let i = 0; i < fleetShip.len; i++){

                    if(y + fleetShip.len < 9){

                        if(checkCellIsOccupied(board, x, y + i) === 0){


                        fleetShip
                        .position
                        .push([x, y + i]);

                        setCells(board, fleetShip.position,  'opponent');

                        }
                        else if(checkCellIsOccupied(board, x, y + i) != 0){

                            fleetShip
                            .position
                            .push([x - i, y]);

                            setCells(board, fleetShip.position, 'opponent');
                            }
            
                    }
                    else if( y + fleetShip.len >= 9){
    
                        if(checkCellIsOccupied(board, x, y - i) === 0){

                            fleetShip
                            .position
                            .push([x, y - i]);


                            setCells(board, fleetShip.position, 'opponent');

                            }
                            else if(checkCellIsOccupied(board, x, y - i) != 0){

            
                            fleetShip
                            .position
                            .push([x - i, y]);

                            setCells(board, fleetShip.position, 'opponent');
                            }
                    }
            }
           
        }
    }

    function checkCellIsOccupied(board, x, y){

     let arr = [];

     

     board.board.forEach((cell) => {

        if(cell.x == x && cell.y == y){
            if(cell.hasShip == true){

               arr.push('');

            }
        }

     })
     console.log(arr.length);

     return arr.length;

    }

    function setCells(board, position, player){

        board.board.forEach((cell) => {

            for(let i = 0; i < position.length; i++){

                if(cell.x == position[i][0] && cell.y == position[i][1]){

                    board.cellShip(cell);

                    if(player == ''){
                        cell.color();

                    }
                    
                }
            }
        })
    }

    function randomCell(board){

        var len = 5;
        let cellArr = [];

        for(let i = 0; i < len; i++){

            var rand = Math.floor(Math.random() * 99);
            cellArr.push(rand);
           

        }
        console.log(cellArr);

        var random = Math.floor(Math.random() * 4);

        console.log(random);

        for(let j = 0; j < 5; j++){

            if(board.board[cellArr[j]].hasShip == false){

                // if(board.board[cellArr[j]].nextCell().hasShip == true){

                //     break;
                // }

                var ship = board.board[cellArr[j]]; 
                board.cellShip(ship);
                break;
            }
            else if(board.board[cellArr[j]].hasShip == true){

                continue;
            }
            break;
        }
        
        console.log(ship);
        return ship;
    
    }

   return { placeShip, placeOpponentShips };
})();

export {generateFleet, shipFactory};