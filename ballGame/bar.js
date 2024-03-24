class Bar {
    width;
    heigth;
    left;
    bottom;
    speed;

    constructor(width, heigth, left, bottom, speed) {
        this.width = width;
        this.heigth = heigth;
        this.left = left;
        this.bottom = bottom;
        this.speed = speed;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getHeigth() {
        return this.heigth;
    }

    setHeigth(heigth) {
        this.heigth = heigth;
    }

    getLeft() {
        return this.left;
    }

    setLeft(left) {
        this.left = left;
    }

    getBottom() {
        return this.bottom;
    }

    setBottom(bottom) {
        this.bottom = bottom;
    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    getBarElement() {
        let divBar = document.createElement("div");
        divBar.style.width = `${this.width}px`;
        divBar.style.height = ` ${this.heigth}px`;
        divBar.style.left = `${this.left}px`;
        divBar.style.bottom = `${this.getBottom()}px`;
        divBar.classList.add("bar");
        return divBar;
    }

    moveLeft() {
        this.left += this.getSpeed();
    }

    runBar(objBoard, e) {
        // bar meet rigth
        if (e.key == "ArrowRight" && this.getLeft() <= objBoard.getWidth() - this.getWidth() - this.getSpeed()) {
            if (this.getSpeed() < 0) {
                this.setSpeed(-this.getSpeed());
            }
            this.moveLeft()
            console.log(this.getSpeed())

        }
        // bar meet left
        if (e.key == "ArrowLeft" && this.getLeft() >= 20) {
            if (this.getSpeed() > 0) {
                this.setSpeed(-this.getSpeed());
            }
            this.moveLeft();
            console.log(this.getSpeed())
        }
    }


}