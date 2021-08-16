import styles from "../style.css"
import { testGame, initGame } from "./startGame.js";
import { initBtns, renderInitBoards, addAttackListener, addPlaceListener} from "./manipulateDOM.js";
import { placeCarrier, placeBattleship, placeDestroyer, placeSubmarine, placePatrol} from "./startGame.js";

initBtns();
let playerArray = initGame();
let player = playerArray[0];
let enemy = playerArray[1];
renderInitBoards();
addPlaceListener(player);
addAttackListener(enemy, player);
