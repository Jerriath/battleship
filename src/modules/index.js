import createPlayer from "./playerFactory.js";
import createShip from "./shipFactory.js";
import createGameboard from "./gameboardFactory.js";
import styles from "../style.css"
import { testGame } from "./gameLoop.js";
import { renderInitBoards, addAttackListener } from "./manipulateDOM.js";


let playerArray = testGame();
let player = playerArray[0];
let enemy = playerArray[1];
renderInitBoards();
addAttackListener(enemy, player);
