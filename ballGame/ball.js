class Ball {
    top;
    left;
    size;
    speedX;
    speedY;

    constructor(top, left, size, speedX, speedY) {
        this.top = top;
        this.left = left;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
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

    getSize() {
        return this.size;
    }

    setSize(size) {
        this.size = size;
    }

    getSpeedX() {
        return this.speedX;
    }

    setSpeedX(speedX) {
        this.speedX = speedX;
    }

    getSpeedY() {
        return this.speedY;
    }

    setSpeedY(speedY) {
        this.speedY = speedY;
    }

    getBallElement() {
        let divBall = document.createElement("div");
        divBall.style.width = `${this.size}px`;
        divBall.style.height = `${this.size}px`;
        divBall.style.left = `${this.left}px`;
        divBall.style.top = `${this.top}px`;
        divBall.classList.add("ball");
        return divBall;
    }

    moveLeft() {
        this.left += this.getSpeedX();
    }

    moveTop() {
        this.top += this.getSpeedY();
    }

    // runRandom(leftBar, widthBar, heigthBar, point){
    //     this.moveLeft();
    //     this.moveTop();
    //     if (this.getLeft() >= window.innerWidth - this.getSize() ) {
    //         if(this.getSpeedX() < 0){
    //             this.setSpeedX(-this.getSpeedX());
    //         }
    //         this.setSpeedX(-this.getSpeedX());
    //
    //     }
    //     if (this.getLeft() == 0){
    //         this.setSpeedX(-this.getSpeedX());
    //     }
    //     if (this.getTop() == 0){
    //         this.setSpeedY(-this.getSpeedY());
    //     }
    //     if ((this.getTop() == window.innerHeight - (this.getSize() + heigthBar)) && this.getLeft() >= leftBar - this.getSize() && this.getLeft() <= leftBar + widthBar) {
    //         if (this.getSpeedY() < 0){
    //             this.setSpeedY(-this.getSpeedY());
    //         }
    //         this.setSpeedY(-this.getSpeedY());
    //         console.log(window.innerHeight - (this.getSize() + heigthBar))
    //         console.log(this.getTop())
    //         point.setPoint(point.getPoint() + 1);
    //
    //     }
    //     if (this.getTop() >= window.innerHeight - this.getSize()){
    //         this.setLeft(Math.floor(Math.random()*window.innerWidth));
    //         this.setTop(10);
    //         point.setPoint(0);
    //
    //     }
    //
    // }

    // ball chạy trong board
    runRandom(objBoard, objBar, point) {
        this.moveLeft();
        this.moveTop();
        // ball meet rigth
        if (this.getLeft() >= (objBoard.getWidth() - this.getSize())) {
            if (this.getSpeedX() > 0) {
                this.setSpeedX(-this.getSpeedX())
            } else {
                this.setSpeedX(this.getSpeedX());
            }
        }
        // ball meet left
        if (this.getLeft() == 0) {
            if (this.getSpeedX() < 0) {
                this.setSpeedX(-this.getSpeedX());
            } else {
                this.setSpeedX(this.getSpeedX());
            }
        }
        // ball meet top
        if (this.getTop() == 0) {
            if (this.getSpeedY() < 0) {
                this.setSpeedY(-this.getSpeedY());
            } else {
                this.setSpeedY(this.getSpeedY());
            }
        }
        // ball meet bar
        if ((this.getTop() == (objBoard.getHeigth() - (objBar.getHeigth() + objBar.getBottom() + this.getSize()))) && this.getLeft() >= objBar.getLeft() - this.getSize() && this.getLeft() <= objBar.getLeft() + objBar.getWidth()) {
            if (this.getSpeedY() > 0) {
                this.setSpeedY(-this.getSpeedY());
            } else {
                this.setSpeedY(this.getSpeedY());

            }
            // console.log(this.getSpeedY())
            // console.log(this.getLeft());
            // console.log(objBoard.getHeigth() -(objBar.getHeigth() + objBar.getBottom() + this.getSize()))
            point.setPoint(point.getPoint() + 1);
        }

        // ball meet bottom
        if (this.getTop() >= objBoard.getHeigth() - this.getSize()) {
            this.setLeft(Math.floor(Math.random() * objBoard.getWidth()));
            this.setTop(10);
            point.setPoint(0);
        }

    }
}