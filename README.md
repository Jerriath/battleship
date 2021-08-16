This is a fun little project to practice and perform TDD via Jest in conjunction with webpack by creating the classic game, Battleships. 

There are three main modules that are used to create the necessary objects that will be used in the game:
    1. shipFactory.js:
        This factory function is designed to be able to create different kinds of ships with different kinds of names (i.e. Carrier, Destroyer. etc.)
        These ship can either be instantiated with a desired position (done by the human player) or can be chosen randomly (done by the cpu player)
        Each ship will contain private attributes with corresponding accessor and mutator functions.
    2. gameboardFactory.js:
        This factory function is for creating instances of a gameboard that will hold the ships for each player and have a 2-D array of coordinates that have
        already been attacked (so as to not repeat an attack on the same coordinate).
        The gameboard object is used to recieve attacks from the enemy player, place the ships into the array, and also check before to see if the coordinates
        of the new ship conflicts with the coordinates of a pre-existing ship.
        This object is also responsible for the random selection of ship placements.
    3. playerFactory.js: 
        The player object is designed to be used for the game loop module which will hold the logic of running the game loop.
        Each player object will contain their respective gameboard and be able to call the gameboard methods when needed.
        The player object will also be responsible for sending attacks to the enemy player (either with a desired coordinate or randomly) and this attack will
        then call the enemy gameboard's receiveAttack function.

Another three modules will be created for actually running the game (from beginning to end):
    1. startGame.js
        This module will be responsible for setting up all the ship objects as well as gameboard objects and initializing the gameboards for each player object. Essentially, this module will be the "start" of the game loop. Basically like the character creation phase of an rpg.
    2. runGame.js
        This module will be used for running the actual Battleship game. Basically, it will be responsible for organizing who will be attacking and be used to call each of the players' attack function. 
    3. restartGame.js
        This module will be used after the previous two for restarting the game state to a brand new game. Basically, it will remove all the old values (for the ship and gameboard) and create new ones for the next game.

One more module will also be added for manipulating all aspects of the DOM (including adding event listeners; the anon callbacks have a good amount of logic in them).