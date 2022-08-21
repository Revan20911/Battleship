export class Cells{
    constructor(x,y, element){

        this.x = x;
        this.y = y;
        this.element = element;
        this.hasShip = false;
        this.isHit = false;
        
        
    }

    color(){

        this.element
            .style
            .backgroundColor = 'red';
    }

    cellHit(){

        this.isHit = true;

    }

}