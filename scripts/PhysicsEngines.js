var PhysicsEngines = (function() {

    var StandartPhysicsEngine = function() {

        function init(inputProvider) {
            this.inputProvider = inputProvider;
            this.world = {
                x: 640,
                y: 480
            };
            return this;
        }

        function updateState(gameObjects) {
            updateSnake.call(this, gameObjects);
        }

        function updateSnake(gameObjects) {
            var snake = gameObjects.snake;
            var inputDirection = this.inputProvider.getInput().p1;
            var updateX = 1,
                updateY = 1;

            function isOutOfWorld() {
                if (snake.headX < 0 || this.world.x < snake.headX) {
                    return true;
                }

                if (snake.headY < 0 || this.world.y < snake.headY) {
                    return true;
                }
                return false;
            }

            function checkCollisions() {
                return gameObjects.walls.some(function(wall) {
                    var deltaX = snake.headX - wall.x;
                    var deltaY = snake.headY - wall.y;
                    var collisionDistance = snake.radius + (wall.size / 2);
                    if (deltaX * deltaX + deltaY * deltaY <= collisionDistance * collisionDistance) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }

            if (!(inputDirection === 'other' || inputDirection === '')) {
                snake.direction = inputDirection;
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

                if (isOutOfWorld.call(this) || checkCollisions()) {
                    Globals.gameOver = true;
                    break;
                }
            }

        }

        return {
            init: init,
            updateState: updateState
        };
    }();

    return {
        StandartPhysicsEngine: StandartPhysicsEngine
    };

}());