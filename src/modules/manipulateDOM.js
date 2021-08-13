import styles from "../style.css";

//Cache DOM
let body = document.querySelector("body");
let container = document.querySelector("#container");

//Display the primitive boards on screen
export function renderInitBoards() {
    let playerBoard = document.createElement("div");
    playerBoard.classList.add("playerBoard");
    for (let i = 0; i < 100; i ++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.id = i + "player"; //The naming of the id is so that the grid position can be extracted from it via idString.charAt(0 or 1);
        playerBoard.appendChild(newSquare); //If the id is in the first row, a check will be done to see if the length of the string is 5 ("enemy"; 6 for "player") plus 1 or 2
    }
    container.appendChild(playerBoard);

    let enemyBoard = document.createElement("div");
    enemyBoard.classList.add("enemyBoard");
    for (let i = 0; i < 100; i ++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.id = i + "enemy";
        enemyBoard.appendChild(newSquare);
    }
    container.appendChild(enemyBoard);
}

//Needed to add event listeners to the enemy squares for initiating attacks
function addAttackListener(enemy, player) {
    for (let i = 0; i < 100; i++) {
        let currentId = i + "enemy";
        let currentSquare = document.querySelector(currentId);
        currentSquare.addEventListener("click", function(e) {
            let x = null;
            let y = null;
            if (currentId.length === 6) {
                x = parseInt(currentId.charAt(0));
                y = 0;
            }
            else {
                x = parseInt(currentId.charAt(1));
                y = parseInt(currentId.charAt(0));
                
            }
            let msg = player.attack(enemy, [x, y]);
            e.target.replaceWith(e.target.cloneNode(true));
            e.target.styles.backgroungColor = "black";
        })
    }
}