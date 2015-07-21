var GameEngines = function() {
    var StandartGameEngine = function() {
        function init(renderEngine, physicsEngine) {
            this.renderEngine = renderEngine;
            this.physicsEngine = physicsEngine;
            this.gameObjects = {};
            this.gameObjects.snake = Object.create(WorldObjects.snake);
            return this;
        }

        // check this, not working
        function start() {
            function gameLoop() {
                this.physicsEngine.updateState(this.gameObjects);
                this.renderEngine.renderState(this.gameObjects);
                requestAnimationFrame(gameLoop.call(this));
            }

            gameLoop.call(this);
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