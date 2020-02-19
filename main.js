var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("img/background.png");
ASSET_MANAGER.queueDownload("img/smallPlatform.png");

ASSET_MANAGER.queueDownload("img/spike_up.png");
ASSET_MANAGER.queueDownload("img/spike_left.png");
ASSET_MANAGER.queueDownload("img/spike_right.png");
ASSET_MANAGER.queueDownload("img/spike_down.png");

ASSET_MANAGER.queueDownload("img/flag.png");

// Files
    //ASSET_MANAGER.queueDownload("./img/kay_nine_idle_right.png");
    //ASSET_MANAGER.queueDownload("./img/kay_nine_idle_left.png");
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

ASSET_MANAGER.queueDownload("./img/kay_nine_idle_temp.png");    // !!! CHANGE FILE NAME IN ANIM
ASSET_MANAGER.queueDownload("./img/kay_nine_running_temp.png"); // !!! CHANGE FILE NAME IN ANIM NEED???
ASSET_MANAGER.queueDownload("./img/kay_nine_jumping_temp.png"); // !!! CHANGE FILE NAME IN ANIM NEED???

ASSET_MANAGER.downloadAll(function () {
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();

    gameEngine.init(ctx);

    level1(gameEngine);
});