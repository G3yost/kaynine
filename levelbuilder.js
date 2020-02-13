LEVEL_LIST = [ "",
"|||||\n|   |\n|   |\n|   |\n|   |\n|   |\n|   |\n|   |\n|   |\n|   |\n|   |\n||||||||||"]

function loadLevel(game, levelNumber) {

    level = LEVEL_LIST[levelNumber];
    entityList = [];
    x = 0;
    y = 0;
    blockwidth  = 187;
    blockHeight = 65;

console.log(LEVEL_LIST);

    for(i = 0; i < level.length; i++) {

console.log(level.charAt(i));

        switch(level.charAt(i)) {
            case(' '): break; // Nothing
            case('|'): game.addEntity(new Floor(game, ASSET_MANAGER.getAsset("img/smallPlatform.png"), x, y, blockwidth, blockHeight)); break; // Wall
            case('@'): game.addEntity(new KayNine(game, x, y)); break;           // KayNine
            case('g'): game.addEntity(new Goal(game, x, y)); break;              // Goal
            case('['): game.addEntity(new Turret(game, x, y, true)); break;      // Right Facing Turret
            case(']'): game.addEntity(new Turret(game, x, y, false)); break;     // Left  Facing Turret
            case('^'): game.addEntity(new Spike(game, x, y, "up")); break;       // Upward    Facing Spike
            case('v'): game.addEntity(new Spike(game, x, y, "down")); break;     // Downward  Facing Spike
            case('<'): game.addEntity(new Spike(game, x, y, "left")); break;     // Leftward  Facing Spike
            case('>'): game.addEntity(new Spike(game, x, y, "right")); break;    // Rightward Facing Spike
            case('\n'): y = y + blockHeight; x = -blockwidth; break; // Next line

            default: console.log("Level builder encountered unknown character \"" + level.charAt(i) + "\"");
        }
        x = x + blockwidth;
    }

console.log(entityList);

    return entityList;
}