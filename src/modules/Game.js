import { render } from "./domBuilder";
import { generateFleet, shipFactory } from "./Factories/shipFactory";

//TODO: Add ability to swtch the axis.

let axis = 'y';
function gameStart(){


    let fleet = generateFleet().playerFleet;

    for(let i = 0; i < fleet.length; i++){

        shipFactory.placeOpponentShips(fleet[i], 'y', render.opponentBoard);
    }

    


}

function opponentTurn(){

    let opponentScore = 0;
    let count = 0;

    var random = Math.floor(Math.random() * 99)+1;

    let cell = render.playerBoard.pBoard.board[random];

    if(cell.hasShip == true && cell.isHit == false){

        cell.element.style.backgroundColor = 'green';
        cell.cellHit();

        opponentScore += 1;

    }

    else if(cell.hasShip == false && cell.isHit == false){

        cell.element.style.backgroundColor = 'blue';
        cell.cellHit();
    }

    else if(cell.isHit == true){
        throw(drawMessage);
        gameEnd();

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

function gameEnd(){



}

export {gameStart, opponentTurn, declareWinner, restartGame};

