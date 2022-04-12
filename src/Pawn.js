class Pawn extends Piece {

    constructor(id, color, x, y, pieces) {
        super(id, color, x, y, pieces);
        this.firstMove = true;
    }

    canMoveTo(x, y) {

        const xDisplacement = x - this.x;
        const yDisplacement = (this.color == false) ? this.y - y : y - this.y;
        // It is fundamental to multiply this by the color because white pawns have a negative displacement as they get closer to row 0 
        // Whereas Black Pawns must have a positive displacement as they get closer to row 7

        if (xDisplacement == 0) {

            if (yDisplacement == 1 && this.isAPieceHere(x, y) == false) {
                this.firstMove = false;
                return true
            }
            else if (yDisplacement == 2 && this.firstMove == true) {
                const yToCheck = (this.color == false) ? this.y - 1 : this.y + 1;
                console.log(yToCheck)

                if (this.isAPieceHere(x, yToCheck) == false) {
                    this.justMoved = true;
                    this.firstMove = false;
                    return true
                }
                else {
                    return false
                }
            }
        }

        return false;

    }

    canEat(x, y) {
        const xDisplacement = x - this.x;
        const yDisplacement = (this.color == false) ? this.y - y : y - this.y;;

        // The first if checks if the displacement has the shape of an horizontal L, the second one, instead, looks for vertical L
        if ((yDisplacement == 1) && (xDisplacement == 1 || xDisplacement == -1)) {
            return true 
        }
        else {
            return false
        }

    }

    enPassant(x, y) {

        const xDisplacement = x - this.x;
        const yDisplacement = y - this.y;

        if (this.color == false && yDisplacement == -1 && (xDisplacement == 1 || xDisplacement == -1)) {
            if (this.isAPawnWhichHasJustMovedHere(x, y + 1)) {
                return true
            }
        }
        else if (this.color == true && yDisplacement == 1 && (xDisplacement == 1 || xDisplacement == -1)) {
            if (this.isAPawnWhichHasJustMovedHere(x, y - 1)) {
                return true;
            }
        }
        else {
            return false;
        }


    }

}