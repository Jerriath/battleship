import { expect } from "@jest/globals";
import createGameboard from "../modules/gameboard.js";
import createShip from "../modules/shipFactory.js";

test("creates appropriately sized gameboard", () => {
    let newBoard = createGameboard();
    expect(newBoard.getWidth()).toStrictEqual(10);
    expect(newBoard.getLength()).toStrictEqual(10);
})

test("gameboard is able to create array to hold ship coordinates", () => {
    let newBoard = createGameboard();
    let carrier = createShip("carrier", 5, [1, 1], "y");
    let destroyer = createShip("destroyer", 3, [5, 3], "x");
    newBoard.placeShip(carrier);
    newBoard.placeShip(destroyer);
    expect(newBoard.getCoordsArray().length).toBe(8); 
});

test("can hit ships stored in the gameboard's ships array", () => {
    let newBoard = createGameboard();
    let carrier = createShip("Carrier", 5, [1, 1], "y");
    let destroyer = createShip("Destroyer", 3, [5, 3], "x");
    newBoard.placeShip(carrier);
    newBoard.placeShip(destroyer);
    expect(newBoard.receiveAttack([1, 1])).toBe("Carrier has been hit!!!");
    expect(newBoard.gameboard[1][1]).toBe(true);
});