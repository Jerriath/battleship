import createPlayer from "./playerFactory.js";
import createShip from "./shipFactory.js";
import createGameboard from "./gameboardFactory.js";
import styles from "../style.css"
import { testGame } from "./gameLoop.js";
import { renderInitBoards, addAttackListener } from "./manipulateDOM.js";

//Add event listener to the start game button
let startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", function() {
    let welcomePage = document.querySelector("#welcomePage");
    let welcomeText = document.querySelector("#welcomeText");
    welcomeText.style.visibility = "hidden";
    welcomePage.style.width = "0%";
    startBtn.style.visibility = "hidden";
});
    

let playerArray = testGame();
let player = playerArray[0];
let enemy = playerArray[1];
renderInitBoards();
addAttackListener(enemy, player);
