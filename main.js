var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("img/background.png");
ASSET_MANAGER.queueDownload("img/win.jpg");
ASSET_MANAGER.queueDownload("img/smallPlatform.png");
ASSET_MANAGER.queueDownload("img/coin.png");

ASSET_MANAGER.queueDownload("img/spike_up.png");
ASSET_MANAGER.queueDownload("img/spike_left.png");
ASSET_MANAGER.queueDownload("img/spike_right.png");
ASSET_MANAGER.queueDownload("img/spike_down.png");

ASSET_MANAGER.queueDownload("img/flag.png");

// Files
    ASSET_MANAGER.queueDownload("./img/kay_nine_idle_right.png");
    ASSET_MANAGER.queueDownload("./img/kay_nine_idle_left.png");
ASSET_MANAGER.queueDownload("./img/kay_nine_jumping_right.png");
ASSET_MANAGER.queueDownload("./img/kay_nine_jumping_left.png");
ASSET_MANAGER.queueDownload("./img/kay_nine_running_right.png");
ASSET_MANAGER.queueDownload("./img/kay_nine_running_left.png");
ASSET_MANAGER.queueDownload("./img/kay_nine_wall_climbing_right.png");
ASSET_MANAGER.queueDownload("./img/kay_nine_wall_climbing_left.png");
ASSET_MANAGER.queueDownload("./img/kay_nine_wall_hanging_right.png");
ASSET_MANAGER.queueDownload("./img/kay_nine_wall_hanging_left.png");
ASSET_MANAGER.queueDownload("./img/kay_nine_wall_jump_right.png");
ASSET_MANAGER.queueDownload("./img/kay_nine_wall_jump_left.png");
ASSET_MANAGER.queueDownload("./img/kay_nine_death_animation.png");

ASSET_MANAGER.queueDownload("./img/kay_nine_idle_temp.png");    // !!! CHANGE FILE NAME IN ANIM
ASSET_MANAGER.queueDownload("./img/kay_nine_running_temp.png"); // !!! CHANGE FILE NAME IN ANIM NEED???
ASSET_MANAGER.queueDownload("./img/kay_nine_jumping_temp.png"); // !!! CHANGE FILE NAME IN ANIM NEED???

ASSET_MANAGER.downloadAll(function () {
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();

    var k9 = new KayNine(gameEngine, -200, -200);
    var lvlMng = new LevelManager(gameEngine, k9, 1);
    var bg = new Background(gameEngine, ASSET_MANAGER.getAsset("img/background.png"), false);
    gameEngine.addEntity(bg);

    gameEngine.init(ctx);

    gameEngine.addEntity(lvlMng);

    //gameEngine.lvlMng.loadLevel(gameEngine, 1);

    //level1(gameEngine);

    loadLevel(gameEngine, 1);

    gameEngine.start();
});