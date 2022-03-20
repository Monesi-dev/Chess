class Bishop extends Piece {

    constructor(id, color, x, y, pieces){
        super(id, color, x, y, pieces);
    }

    canMoveTo(x, y){

        const xDisplacement = x - this.x;
        const yDisplacement = y - this.y;

        //When the Bishops moves diagonally the Absolute Value of the Displacement in the X axis is equal to the one in the Y axis
        if (xDisplacement == yDisplacement){

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
    }

    canEat(x, y) {
    
        const xToCheck = x > this.x ? x-1 : x+1;
        const yToCheck = y > this.y ? y-1 : y+1;

        if(xToCheck == this.x && yToCheck == this.y){ return true }
        else { return this.canMoveTo(xToCheck, yToCheck) }
    }
}