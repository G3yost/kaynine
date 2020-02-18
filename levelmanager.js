// Change order of adding entities, add to array and sort by type before adding.



LEVEL_LIST = [ "",
"|||||\n|  v|\n|   |\n|   |\n|   |\n|>g<|\n|   |\n|   |\n|   |\n| @ |\n|^  |\n||||||||||"]

function loadLevel(game, levelNumber) {

    level = LEVEL_LIST[levelNumber];
    entityList = [];
    x = 0;
    y = 0;
    blockwidth  = 187;
    blockHeight = 65;

    for(i = 0; i < level.length; i++) {

        switch(level.charAt(i)) {
            case(' '): break; // Nothing
            case('|'): game.addEntity(new Floor(game, ASSET_MANAGER.getAsset("img/smallPlatform.png"), x, y, blockwidth, blockHeight)); break; // Wall
            case('@'): game.addEntity(new KayNine(game, x, y)); break;           // KayNine
            case('g'): game.addEntity(new Goal(game, ASSET_MANAGER.getAsset("img/flag.png"),x, y)); break;              // Goal
            case('['): game.addEntity(new Turret(game, x, y, true)); break;      // Right Facing Turret
            case(']'): game.addEntity(new Turret(game, x, y, false)); break;     // Left  Facing Turret
            case('^'): game.addEntity(new Spike(game, ASSET_MANAGER.getAsset("img/spike_up.png"), x, y, 65, 65)); break;       // Upward    Facing Spike
            case('v'): game.addEntity(new Spike(game, ASSET_MANAGER.getAsset("img/spike_down.png"), x, y, 65, 65)); break;     // Downward  Facing Spike
            case('<'): game.addEntity(new Spike(game, ASSET_MANAGER.getAsset("img/spike_left.png"), x + blockwidth - 65, y, 65, 65)); break;     // Leftward  Facing Spike
            case('>'): game.addEntity(new Spike(game, ASSET_MANAGER.getAsset("img/spike_right.png"), x, y, 65, 65)); break;    // Rightward Facing Spike
            case('\n'): y = y + blockHeight; x = -blockwidth; break; // Next line

            default: console.log("Level builder encountered unknown character \"" + level.charAt(i) + "\"");
        }
        x = x + blockwidth;
    }

    return entityList;
}

function beginGame(game) {

    game.ctx.font = "30px Arial";
    game.ctx.fillText("Display", 100, 100);

    clearLevel(game);

    while(!level1(game));
    while(!level2(game));
    while(!level3(game));
    while(!level4(game));
    while(!level5(game));
}

function level1(game) {

    var bg = new Background(game, ASSET_MANAGER.getAsset("img/background.png"));

    loadLevel(game, 1);

    return game.start();
}

function clearLevel(game) {

    game.entities.length = 0;
}