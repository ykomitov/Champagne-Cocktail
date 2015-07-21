(function() {
    var inputProvider = Object.create(InputProviders.Keyboard).init();
    var physicsEngine = Object.create(PhysicsEngines.StandartPhysicsEngine).init(inputProvider);
    var renderEngine = Object.create(RenderEngines.CanvasRenderer).init(640, 480);
    var gameEngine = Object.create(GameEngines.StandartGameEngine).init(renderEngine, physicsEngine);

    gameEngine.start();
}());