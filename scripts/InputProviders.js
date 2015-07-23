var InputProviders = function() {
    var Keyboard = function() {
        var currentInput = {
            p1: 'other'
        };

        function init() {

            document.onkeydown = function(e) {
                var input = 'other';
                if (e.keyCode === 37) {
                    input = 'left';
                } else if (e.keyCode === 38) {
                    input = 'up';
                } else if (e.keyCode === 39) {
                    input = 'right';
                } else if (e.keyCode === 40) {
                    input = 'down';
                } else {
                    input = 'other';
                }

                currentInput.p1 = input;
            };

            document.onkeyup = function() {
                currentInput.p1 = 'other';
            };

            return this;
        }

        function getInput() {
            return currentInput;
        }

        return {
            init: init,
            getInput: getInput
        };
    }();

    return {
        Keyboard: Keyboard
    };
}();