class Piece {

    constructor(id, color, x, y, pieces) {
        this.id = id;
        this.color = color; // False for White and True for Black
        this.x = x;
        this.y = y;
        this.justMoved = false; // This is necessary for the En Passant
        this.pieces = pieces;
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
        this.render();
    }

    canMoveTo(x, y) {}
    canEat(x, y) {}

    updateBoard(x, y) {
        this.pieces = this.pieces.filter( piece => { 
            return !piece.isHere(x,y) 
        })
    }

    setPieces(pieces) {
        this.pieces = pieces;
    }

    isHere(x, y) {
        if (x == this.x && y == this.y) { return true }
        else { return false }
    }

    // THIS FUNCTION SHOULD BE WRITTEN BETTER  REMOVE THAT SHITTY R VARIABLE
    isAPieceHere(x, y){
        let r = false;
        this.pieces.forEach( piece => {
            if (piece.isHere(x,y)) { r = true }
        })
        return r;
    }

    isAPawnWhichHasJustMovedHere(x, y){
        let r = false;
        this.pieces.forEach( piece => {
            if (piece.isHere(x,y) == true && piece.justMoved == true) { r = true }
        })
        return r;
    }

    remove() {
        this.id.style.display = "none";
    }

    render() {
        // 64 is the Pixel Length of a Side of a Square
        this.id.style.top = this.y * 64 + "px";
        this.id.style.left = this.x * 64 + "px";
    }

}