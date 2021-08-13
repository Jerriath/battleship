import createPlayer from "./playerFactory.js";
import createShip from "./shipFactory.js";
import createGameboard from "./gameboardFactory.js";
import styles from "../style.css"
import { testGame } from "./gameLoop.js";
import { renderInitBoards, addAttackListener } from "./manipulateDOM.js";


testGame();
renderInitBoards();
addAttackListener();
