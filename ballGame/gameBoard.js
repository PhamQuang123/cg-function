class GameBoard {
    width;
    height;
    left;
    top;

    constructor(width, heigth, top, left) {
        this.width = width;
        this.height = heigth;
        this.top = top;
        this.left = left;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getHeigth() {
        return this.height;
    }

    setHeigth(heigth) {
        this.height = heigth;
    }

    getTop() {
        return this.top;
    }

    setTop(top) {
        this.top = top;
    }

    getLeft() {
        return this.left;
    }

    setLeft(left) {
        this.left = left;
    }

    getGameBoard() {
        let divBoard = document.createElement("div");
        divBoard.style.width = `${this.width}px`;
        divBoard.style.height = `${this.height}px`;
        divBoard.style.left = `${this.left}px`;
        divBoard.style.top = `${this.top}px`;
        divBoard.classList.add("board-cl")
        return divBoard;
    }
}