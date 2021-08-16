export default function(gameboard) {
    let _gameboard = gameboard;

    return {
        getGameboard: function() {return _gameboard},
        attack: function(player, coordinate) {
            let response = player.getGameboard().receiveAttack(coordinate);
            return response;
        },
        attackRandom: function(player) {
            let isNewCoord = false;
            let randRow = null;
            let randCol = null;
            while (!isNewCoord) {
                randRow = Math.floor(Math.random() * 10);
                randCol = Math.floor(Math.random() * 10);
                if (!player.getGameboard().getBoard()[randCol][randRow]) {
                    isNewCoord = true;
                }
            }
            let response = player.getGameboard().receiveAttack([randCol, randRow]);
            return randCol + "" + randRow + response;
        }
    }
}