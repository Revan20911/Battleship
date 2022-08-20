import { renderBoard } from "./modules/domBuilder";
import { gameStart } from "./modules/Game";

const p1 = document.querySelector('#player1');


const axis = 'y';

const render = (() => {

   const player1 = renderBoard(p1, axis, gameStart);
   

})();
