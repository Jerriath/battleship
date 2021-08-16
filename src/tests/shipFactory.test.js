import { expect } from "@jest/globals";
import createShip from "../modules/shipFactory.js";

test("Creates the ship object with correct attributes", () => {
    let newShip = createShip("Carrier", 5, [3, 1], "y");
    expect(newShip.getName()).toBe("Carrier");
    expect(newShip.getLength()).toBe(5);
    expect(newShip.getPosition()).toStrictEqual([3, 1]);
});

test("Able to create the coordinates array; x-axis", () => {
    let newShip = createShip("Destroyer", 3, [2, 4], "x");
    newShip.setCoordinates();
    expect(newShip.getCoordinates()).toStrictEqual([[2, 4], [3, 4], [4, 4]]);
});

test("Able to create the coordinates array; y-axis", () => {
    let newShip = createShip("Destroyer", 3, [2, 4], "y");
    newShip.setCoordinates();
    expect(newShip.getCoordinates()).toStrictEqual([[2, 4], [2, 5], [2, 6]]);
});

test("hit func pops off hit coordinate", () => {
    let newShip = createShip("Patrol", 2, [1, 1], "y");
    newShip.setCoordinates();
    newShip.hit([1, 2]);
    expect(newShip.getCoordinates().length).toStrictEqual(1);
})

test("ship can sink if all coordinates are hit", () => {
    let newShip = createShip("Patrol", 2, [2, 2], "x");
    newShip.setCoordinates();
    newShip.hit([2, 2]);
    newShip.hit([3, 2]);
    expect(newShip.getIsSunk()).toBe(true);
})

test("hit function returns the correct message", () => {
    let newShip = createShip("Patrol", 2, [2, 2], "x");
    newShip.setCoordinates();
    expect(newShip.hit([2, 2])).toBe("Patrol has been hit!!!");
    expect(newShip.hit([3, 2])).toBe("Patrol has been destroyed!!!");
});

test("testing setPositionRand", () => {
    let newShip = createShip("Carrier", 5, null, null);
    newShip.setPositionRand();
    newShip.setCoordinates();
    expect(newShip.getPosition()).toBeTruthy();
})