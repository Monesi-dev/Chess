class Rook extends Piece {

    constructor(id, color, x, y, pieces) {
        super(id, color, x, y, pieces);
    }

    canMoveTo(x, y) {

        const xDisplacement = x - this.x;
        const yDisplacement = y - this.y;

        // I have to check if every cell of the path is empty

        //I am checking if the rook can move sideways
        if (yDisplacement == 0 && xDisplacement != 0) {

            //In case the rook is moving to its right
            if (x > this.x) {
                let r = true
                for (let col = this.x + 1; col <= x; col++) {
                    if (this.isAPieceHere(col, this.y)) {
                        r = false
                    }
                }
                return r
            }

            //In case the rook is moving to its right
            else {
                let r = true
                for (let col = x; col < this.x; col++) {
                    if (this.isAPieceHere(col, this.y)) {
                        r = false
                    }
                }
                return r
            }
        }
        // I am checking if it can move up and down
        else if (xDisplacement == 0 && yDisplacement != 0) {

            //The rock is moving upwards
            if (y < this.y) {
                let r = true
                for (let row = y; row < this.y; row++) {
                    if (this.isAPieceHere(this.x, row)) { r = false }
                }
                return r
            }

            //The rock is moving downwards
            else {
                let r = true
                for (let row = this.y + 1; row <= this.y; row++) {
                    if (this.isAPieceHere(this.x, row)) { r = false }
                }
                return r
            }
        }

        return false
    }

    canEat(x, y) {
        
        const xDisplacement = x - this.x;
        const yDisplacement = y - this.y;

        // To control whether the rook can eat I will check three things: 
        // Whether the cell is on a column or on a row of the rook
        // Whether the rook can move to the cell right before the piece
        // If there is a Piece of the opposite color on that cell

        //I am controlling if it can eat sideways
        if(yDisplacement == 0 && xDisplacement != 0){

            //Eating to its right
            if(x > this.x){
                if(x == this.x + 1 || this.canMoveTo(x-1, this.y)){
                    if (this.isAPieceHere(x,y)) return true
                }
            }

            //Eating to its left
            else{
                if(x == this.x - 1 || this.canMoveTo(x+1, this.y)){
                    if (this.isAPieceHere(x,y)) return true
                }
            }

        }

        //I am controlling if it can eat up and down
        else if(xDisplacement == 0 && yDisplacement != 0){

            //Eating up
            if (y < this.y){
                if(y == this.y - 1 || this.canMoveTo(this.x, y+1)){
                    if (this.isAPieceHere(x,y)) return true
                }
            }

            //Eating Down
            else{
                if(y == this.y + 1 || this.canMoveTo(this.x, y-1)){
                    if (this.isAPieceHere(x,y)) return true
                }
            }
            
        }

        return false
    }

}