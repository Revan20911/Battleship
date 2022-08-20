import Board from "./Classes/Board";
import {
    generateFleet,
    shipFactory
}
from './Factories/shipFactory';

import { Cells } from "./Classes/Cells";
import { gameStart, opponentTurn} from "./Game";



export const renderBoard = ((grid, axis,  player) =>{

    const board = [];
    const cols = 10;
    const rows = 10;
    const fleet = generateFleet().playerFleet;

    var count = 0;

    grid
        .style
        .setProperty('--grid-cols', cols);

    grid
        .style
        .setProperty('--grid-rows', rows);

    for(let a = 0; a < cols; a++){
        for(let b = 0; b < rows; b++){

            let gridItem = document.createElement('div');

            grid
                .appendChild(gridItem);

            grid
                .appendChild(gridItem)
                .className = "cell";

            
            if(player == ''){

                grid
                .appendChild(gridItem)
                .addEventListener('click', function addShips(){

                const ship = fleet[count];

                if(cell.hasShip == false){

                    shipFactory
                        .placeShip(ship, cell, axis, pBoard);
                        
                    count++;
    
                    if(count > 4){
                        count = count - fleet.length;
                        gameStart();
                        
                        console.log('All ships placed', count);
                        
                    }
                }

                });

            }

            else if( player == 'opponent'){

                grid
                .appendChild(gridItem)
                .addEventListener('click', function playerTurn(){

                    const playerScore = 0;

                    if(cell.hasShip == true){
                
                        cell.element.style.backgroundColor = 'green';
                
                        playerScore += 1;
                        declareWinner(playerScore);
                
                    }
                
                    else if(cell.hasShip == false){
                
                        cell.element.style.backgroundColor = 'blue';
                    }

                    opponentTurn()
                
                });

            }

            //Creates cell objects and assigns the gridItem as the element property of the object.
            //Pushes new cell to the board array and then returns the array.

            const cell = new Cells(a, b, gridItem);
            board.push(cell);
        }
    }

    const pBoard = new Board(board);

    console.log(pBoard);

    return {pBoard};
});




