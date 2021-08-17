import styles from "../style.css"
import { testGame, initGame } from "./startGame.js";
import { initBtns, renderInitBoards} from "./manipulateDOM.js";
import { addAttackListener, addPlaceListener, addHighlightListener } from "./runGame.js";

initBtns();
let playerArray = initGame();
let player = playerArray[0];
let enemy = playerArray[1];
renderInitBoards();
addPlaceListener(player);
addHighlightListener();
addAttackListener(enemy, player);
