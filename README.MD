This is a fun little project to practice and perform TDD via Jest in conjunction with webpack by creating the classic game, Battleships. 

There are three main modules that are used to create the objects necessary to run the game:
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

The last import module for actually running the game is the gameLoop.js module which is essentially (as describe above) the brains and logic of the entire game loop.

The index.js file will be used to import all the other modules and be used as the entry point for webpack to bundle everything into one main.js file.

Another manipulateDom.js file will be used to create all the DOM elements (which will import our css file for styling) and append everything to the DOM. This file will also include methods to clear the elements on screen and rebuild new ones for when a new game is started.