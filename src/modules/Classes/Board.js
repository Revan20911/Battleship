export default class Board{

    constructor(board){

        this.board  =  board || [];
    }
  
    cellShip(cell){

        cell.hasShip = true;
    }
}