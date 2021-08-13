import createShip from "./shipFactory.js";
import createGameboard from "./gameboardFactory.js";
import createPlayer from "./playerFactory.js";

//Function to init all game values with test variables
export function testGame() {
    let playerCarrier = createShip("Carrier", 5, [1, 1], "y");
    let playerBattleship = createShip("Battleship", 4, [3, 1], "x");
    let playerDestroyer = createShip("Destroyer", 3, [6, 9], "x");
    let playerSubmarine = createShip("Submarine", 3, [5, 5], "y");
    let playerPatrol = createShip("Patrol", 2, [8, 2], "y");
    let playerBoard = createGameboard();
    let enemyCarrier = createShip("Carrier", 5, [1, 1], "y");
    let enemyBattleship = createShip("Battleship", 4, [3, 1], "x");
    let enemyDestroyer = createShip("Destroyer", 3, [6, 9], "x");
    let enemySubmarine = createShip("Submarine", 3, [5, 5], "y");
    let enemyPatrol = createShip("Patrol", 2, [8, 2], "y");
}