const canvas = document.getElementById("board");

const canvasX = canvas.getBoundingClientRect().left;
const canvasY = canvas.getBoundingClientRect().top;

/*
const Knight1 = {
    type: "knight",
    dom: document.getElementById("w-knight-1"),
    x: 1,
    y: 7
}
function render(elem) {
    elem.dom.style.top = 64 * elem.y + "px";
    elem.dom.style.left = 64 * elem.x + "px";
}
render(Knight1)
*/
const pieces = [];
const knight1 = new Knight(document.getElementById('w-knight-1'), false, 1, 7, pieces);
const knight2 = new Knight(document.getElementById('w-knight-2'), false, 6, 7, pieces);
const bknight1 = new Knight(document.getElementById('b-knight-1'), true, 1, 0, pieces);
const bknight2 = new Knight(document.getElementById('b-knight-2'), true, 6, 0, pieces);

const wbishop1 = new Bishop(document.getElementById("w-bishop-1"), false, 2, 7, pieces);
const wbishop2 = new Bishop(document.getElementById("w-bishop-2"), false, 5, 7, pieces);
const bbishop1 = new Bishop(document.getElementById("b-bishop-1"), true, 2, 0, pieces);
const bbishop2 = new Bishop(document.getElementById("b-bishop-2"), true, 5, 0, pieces);

const wrook1 = new Rook(document.getElementById("w-rook-1"), false, 0, 7, pieces);
const wrook2 = new Rook(document.getElementById("w-rook-2"), false, 7, 7, pieces);
const brook1 = new Rook(document.getElementById("b-rook-1"), true, 0, 0, pieces);
const brook2 = new Rook(document.getElementById("b-rook-2"), true, 7, 0, pieces);

const wqueen = new Queen(document.getElementById("w-queen"), false, 3, 7, pieces);
const bqueen = new Queen(document.getElementById("b-queen"), true, 3, 0, pieces);

const wpawn1 = new Pawn(document.getElementById('w-pawn-1'), false, 0, 6, pieces);
const wpawn2 = new Pawn(document.getElementById('w-pawn-2'), false, 1, 6, pieces);
const wpawn3 = new Pawn(document.getElementById('w-pawn-3'), false, 2, 6, pieces);
const wpawn4 = new Pawn(document.getElementById('w-pawn-4'), false, 3, 6, pieces);
const wpawn5 = new Pawn(document.getElementById('w-pawn-5'), false, 4, 6, pieces);
const wpawn6 = new Pawn(document.getElementById('w-pawn-6'), false, 5, 6, pieces);
const wpawn7 = new Pawn(document.getElementById('w-pawn-7'), false, 6, 6, pieces);
const wpawn8 = new Pawn(document.getElementById('w-pawn-8'), false, 7, 6, pieces);
const bpawn1 = new Pawn(document.getElementById('b-pawn-1'), true, 0, 1, pieces);
const bpawn2 = new Pawn(document.getElementById('b-pawn-2'), true, 1, 1, pieces);
const bpawn3 = new Pawn(document.getElementById('b-pawn-3'), true, 2, 1, pieces);
const bpawn4 = new Pawn(document.getElementById('b-pawn-4'), true, 3, 1, pieces);
const bpawn5 = new Pawn(document.getElementById('b-pawn-5'), true, 4, 1, pieces);
const bpawn6 = new Pawn(document.getElementById('b-pawn-6'), true, 5, 1, pieces);
const bpawn7 = new Pawn(document.getElementById('b-pawn-7'), true, 6, 1, pieces);
const bpawn8 = new Pawn(document.getElementById('b-pawn-8'), true, 7, 1, pieces);
pieces.push(knight1, knight2, bknight1, bknight2, wpawn1, wpawn2, wpawn3, wpawn4, wpawn5, wpawn6, wpawn7, wpawn8, bpawn1, bpawn2, bpawn3, bpawn4, bpawn5, bpawn6, bpawn7, bpawn8, wrook1, wrook2, brook1, brook2, wbishop1, wbishop2, bbishop1, bbishop2, wqueen, bqueen);
pieces.forEach( piece => {
    piece.render(); 
    piece.setPieces(pieces);
});
const board = new Board(pieces);

canvas.addEventListener("click", (e) => {

    const x = e.clientX - canvasX;
    const y = e.clientY - canvasY;
    const cellSide = 64;
    let cellX, cellY;

    //Find x column of the cell
    for (let i = 0; i < 8; i++) {
        if (x > 64 * i && x < 64 * (i + 1)) {
            cellX = i
            break;
        }
    }

    //Find y row of the cell
    for (let i = 0; i < 8; i++) {
        if (y > 64 * i && y < 64 * (i + 1)) {
            cellY = i
            break;
        }
    }

    board.click(cellX, cellY)
//    if (e.altKey) knight1.moveTo(cellX, cellY);
})