import { renderBoard } from "./modules/domBuilder";

const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');

const render = (() => {

   const player1 = renderBoard(p1);
   const player2 = renderBoard(p2);

   console.log(player1.pBoard, player2.pBoard);
   console.log(player1.pBoard.board[0]);

})();
