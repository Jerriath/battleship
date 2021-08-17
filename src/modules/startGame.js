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
    enemyBoard.placeShipRand(enemyCarrier);
    enemyBoard.placeShipRand(enemyBattleship);
    enemyBoard.placeShipRand(enemyDestroyer);
    enemyBoard.placeShipRand(enemySubmarine);
    enemyBoard.placeShipRand(enemyPatrol);
    let player = createPlayer(playerBoard);
    let enemy = createPlayer(enemyBoard);
    return [player, enemy];
}

//Function to init empty board and player objects
export function initGame() {
    let playerBoard = createGameboard();
    playerBoard.initGameboard();
    let enemyBoard = createGameboard();
    enemyBoard.initGameboard();
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
    enemyBoard.placeShipRand(enemyCarrier);
    enemyBoard.placeShipRand(enemyBattleship);
    enemyBoard.placeShipRand(enemyDestroyer);
    enemyBoard.placeShipRand(enemySubmarine);
    enemyBoard.placeShipRand(enemyPatrol);
    let player = createPlayer(playerBoard);
    let enemy = createPlayer(enemyBoard);
    return [player, enemy];
}

//Function for placing carrier on playerBoard
export function placeCarrier(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newCarrier = createShip("Carrier", 5, position, axis);
    newCarrier.setCoordinates();
    console.log(newCarrier.getCoordinates())
    player.getGameboard().placeShip(newCarrier);
}

//Function for placing carrier on playerBoard
export function placeBattleship(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newBattleship = createShip("Battleship", 4, position, axis);
    newBattleship.setCoordinates();
    player.getGameboard().placeShip(newBattleship);
}


//Function for placing carrier on playerBoard
export function placeDestroyer(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newDestroyer = createShip("Destroyer", 3, position, axis);
    newDestroyer.setCoordinates();
    player.getGameboard().placeShip(newDestroyer);
}


//Function for placing carrier on playerBoard
export function placeSubmarine(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newSubmarine = createShip("Submarine", 3, position, axis);
    newSubmarine.setCoordinates();
    player.getGameboard().placeShip(newSubmarine);
}


//Function for placing carrier on playerBoard
export function placePatrol(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newPatrol = createShip("Patrol", 2, position, axis);
    newPatrol.setCoordinates(); 
    player.getGameboard().placeShip(newPatrol);
}

