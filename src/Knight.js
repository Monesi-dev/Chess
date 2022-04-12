class Knight extends Piece {

    constructor(id, color, x, y, pieces) {
        super(id, color, x, y, pieces);
    }

    canMoveTo(x, y) {
        const xDisplacement = x - this.x;
        const yDisplacement = y - this.y;

        // The first if checks if the displacement has the shape of an horizontal L, the second one, instead, looks for vertical L
        if ((xDisplacement == 2 || xDisplacement == -2) && (yDisplacement == 1 || yDisplacement == -1)) {
            if (this.isAPieceHere(x, y) == false) { return true }
        }
        else if ((xDisplacement == 1 || xDisplacement == -1) && (yDisplacement == 2 || yDisplacement == -2)) {
            if (this.isAPieceHere(x, y) == false) { return true }
        }
        else { return false }
    }

    canEat(x, y) {
        const xDisplacement = x - this.x;
        const yDisplacement = y - this.y;

        // The first if checks if the displacement has the shape of an horizontal L, the second one, instead, looks for vertical L
        if ((xDisplacement == 2 || xDisplacement == -2) && (yDisplacement == 1 || yDisplacement == -1)) {
            return true
        }
        else if ((xDisplacement == 1 || xDisplacement == -1) && (yDisplacement == 2 || yDisplacement == -2)) {
            return true
        }
        else { return false }
    }

}