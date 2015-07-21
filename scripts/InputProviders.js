var InputProviders = function() {
    var Keyboard = function() {
        var pressedKey = '';

        function init() {
            document.onkeydown = function(e) {
                if (e.keyCode === 37) {
                    pressedKey = 'left';
                } else if (e.keyCode === 38) {
                    pressedKey = 'up';
                } else if (e.keyCode === 39) {
                    pressedKey = 'right';
                } else if (e.keyCode === 40) {
                    pressedKey = 'down';
                } else {
                    pressedKey = 'other';
                }
            };
            return this;
        }

        function getDirection() {
            return pressedKey;
            pressedKey = '';
        }

        return {
            init: init,
            getDirection: getDirection
        }
    }();

    return {
        Keyboard: Keyboard
    }
}();