var GameEngines = function() {
    var StandartGameEngine = function() {
        function init(renderEngine, physicsEngine) {
            this.renderEngine = renderEngine;
            this.physicsEngine = physicsEngine;
            this.gameObjects = {};
            var snake = Object.create(WorldObjects.snake)
                .init(50,15,100,100,2);
            this.gameObjects.snake = snake;
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