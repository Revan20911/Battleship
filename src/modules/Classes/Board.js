export default class Board{

    constructor(board){

        this.board  =  board || [];
        if(!this.board.length) this.defaultBoardProps();
    }

    defaultBoardProps(){
        for(let i = 0; i < this.board.length; i++){
            this.board.push({hit: false, ship: false});
        }  
    }
}