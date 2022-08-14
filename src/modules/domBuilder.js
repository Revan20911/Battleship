import Board from "./Classes/Board";
import {
    generateFleet,
    shipFactory
}
from './Factories/shipFactory';

import { Cells } from "./Classes/Cells";


export const renderBoard = ((grid, axis) =>{

    const board = [];
    const cols = 10;
    const rows = 10;
    const fleet = generateFleet.playerFleet;

    let count = 0;

    grid.style.setProperty('--grid-cols', cols);
    grid.style.setProperty('--grid-rows', rows);

    for(let a = 0; a < cols; a++){
        for(let b = 0; b < rows; b++){

            let gridItem = document.createElement('div');
            grid.appendChild(gridItem);
            grid.appendChild(gridItem).className = "cell";
            grid.appendChild(gridItem).setAttribute('x', a);
            grid.appendChild(gridItem).setAttribute('y', b);
            grid.appendChild(gridItem).addEventListener('click', function addShips(){

                const ship = fleet[count];

                if(cell.hasShip == false){

                    shipFactory.placeShip(ship, cell, axis, pBoard);
                    count++;
    
                    if(count > 4){
                        console.log('All ships placed');

                        
                    }
                }

            });

            const cell = new Cells(a, b, gridItem);
            

            board.push(cell);
        }
    }

    const pBoard = new Board(board);

    return {pBoard};
});

export const gameButtons = (() => {


})


