var PhysicsEngines = (function() {

    var StandartPhysicsEngine = function() {

        function init(inputProvider) {
            this.inputProvider = inputProvider;
            return this;
        }

        function updateState(worldObjects) {
            updateSnake.call(this, worldObjects.snake);
        }

        function updateSnake(snake) {
            var input = this.inputProvider.getDirection();
            var updateX = 1,
                updateY = 1;

            if (!(input === 'other' || input === '')) {
                snake.direction = this.inputProvider.getDirection();
            }

            switch (snake.direction) {
                case 'up':
                    updateX = 0;
                    updateY *= -1;
                    break;
                case 'right':
                    updateY = 0;
                    break;
                case 'down':
                    updateX = 0;
                    break;
                case 'left':
                    updateX *= -1;
                    updateY = 0;
                    break;
            }

            for (var i = 0; i < snake.speed; i++) {
                snake.tail.push({
                    x: snake.headX + updateX,
                    y: snake.headY + updateY
                });
                snake.headX += updateX;
                snake.headY += updateY;
                if (snake.tail.length > snake.length) {
                    snake.tail.shift();
                }
            }
        }

        return {
            init: init,
            updateState: updateState
        }
    }();

    return {
        StandartPhysicsEngine: StandartPhysicsEngine
    }

}());