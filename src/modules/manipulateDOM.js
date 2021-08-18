import styles from "../style.css";

//Cache DOM
let container = document.querySelector("#container");

//Add event listener to the start game button
export function initBtns() {
    let startBtn = document.querySelector("#startBtn");
    startBtn.addEventListener("click", function() {
        let welcomePage = document.querySelector("#welcomePage");
        let welcomeText = document.querySelector("#welcomeText");
        welcomeText.style.visibility = "hidden";
        welcomePage.style.width = "0%";
        startBtn.style.visibility = "hidden";
    });
    let axis = document.querySelector("#axis");
    axis.addEventListener("click", function(e) {
        if (e.target.innerHTML === "X"){
            e.target.innerHTML = "Y";
        }
        else {
            e.target.innerHTML = "X";
        }
    })
}
    

//Display the primitive boards on screen
export function renderInitBoards() {
    let playerBoard = document.createElement("div");
    playerBoard.classList.add("playerBoard");
    playerBoard.classList.add("centerView");
    playerBoard.id = "playerBoard";
    for (let i = 0; i < 100; i ++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.id = "player" + i; //The naming of the id is so that the grid position can be extracted from it via idString.charAt(0 or 1);
        playerBoard.appendChild(newSquare); //If the id is in the first row, a check will be done to see if the length of the string is 5 ("enemy"; 6 for "player") plus 1 or 2
    }
    container.appendChild(playerBoard);

    let enemyBoard = document.createElement("div");
    enemyBoard.classList.add("enemyBoard");
    enemyBoard.classList.add("transparent");
    enemyBoard.id = "enemyBoard";
    for (let i = 0; i < 100; i ++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.id = "enemy" + i;
        enemyBoard.appendChild(newSquare);
    }
    container.appendChild(enemyBoard);
}

//Function to update the messageBoard with the console messages that report what has happened
export function updateMsgBoard(msg) {
    console.log("Hello");
    let msgBoard = document.querySelector("#msgBoard");
    msgBoard.textContent = msg;
}

//Function for displaying a black screen
export function toggleBlackScreen() {
    if (blackScreen.classList.length === 0) {
        blackScreen.classList.add("transparent");
    }
    else {
        blackScreen.classList.remove("transparent");
    }
}