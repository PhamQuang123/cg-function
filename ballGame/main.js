const pointInp = document.getElementById("point-inp");
const keyD = document.getElementById("container");
const divBox = document.getElementById("game-board");


let objBoard = new GameBoard(500, 300, 0, 0);
let leftBall = Math.floor(Math.random() * objBoard.getWidth());
let objBall = new Ball(0, leftBall, 20, 1, 1);
let objBar = new Bar(100, 10, 200, 20, 20);
let objPoint = new Points(0);

let pointValue = pointInp.textContent;

function start() {
    // gameBoard.innerHTML = objBoard.getGameBoard();
    // ballInp.innerHTML = objBall.getBallElement();
    // barInp.innerHTML = objBar.getBarElement();
    divBox.innerHTML = ``;
    display();
    objBall.runRandom(objBoard, objBar, objPoint);
    pointInp.innerHTML = `${pointValue} ${objPoint.getPoint()}`;

    let stop = setTimeout(start, 10);
    if (objPoint.getPoint() == 5) {
        clearTimeout(stop)
    }
}

start();

function display() {
    divBox.style.width = `${objBoard.getWidth()}px`;
    divBox.style.height = `${objBoard.getHeigth()}px`;
    divBox.appendChild(objBoard.getGameBoard());
    divBox.appendChild(objBall.getBallElement());
    divBox.appendChild(objBar.getBarElement());
}

keyD.addEventListener("keydown", (e) => {
    objBar.setSpeed(20)
    objBar.runBar(objBoard, e);
})
divBox.addEventListener("mouseover", (e) => {
    objBar.setSpeed(5);
    let mouseX = e.clientX;

        if (mouseX >= 550){
            objBar.setLeft(objBoard.getWidth() - objBar.getWidth());
        }else if(mouseX <= 150){
            objBar.setLeft(0);
        }
        else{
            objBar.setLeft(mouseX -150)
        }

});
