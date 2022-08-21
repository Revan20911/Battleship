import { render } from "./domBuilder";
import { generateFleet, shipFactory } from "./Factories/shipFactory";

//TODO: Add ability to swtch the axis.

let winMessage = document.querySelector('#winMessage');
let oscore = document.querySelector('#opponentscore');

let axis = 'y';
function gameStart(){


    let fleet = generateFleet().playerFleet;

    for(let i = 0; i < fleet.length; i++){

        shipFactory.placeOpponentShips(fleet[i], 'y', render.opponentBoard);
    }

}

function opponentTurn(){

    let opponentScore = 0;
    

    var random = Math.floor(Math.random() * 99)+1;

    let cell = render.playerBoard.pBoard.board[random];

    if(cell.hasShip == true && cell.isHit == false){

        cell.element.style.backgroundColor = 'green';
        opponentScore++;
        updateScore(oscore);
        cell.cellHit();

        declareWinner(oscore, 'CPU');

        

    }

    else if(cell.hasShip == false && cell.isHit == false){

        cell.element.style.backgroundColor = 'blue';
        cell.cellHit();
    }

   

}

function declareWinner(score, player){

    if(score.innerHTML == 17){

        //TODO: Create an element that shows the winner
        
        console.log('Winner', score);
        gameEnd(player);
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

function gameEnd(player){


    winMessage.style.display = 'flex';
    winMessage.innerText = player + ' Wins!'; 
    



}

function updateScore(element){

    element.innerHTML++;

}

export {gameStart, opponentTurn, declareWinner, restartGame, updateScore};

