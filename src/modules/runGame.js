import styles from "../style.css";
import { placeCarrier, placeBattleship, placeDestroyer, placeSubmarine, placePatrol} from "./startGame.js";
import createShip from "./shipFactory.js"
import { updateMsgBoard } from "./manipulateDOM.js";

//Array and index are for changing the placeCurrentShip function to place all ships
let placeShipArray = [placeCarrier, placeBattleship, placeDestroyer, placeSubmarine, placePatrol];
let shipStringArray = ["Carrier", "Battleship", "Destroyer", "Submarine", "Patrol"];
let index = 0;
//Array of numbers to represent the length of the current ship beign placed to support highlighting
let currentHighlight = [5, 4, 3, 3, 2]; //Carrier, battleship, destroyer, submarine, patrol





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
            console.log("Player Attack: " + msg);
            updateMsgBoard("Player Attack: " + msg);
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
                    square.classList.remove("highlighted");
                    square.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                }
                else {
                    square.classList.remove("highlighted");
                    square.style.backgroundColor = "red";
                }
                newMsg = newMsg.substring(2);
                console.log("Enemy Attack: " + newMsg);
                updateMsgBoard("Enemy Attack: " + newMsg);

            }, 1500);
        })
    }
}

//Function for adding event Listeners for placing ships on playerBoard
export function addPlaceListener(player) {
    for (let i = 0; i < 100; i++) {
        let currentId = "player" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.addEventListener("click", function() {

            
            //Section deals with actually placing the ship into the shipArray
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
            let dummyShip = createDummyShip(position);
            if (player.getGameboard().checkValidShipCoords(dummyShip)) {


                //Section deals with highlighting the squares that the ship is placed in
                let currentShipLength = currentHighlight[index];
                let axis = document.querySelector("#axis").innerHTML;
                if (axis === "Y" || axis === "y") {
                    for (let j = i; j < (i + (10*currentShipLength)); j+=10) {
                        if (j > 99) {//Checks for if j is leaving the grid bounds
                            break;
                        }
                        let id = "#player" + j;
                        let square = document.querySelector(id);
                        square.classList.add("highlighted");
                    }
                }
                else {
                    for (let j = i; j < (i + currentShipLength); j++) {
                        if (j > (Math.floor((i+10)/10))*10-1){//Checks for if j is leaving the grid bounds
                            break;
                        }
                        let id = "#player" + j;
                        let square = document.querySelector(id);
                        square.classList.add("highlighted");
                    }
                }

                let placeCurrentShip = placeShipArray[index];
                placeCurrentShip(player, position);
                index++;
                recreateSquares(player);
                if (index === 5) {
                    console.log("index = 5");
                    removePlayerListeners();
                    for(let k = 0; k < 5; k++) {
                        console.log(player.getGameboard().getShipArray()[k].getCoordinates());
                    }
                    index = 0;
                    placeCurrentShip = null;
                    document.querySelector("#playerBoard").classList.remove("centerView");
                    document.querySelector("#enemyBoard").classList.remove("transparent");
                }
            }
            else {
                return "This is not a valid position";
            } 
        })
    }
    updateMsgBoard("Please choose a location to place your " + shipStringArray[index] + ".");
    if (index === 5) {
        updateMsgBoard("Choose a location to attack.");
    }
}

//Listener to highlight the squares where the ship will be placed
export function addHighlightListener() {
    for (let i = 0; i < 100; i++) {
        let currentId = "player" + i;
        let currentShipLength = currentHighlight[index];
        let currentSquare = document.querySelector("#" + currentId);
        //The listener used to highlight
        currentSquare.addEventListener("mouseenter", function() {
            let axis = document.querySelector("#axis").innerHTML;
            if (axis === "Y" || axis === "y") {
                for (let j = i; j < (i + (10*currentShipLength)); j+=10) {
                    if (j > 99) {//Checks for if j is leaving the grid bounds
                        break;
                    }
                    let id = "#player" + j;
                    let square = document.querySelector(id);
                    square.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                }
            }
            else {
                for (let j = i; j < (i + currentShipLength); j++) {
                    if (j > (Math.floor((i+10)/10))*10-1){//Checks for if j is leaving the grid bounds
                        break;
                    }
                    let id = "#player" + j;
                    let square = document.querySelector(id);
                    square.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                }
            }
        })
        //The listener used to unhighlight
        currentSquare.addEventListener("mouseleave", function() {
            let axis = document.querySelector("#axis").innerHTML;
            if (axis === "Y" || axis === "y") {
                for (let j = i; j < (i + (10*currentShipLength)); j+=10) {
                    if (j > 99) {//Checks for if j is leaving the grid bounds
                        break;
                    }
                    let id = "#player" + j;
                    let square = document.querySelector(id);
                    square.style.backgroundColor = "";
                }
            }
            else {
                for (let j = i; j < (i + currentShipLength); j++) {
                    if (j > (Math.floor((i+10)/10))*10-1){//Checks for if j is leaving the grid bounds
                        break;
                    }
                    let id = "#player" + j;
                    let square = document.querySelector(id);
                    square.style.backgroundColor = "";
                }
            }
        })
    }
}

//Function for removing all Listeners (on playerBoard)
function removePlayerListeners() {
    for (let i = 0; i < 100; i++) {
        let currentId = "player" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.replaceWith(currentSquare.cloneNode(true));
    }
}

//Function to recreate all the squares and reattach all the listeners (needed to change highlight length)
function recreateSquares(player) {
    for (let i = 0; i < 100; i++) {
        let currentId = "player" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.replaceWith(currentSquare.cloneNode(true));
    }
    addPlaceListener(player);
    addHighlightListener();
}

//Function to create a dummy ship to check for valid placement
function createDummyShip(position) {
    let dummyShip = null;
    switch (index) {
        case 0:
            dummyShip = createShip("Carrier", 5, position, document.querySelector("#axis").innerHTML);
            break;
        case 1: 
            dummyShip = createShip("Battleship", 4, position, document.querySelector("#axis").innerHTML);
            break;
        case 2:
            dummyShip = createShip("Destroyer", 3, position, document.querySelector("#axis").innerHTML);
            break;
        case 3:
            dummyShip = createShip("Submarine", 3, position, document.querySelector("#axis").innerHTML);
            break;
        case 4: 
            dummyShip = createShip("Patrol", 2, position, document.querySelector("#axis").innerHTML);
    }
    dummyShip.setCoordinates();
    return dummyShip;
}