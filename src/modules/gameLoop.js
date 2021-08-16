import createShip from "./shipFactory.js";
import createGameboard from "./gameboardFactory.js";
import createPlayer from "./playerFactory.js";

//Function to init all game values with test variables
export function testGame() {
    let playerCarrier = createShip("Carrier", 5, [1, 1], "y");
    playerCarrier.setCoordinates();
    let playerBattleship = createShip("Battleship", 4, [3, 1], "x");
    playerBattleship.setCoordinates();
    let playerDestroyer = createShip("Destroyer", 3, [6, 9], "x");
    playerDestroyer.setCoordinates();
    let playerSubmarine = createShip("Submarine", 3, [5, 5], "y");
    playerSubmarine.setCoordinates();
    let playerPatrol = createShip("Patrol", 2, [8, 2], "y");
    playerPatrol.setCoordinates();
    let playerBoard = createGameboard();
    let enemyCarrier = createShip("Carrier", 5, [1, 1], "y");
    enemyCarrier.setCoordinates();
    let enemyBattleship = createShip("Battleship", 4, [3, 1], "x");
    enemyBattleship.setCoordinates();
    let enemyDestroyer = createShip("Destroyer", 3, [6, 9], "x");
    enemyDestroyer.setCoordinates();
    let enemySubmarine = createShip("Submarine", 3, [5, 5], "y");
    enemySubmarine.setCoordinates();
    let enemyPatrol = createShip("Patrol", 2, [8, 2], "y");
    enemyPatrol.setCoordinates();
    let enemyBoard = createGameboard();
    playerBoard.initGameboard();
    enemyBoard.initGameboard();
    playerBoard.placeShip(playerCarrier);
    playerBoard.placeShip(playerBattleship);
    playerBoard.placeShip(playerDestroyer);
    playerBoard.placeShip(playerSubmarine);
    playerBoard.placeShip(playerPatrol);
    enemyBoard.placeShip(enemyCarrier);
    enemyBoard.placeShip(enemyBattleship);
    enemyBoard.placeShip(enemyDestroyer);
    enemyBoard.placeShip(enemySubmarine);
    enemyBoard.placeShip(enemyPatrol);
    let player = createPlayer(playerBoard);
    let enemy = createPlayer(enemyBoard);
    return [player, enemy];
}

