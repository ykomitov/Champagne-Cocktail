var GameEngines = function() {
    var StandartGameEngine = function() {
        function init(renderEngine, physicsEngine) {
            this.renderEngine = renderEngine;
            this.physicsEngine = physicsEngine;
            this.gameObjects = {};

            // generate the snake
            var snakeStartX = 100;
            var snakeStartY = 100;
            var snakeStartLength = 50;
            var snakeStartRadius = 15;
            var snake = Object.create(WorldObjects.snake)
                .init(snakeStartLength, snakeStartRadius, snakeStartX, snakeStartY, 2);
            this.gameObjects.snake = snake;
            this.gameObjects.walls = [];

            // generate walls
            var wallsCount = 10;
            var wallMinSize = 15;
            var wallMaxSize = 40;
            while (this.gameObjects.walls.length < wallsCount) {
                var x = Math.random() * physicsEngine.worldSize.x;
                var y = Math.random() * physicsEngine.worldSize.y;
                var size = 30 + Math.random() * (wallMaxSize - wallMinSize);

                // don`t generate wall that is too close to snake start position
                if (x > snakeStartX - size - snakeStartRadius &&
                    x < snakeStartX + size + snakeStartRadius &&
                    y > snakeStartY - size - snakeStartRadius &&
                    y < snakeStartY + size + snakeStartRadius) {
                    continue;
                }

                var wall = Object.create(WorldObjects.wall)
                    .init(x, y, size);
                this.gameObjects.walls.push(wall);
            }

            return this;
        }

        function start() {
            var gameObjects = this.gameObjects,
                physicsEngine = this.physicsEngine
            renderEngine = this.renderEngine;

            function gameLoop() {
                physicsEngine.updateState(gameObjects);
                renderEngine.renderState(gameObjects);
                if (!Globals.gameOver) {
                    requestAnimationFrame(gameLoop);
                }
            }

            gameLoop();
        }

        return {
            init: init,
            start: start
        }
    }();

    return {
        StandartGameEngine: StandartGameEngine
    }
}();