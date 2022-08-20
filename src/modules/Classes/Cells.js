export class Cells{
    constructor(x,y, element){

        this.x = x;
        this.y = y;
        this.element = element;
        this.hasShip = false;
        
        
    }

    color(){

        this.element
            .style
            .backgroundColor = 'red';
    }

}