export default class Board{

    constructor(board){

        this.board  =  board || [];
    }
    cellHit(cell){

        this.board[cell].Hit = true;
    }
    cellShip(cell){

        this.board[cell].Ship = true;
    }
}