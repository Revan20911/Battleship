export class Ship{
    constructor(len, name, position){

        this.name = name;
        this.position = position || [];
        this.damage = [];
        this.len = len;
        this.isSunk = this.CheckIfSunk();

    }

    hit(index){
        this.damage
            .push(index);
    }

    CheckIfSunk(){
        if(this.damage.length == this.len){ this.isSunk == true; }
        else{ this.isSunk == false; }
        return this.isSunk;
    }

}

