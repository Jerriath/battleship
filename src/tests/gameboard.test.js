import { expect } from "@jest/globals";
import createGameboard from "../modules/gameboardFactory.js";
import createShip from "../modules/shipFactory.js";

test("creates appropriately sized gameboard with false values", () => {
    let newBoard = createGameboard();
    newBoard.initGameboard();
    expect(newBoard.getWidth()).toBe(10);
    expect(newBoard.getLength()).toBe(10);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            expect(newBoard.getBoard()[i][j]).toBe(false);
        }
    }
})

test("gameboard can tell if all ships are sunk", () => {
    let newBoard = createGameboard();
    newBoard.initGameboard();
    let carrier = createShip("carrier", 5, [1, 1], "y");
    let destroyer = createShip("destroyer", 3, [5, 3], "x");
    carrier.setCoordinates();
    destroyer.setCoordinates();
    newBoard.placeShip(carrier);
    newBoard.placeShip(destroyer);
    let shipArray = newBoard.getShipArray();
    for (let i = 0; i < shipArray.length; i++ ) {
        let currentCoords = shipArray[i].getCoordinates();
        for (let j = 0; j < currentCoords.length; j++) {
            shipArray[i].hit(currentCoords[j]);
            newBoard.updateStatus();
            j--; //decrement because the hit method uses splice which reduces the length of the array by 1
        }
    }
    expect(newBoard.getStatus()).toBe(true);
});

test("can hit ships stored in the gameboard's ships array", () => {
    let newBoard = createGameboard();
    newBoard.initGameboard();
    let carrier = createShip("Carrier", 5, [1, 1], "y");
    let destroyer = createShip("Destroyer", 3, [5, 3], "x");
    carrier.setCoordinates();
    destroyer.setCoordinates();
    newBoard.placeShip(carrier);
    newBoard.placeShip(destroyer);
    expect(newBoard.receiveAttack([1, 1])).toBe("Carrier has been hit!!!");
    expect(newBoard.getGameboard()[1][1]).toBe(true);
});