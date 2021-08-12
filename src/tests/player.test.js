import { expect, test } from "@jest/globals";
import createPlayer from "../modules/playerFactory.js";
import createShip from "../modules/shipFactory.js";
import createGameboard from "../modules/gameboardFactory.js";

test("player object is created with a gameboard attribute", () => {
    let carrier = createShip("carrier", 5, [1, 1], "x");
    carrier.setCoordinates();
    let playerBoard = createGameboard();
    playerBoard.initGameboard();
    let newPlayer = createPlayer(playerBoard);
    newPlayer.getGameboard().placeShip(carrier);
    expect(newPlayer.getGameboard()).toStrictEqual(playerBoard);
});

test("player can attack another player's board with a specified coordinate", () => {
    let carrier = createShip("Carrier", 5, [1, 1], "x");
    carrier.setCoordinates();
    let destroyer = createShip("Destroyer", 3, [1, 1], "y");
    destroyer.setCoordinates();
    let playerBoard = createGameboard();
    playerBoard.initGameboard();
    let cpuBoard = createGameboard();
    cpuBoard.initGameboard();
    let cpuPlayer = createPlayer(cpuBoard);
    cpuPlayer.getGameboard().placeShip(destroyer);
    let newPlayer = createPlayer(playerBoard);
    newPlayer.getGameboard().placeShip(carrier);
    let attackMsg = newPlayer.attack(cpuPlayer, [1, 1]);
    expect(attackMsg).toBe("Destroyer has been hit!!!");
});

test("cpu can attack random coordinate", () => {
    let carrier = createShip("Carrier", 5, [1, 1], "x");
    carrier.setCoordinates();
    let destroyer = createShip("Destroyer", 3, [1, 1], "y");
    destroyer.setCoordinates();
    let playerBoard = createGameboard();
    playerBoard.initGameboard();
    let cpuBoard = createGameboard();
    cpuBoard.initGameboard();
    let cpuPlayer = createPlayer(cpuBoard);
    cpuPlayer.getGameboard().placeShip(destroyer);
    let newPlayer = createPlayer(playerBoard);
    newPlayer.getGameboard().placeShip(carrier);
    let attackMsg = cpuPlayer.attackRandom(newPlayer);
    cpuPlayer.attackRandom(newPlayer);
    expect(attackMsg).toBeTruthy(); //Truthy value means that a message is returned; functions that this depends on are all tested as well
});