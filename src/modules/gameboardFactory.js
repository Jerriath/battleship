export default function() {
    let _boardState = null; //10x10 array that holds bool value that specifies if that spot has been hit or not; hit and miss will be different color on ui
    let _shipArray = []; //holds the ships on the board; if coords of all ships are empty then board is empty
    let _status = false;

    return {
        //Accessor functions
        getShipArray: function() {return _shipArray},
        getWidth: function() {return _boardState.length},
        getLength: function() {return _boardState[0].length},
        getStatus: function() {return _status},
        getBoard: function() {return _boardState},

        //Mutator functions
        updateStatus: function() {
            for (let i = 0; i < _shipArray.length; i++) {
                if (!_shipArray[i].getIsSunk()) {
                    return;
                }
            }
            _status = true;
        },
        initGameboard: function() {
            const rows = 10, cols = 10;
            const val = false;
            
            _boardState = new Array(rows);
            for (let i = 0; i < rows; i++) {
                _boardState[i] = new Array(cols).fill(val);
            }
        },
        placeShip: function(ship) {
            _shipArray.push(ship);
        },
        placeShipRand: function(ship) {
            let valid = false;
            while (!valid) {
                ship.setPositionRand();
                ship.setCoordinates();
                valid = this.checkValidShipCoords(ship);
            }
            _shipArray.push(ship);
        },
        checkValidShipCoords: function(ship) {
            let valid = true;
            for (let i = 0; i < _shipArray.length; i++) {
                for (let j = 0; j < _shipArray[i].getCoordinates().length; j++) {
                    let coordsLength = ship.getCoordinates().length;
                    for (let k = 0; k < coordsLength; k++) {
                        let currentCompare = _shipArray[i].getCoordinates()[j];
                        let currentCoord = ship.getCoordinates()[k];
                        if (currentCompare[0] === currentCoord[0]) {
                            if (currentCompare[1] === currentCoord[1]) {
                                valid = false;
                            }
                        }
                    }
                }
            }
            return valid;
        },
        receiveAttack: function(coordinate) {
            let message = "The attack has missed all ships.";
            _boardState[coordinate[0]][coordinate[1]] = true;
            for (let i = 0; i < _shipArray.length; i++) {
                let currentShip = _shipArray[i];
                currentShip.getCoordinates().forEach(coord => {
                    if (coordinate[0] === coord[0]) {
                        if (coordinate[1] === coord[1]) {
                            message = currentShip.hit(coordinate);
                        }
                    }
                })
            }
            return message;
        }
    }
}