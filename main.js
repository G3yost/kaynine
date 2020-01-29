var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownlaod(".img/Background.png");

ASSET_MANAGER.downloadAll(function () {
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();
    var bg = new Background(gameEngine);
    var kayNine = new KayNine(gameEngine);

    gameEngine.addEntity(bg);
    gameEngine.addEntity(kayNine);

    gameEngine.init(ctx);
    gameEngine.start();
});
