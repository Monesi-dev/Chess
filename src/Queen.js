class Queen extends Piece {

    constructor(id, color, x, y, piece){
        super(id, color, x, y, pieces);
    }

    canMoveTo(x, y){

        const xDisplacement = x - this.x;
        const yDisplacement = y - this.y;


        //I am checking if the Queen is moving sideways
        if (yDisplacement == 0 && xDisplacement != 0) {

            //In this case the queen is moving to its right
            if (x > this.x) {
                let r = true
                for (let col = this.x + 1; col <= x; col++) {
                    if (this.isAPieceHere(col, this.y)) {
                        r = false
                    }
                }
                return r
            }

            //In this case instead the Queen is moving to her left
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

            //The queen is moving upwards
            if (y < this.y) {
                let r = true
                for (let row = y; row < this.y; row++) {
                    if (this.isAPieceHere(this.x, row)) { r = false }
                }
                return r
            }

            //The Queen is moving downwards
            else {
                let r = true
                for (let row = this.y + 1; row <= this.y; row++) {
                    if (this.isAPieceHere(this.x, row)) { r = false }
                }
                return r
            }
        }

         //When the Bishops moves diagonally the Absolute Value of the Displacement in the X axis is equal to the one in the Y axis
        else if (xDisplacement == yDisplacement){

            if (x > this.x) {

                let xcheck = this.x + 1;
                let ycheck = this.y +1;
                let r = true

                while(xcheck <= x && ycheck <= y){
                    if(this.isAPieceHere(xcheck, ycheck)){
                        r = false
                    }
                    xcheck++;
                    ycheck++;
                }

                return r
            }

            else if (x < this.x) {

                let xcheck = x;
                let ycheck = y;
                let r = true

                while(xcheck < this.x && ycheck < this.y){
                    if(this.isAPieceHere(xcheck, ycheck)){
                        r = false
                    }
                    xcheck++;
                    ycheck++;
                }

                return r
            }
        }

        else if(xDisplacement == -yDisplacement){
            
            if(x > this.x){
                let xcheck = this.x + 1;
                let ycheck = this.y - 1;
                let r = true;

                while(xcheck <= x && ycheck >= y){
                    if(this.isAPieceHere(xcheck, ycheck)) {
                        r = false
                    }
                    xcheck++;
                    ycheck--;
                }

                return r
            }

            else if(x < this.x){
                let xcheck = x;
                let ycheck = y;
                let r = true;

                while(xcheck < this.x && ycheck > this.y){
                    if (this.isAPieceHere(xcheck, ycheck)) { 
                        r = false
                    }
                    xcheck++;
                    ycheck--;
                }

                return r
            }
        }

        return false

    }

    canEat(x, y){ 

        const xDisplacement = x - this.x;
        const yDisplacement = y - this.y;

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

        //These are the coordinates of the square before the one where the Queen should eat
        const xToCheck = x > this.x ? x-1 : x+1;
        const yToCheck = y > this.y ? y-1 : y+1;

        //If the Queen can arrive there then she can eat the piece
        if(xToCheck == this.x && yToCheck == this.y){ return true }
        else { return this.canMoveTo(xToCheck, yToCheck) }
    }
}