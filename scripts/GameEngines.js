var GameEngines = function() {
    var StandartGameEngine = function() {
        function init(renderEngine, physicsEngine) {
            this.renderEngine = renderEngine;
            this.physicsEngine = physicsEngine;
            this.gameObjects = {};
            this.gameObjects.snake = Object.create(WorldObjects.snake);
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