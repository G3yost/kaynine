function LoadLevel(game, levelName) {

    readFile("level1.lvl", "utf-8", (err, data) => { if(err) throw err; });

    levelText = data.toString().toLowerCase();
    entityList = [];
    x = 0;
    y = 0;
    blockHeight = 50;

    for(const block in levelText) {

        switch(block) {
            case('|'): entityList.push(new Floor(gameEngine, ASSET_MANAGER.getAsset("img/smallPlatform.png"), x, y, 187, 50)); // Wall
            case('@'): // KayNine
            case('g'): // Goal
            case('['): // Right Facing Turret
            case(']'): // Left  Facing Turret
            case('^'): // Upward    Facing Spike
            case('v'): // Downward  Facing Spike
            case('<'): // Leftward  Facing Spike
            case('>'): // Rightward Facing Spike
            case('\n'): y = y + blockHeight; break; // Next line

            default: console.log("Level builder encountered unknown character \"" + block + "\"");
        }
    }

    return entityList;
}