import styles from "../style.css";
import { placeCarrier, placeBattleship, placeDestroyer, placeSubmarine, placePatrol} from "./startGame.js";

//Array and index are for changing the placeCurrentShip function to place all ships
let placeShipArray = [placeCarrier, placeBattleship, placeDestroyer, placeSubmarine, placePatrol];
let index = 0;
let placeCurrentShip = placeShipArray[index];

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

//Needed to add event listeners to the enemy squares for initiating attacks; this function is a little long because it includes game functionality along with DOM manipulation
export function addAttackListener(enemy, player) {
    for (let i = 0; i < 100; i++) {
        let currentId = "enemy" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.addEventListener("click", function(e) {
            let x = null;
            let y = null;
            if (currentId.length === 6) {
                x = parseInt(currentId.charAt(5));
                y = 0;
            }
            else {
                x = parseInt(currentId.charAt(6));
                y = parseInt(currentId.charAt(5));
                
            }
            let msg = player.attack(enemy, [x, y]);
            let clone = e.target.cloneNode(true);
            if (msg.includes("missed")) {
                clone.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            }
            else {
                clone.style.backgroundColor = "red";
            }
            e.target.replaceWith(clone);
            e.target.style.backgroundColor = "black";
            console.log("Player Attack: " + msg);
            setTimeout(function() {
                let newMsg = enemy.attackRandom(player);
                let coords = newMsg.slice(0, 2);
                console.log(coords);
                let square = null;
                if (coords.charAt(1) === "0") {
                    square = document.querySelector("#player"+coords.charAt(0))
                }
                else {
                    square = document.querySelector("#player"+coords.charAt(1)+coords.charAt(0));
                }
                if (newMsg.includes("missed")) {
                    square.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                }
                else {
                    square.style.backgroundColor = "red";
                }
                newMsg = newMsg.substring(2);
                console.log("Enemy Attack: " + newMsg);
            }, 1000);
        })
    }
}

//Function for adding event Listeners for placing ships on playerBoard
export function addPlaceListener(player) {
    for (let i = 0; i < 100; i++) {
        let currentId = "player" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.addEventListener("click", function(e) {
            let x = null;
            let y = null;
            if (currentId.length === 7) {
                x = parseInt(currentId.charAt(6));
                y = 0;
            }
            else {
                x = parseInt(currentId.charAt(7));
                y = parseInt(currentId.charAt(6));
                
            }
            let position = [x, y];
            placeCurrentShip(player, position);
            index++;
            if (index === 5) {
                console.log("index = 5");
                index = 0;
                placeCurrentShip = null;
                document.querySelector("#playerBoard").classList.remove("centerView");
                document.querySelector("#enemyBoard").classList.remove("transparent");
            }
        })
    }
}

function highlight(e, length) {
    let currentSquare = e.target;
    //Need to figure out how to highlight "length" number of blocks in the correct axis orientation
}