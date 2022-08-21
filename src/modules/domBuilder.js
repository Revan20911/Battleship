import Board from "./Classes/Board";
import {
    generateFleet,
    shipFactory
}
from './Factories/shipFactory';

import { Cells } from "./Classes/Cells";
import { gameStart, opponentTurn, declareWinner} from "./Game";


const renderBoard = ((grid, axis, player) =>{

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

                    let playerScore = 0;

                    if(cell.hasShip == true && cell.isHit == false){
                
                        cell.element.style.backgroundColor = 'green';
                        cell.cellHit();
                
                        playerScore += 1;
                        declareWinner(playerScore);
                
                    }
                
                    else if(cell.hasShip == false && cell.isHit == false){
                
                        cell.element.style.backgroundColor = 'blue';
                        cell.cellHit();
                    }

                    opponentTurn();
                
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


const render = (() => {

    const axis = 'y';
    const p1 = document.querySelector('#player1');
    const playerBoard = renderBoard(p1, axis, '');


    // const endScreen = document.querySelector('#endScreen');
    

    // const restartBtn = document.querySelector('#restart');
    // restartBtn.addEventListener('click', restartGame);

    // const axisBtn = document.querySelector('#axis');
    // axisBtn.addEventListener('click', changeAxis);

    const opponentBoardGrid = document.querySelector('#player2');
    const opponentBoard = renderBoard(opponentBoardGrid, 'y', 'opponent').pBoard;
    return {opponentBoard, playerBoard};
    
})();

export {render};