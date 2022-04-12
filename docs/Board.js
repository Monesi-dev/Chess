class Board {

    constructor(pieces) {
        this.pieces = pieces;
        this.turn = false; // False is white and True is Black
        this.pieceSelected = { x: null, y: null }
        this.state = 0 // State 0 is when I haven't selected a piece to move yet  State 1 is when I have already selected a piece
    }


    click(x, y) {

        const pieceSelected = this.pieceAt(this.pieceSelected.x, this.pieceSelected.y)
        const pieceClicked = this.pieceAt(x, y);

        if (this.state == 0) {
            if (pieceClicked.color == this.turn) {
                this.selectPieceAt(x, y);
                console.log("First Piece Selected")
            }
        }
        else {
            if (pieceClicked.color == this.turn) {
                console.log(pieceClicked.color, this.turn)
                this.selectPieceAt(x, y);
                console.log("New Piece Selected")
            }
            else if (pieceClicked.color == !this.turn) {
                console.log("Controlling if a Piece can be Eaten")
                if (pieceSelected.canEat(x, y)) {
                    console.log("Eating the Piece")
                    this.eat(pieceSelected, x, y);
                    this.changeTurn();
                }
            }
            else if (pieceSelected.canMoveTo(x, y)) {
                console.log("Moving the Piece")
                pieceSelected.moveTo(x, y);
                this.changeTurn();

            }
            else if(pieceSelected.enPassant(x,y)){
                if (this.turn){
                    this.eat(pieceSelected, x, y-1);
                    pieceSelected.moveTo(x, y);
                }
                else {
                    this.eat(pieceSelected, x, y+1);
                    pieceSelected.moveTo(x, y);
                }
                this.changeTurn();
            }

        }
    }

    eat(pieceSelected, x, y) {

        //The piece should not be rendered anymore
        this.pieceAt(x, y).remove();
        //I have to eliminate the piece from the array of the board and of every piece
        this.removePieceAt(x, y)
        //Now I can finally move my Piece to that tile
        pieceSelected.moveTo(x, y);
    }


    // THIS FUNCTION SHOULD BE WRITTEN BETTER  REMOVE THAT SHITTY R VARIABLE
    pieceAt(x, y) {
        let r = false;
        this.pieces.forEach(piece => {
            if (piece.isHere(x, y)) { r = piece }
        })
        return r;
    }

    selectPieceAt(x, y) {
        this.pieceSelected.x = x;
        this.pieceSelected.y = y;
        this.state = 1;
    }

    removePieceAt(x, y) {
        this.pieces = this.pieces.filter(piece => {
            return (piece.isHere(x, y) == false)
        })
        this.pieces.forEach(piece => piece.updateBoard(x, y))
    }

    changeTurn() {
        this.turn = !this.turn;
        this.pieces.forEach(piece => {
            if (piece.color == this.turn) { piece.justMoved = false }
        })
        this.state = 0;
    }

}