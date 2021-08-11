export default function(name, length, position, axis) {
    let _name = name;
    let _length = length;
    let _position = position;
    let _axis = axis;
    let _coordinates = null;
    let _isSunk = false;

    return {
        //Accessor functions
        getName: function(){return _name},
        getLength: function() {return _length},
        getPosition: function() {return _position},
        getCoordinates: function() {return _coordinates},
        getIsSunk: function() {return _isSunk},
        //Mutator functions
        setCoordinates: function() {
            let coordinates = new Array(length);
            if (_axis === "x") {
                let y = _position[1];
                let x = _position[0];
                for (let i = 0; i < _length; i++) {
                    coordinates[i] = [x + i, y];
                }
            }
            else{
                let y = position[1];
                let x = position[0];
                for (let i = 0; i < _length; i++) {
                    coordinates[i] = [x, y + i];
                }
            }
            _coordinates = coordinates;
        },
        hit: function(coordinate) {
            for (let i = 0; i < _coordinates.length; i++) {
                if (coordinate[0] === _coordinates[i][0]) {
                    if (coordinate[1] === _coordinates[i][1]) {
                        _coordinates.splice(i, 1);
                    }
                }
            }
            if (_coordinates.length === 0) {
                _isSunk = true;
            }
            if (_isSunk) {
                return _name + " has been destroyed!!!";
            }
            else {
                return _name + " has been hit!!!";
            }
        }
    }
}