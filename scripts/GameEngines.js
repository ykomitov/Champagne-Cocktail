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

            // generate walls
            var walls = [];
            var wallsCount = 10;
            var wallMinSize = 2;
            var wallMaxSize = 10;
            while (walls.length < wallsCount) {
                var x = Math.random() * this.physicsEngine.worldSize.x;
                var y = Math.random() * this.physicsEngine.worldSize.y;
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
                walls.push(wall);
            }
            this.gameObjects.walls = walls;

            //generate food
            var foodX = (Math.random() * physicsEngine.worldSize.x - 2) + 1,
            foodY = (Math.random() * physicsEngine.worldSize.y - 2) + 1,
            food = Object.create(WorldObjects.food).init(foodX, foodY, false);
            
            if (food.x === snake.headX && food.y === snake.headY) {
                food = Object.create(WorldObjects.food).init(foodX, foodY, true);
            }

            this.gameObjects.food = food;

            return this;
        }

        function start() {
            var gameObjects = this.gameObjects,
                physicsEngine = this.physicsEngine;
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
        };
    }();

    return {
        StandartGameEngine: StandartGameEngine
    };
}();