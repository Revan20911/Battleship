export class Cells{
    constructor(x,y, element){

        this.x = x;
        this.y = y;
        this.hasShip = false;
        this.element = element;
    }

    color(){

        this.element.style.backgroundColor = 'red';
    }
}