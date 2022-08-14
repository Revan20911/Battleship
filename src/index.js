import { renderBoard } from "./modules/domBuilder";

const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');

const axis = 'y';

const render = (() => {

   const player1 = renderBoard(p1, axis);
   console.log(player1.pBoard);
   const player2 = renderBoard(p2, axis);

   

})();
