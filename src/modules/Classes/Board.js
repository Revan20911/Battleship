export default class Board{

    constructor(board){

        this.board  =  board || [];
        if(!this.board.length) this.defaultBoardProps();
    }

    defaultBoardProps(){
        for(let i = 0; i < this.board.length; i++){
            this.board.push({cellHit: false, cellShip: false});
        }
    }

    cellHit(cell){

        this.board[cell].cellHit = true;

    }

    cellShip(cell){

        this.board[cell].cellShip = true;
    }

    
}