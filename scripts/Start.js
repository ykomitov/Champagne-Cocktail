(function() {
    var inputProvider = Object.create(InputProviders.Keyboard).init();
    var physicsEngine = Object.create(PhysicsEngines.StandartPhysicsEngine).init(inputProvider);
    var renderEngine = Object.create(RenderEngines.CanvasRenderer).init(640, 480);
    var gameEngine = Object.create(GameEngines.StandartGameEngine).init(renderEngine, physicsEngine);

    // gameEngine.start();  // not working like that for some reason. Probably request animation frame must be in global scope when called??

    function gameLoop() {
        gameEngine.physicsEngine.updateState(gameEngine.gameObjects);
        gameEngine.renderEngine.renderState(gameEngine.gameObjects);
        requestAnimationFrame(gameLoop);
    }

    gameLoop();

}());