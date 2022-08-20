import { renderBoard } from "./domBuilder";
import { generateFleet, shipFactory } from "./Factories/shipFactory";

function gameStart(){

    const opponentBoardGrid = document.querySelector('#player2');

    const opponentBoard = renderBoard(opponentBoardGrid, 'y').pBoard;

    let fleet = generateFleet().playerFleet;

    for(let i = 0; i < fleet.length; i++){

        shipFactory.placeOpponentShips(fleet[i], 'y', opponentBoard);
    }


    // opponentBoard.board.forEach((cell) => {

    //     cell.element.removeEventListener('click', addShip);
    //     cell.element.addEventListener('click', playerTurn);
    // })



}



function checkWinner(){


}

function declareWinner(){


}

function restartGame(){


}

export {gameStart};

