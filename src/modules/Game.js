import { renderBoard } from "./domBuilder";
import { generateFleet, shipFactory } from "./Factories/shipFactory";


//TODO: Add ability to swtch the axis.

let axis = 'y';

const render = (() => {

    const p1 = document.querySelector('#player1');
    const player1 = renderBoard(p1, axis, '');

    // const restartBtn = document.querySelector('#restart');
    // restartBtn.addEventListener('click', restartGame);

    // const axisBtn = document.querySelector('#axis');
    // axisBtn.addEventListener('click', changeAxis);

});

function gameStart(){

    const opponentBoardGrid = document.querySelector('#player2');

    const opponentBoard = renderBoard(opponentBoardGrid, 'y', 'opponent').pBoard;

    let fleet = generateFleet().playerFleet;

    for(let i = 0; i < fleet.length; i++){

        shipFactory.placeOpponentShips(fleet[i], 'y', opponentBoard);
    }


}


function opponentTurn(cell){

    const opponentScore = 0;

    if(cell.hasShip == true){

        cell.element.style.backgroundColor = 'green';

        opponentScore += 1;
        declareWinner(opponentScore);

    }

    else if(cell.hasShip == false){

        cell.element.style.backgroundColor = 'blue';
    }

    

}

function declareWinner(score){

    var max = 17;

    if(score == max){

        //TODO: Create an element that shows the winner
    }

}

function restartGame(){

    location.reload();
    return false;

}

function changeAxis(){

    if(axis = 'y'){

        axis = 'x';
    }

    axis = 'y';

}

export {gameStart, opponentTurn, declareWinner, restartGame, render};

