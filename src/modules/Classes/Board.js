export default class Board{

    constructor(board){

        this.board  =  board || [];
        if(!this.board.length) this.defaultBoardProps();
    }

    defaultBoardProps(){
        for(let i = 0; i < this.board.length; i++){
            this.board.push({Hit: false, Ship: false});
        }
    }

    cellHit(cell){

        this.board[cell].Hit = true;

    }

    cellShip(cell){

        this.board[cell].Ship = true;
    }
}