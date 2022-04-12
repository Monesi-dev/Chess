class King extends Piece {

    constructor(id, color, x, y, pieces){
        super(id, color, x, y, pieces)
    }

    canMoveTo(x, y){

        const xDisplacement = x - this.x;
        const yDisplacement = y - this.y;

        //Checking if both Displacement are between -1 and 1
        //I don't need to check if a piece is in that cell because if it were I would have never received the input to move there
        //The same goes for the condition in which both xDisplacement and yDisplacement are equal to zero as I would have clicked on the King
        if (Math.pow(xDisplacement, 2) < 2 && Math.pow(yDisplacement, 2) < 2){
            let r = true;
            this.pieces.forEach(piece => {
                if (piece.color == !this.color && piece.canEat(x, y)){
                    console.log(piece.color);
                    console.log(piece)
                    console.log("The King can't move here!");
                    r = false
                }
            })
            return r
        }

        return false

    }

    canEat(x, y){
        return false
    }
}