// Change order of adding entities, add to array and sort by type before adding.

/* 
He made this hold its own entity list and then performed load and delete functions
*/
function LevelManager(game, Kay9, lvl){
    // this.moving = move;
    this.K9 = Kay9;
    this.level = lvl;
    Entity.call(this, game);
    // this.spritesheet = spritesheet;
    this.ctx = game.ctx;

    this.LEVEL_LIST = [ "",
    "|||||\n| vg|\n|   |\n|  ||\n|   |\n|> <|\n|   |\n||| |\n|   |\n| @ |\n|   |\n||||||||||",
    "|||||\n|v  |\n     \n     \n     \n  g  \n    |\n|> <|\n|   |\n| @ |\n|  ^|\n||||||||||"];

    this.entityList = [];

    //beginGame(game, this.level);
    
}

LevelManager.prototype = new Entity();
LevelManager.prototype.constructor = LevelManager;

LevelManager.prototype.update = function () {
    switch(this.K9.isDead){
        case "Victory": loadLevel(game, level); break;
        case "Dead": loadLevel(game, level + 1); break;
        default : break; // nothing
    }
}

LEVEL_LIST = [ "",
"|||||\n| vg|\n|   |\n|  ||\n|   |\n|> <|\n|   |\n||| |\n|   |\n| @ |\n|   |\n||||||||||",
"|||||\n|v  |\n     \n     \n     \n  g  \n    |\n|> <|\n|   |\n| @ |\n|  ^|\n||||||||||"]

function loadLevel(game, levelNumber) {

    var level = this.LEVEL_LIST[levelNumber];
    this.entityList = [];


    x = 0;
    y = 0;
    blockwidth  = 187;
    // blockwidth = 65; eventually we'll use this ; for testing load and such i'll keep this commented out
    blockHeight = 65;

    for(i = 0; i < level.length; i++) {

        switch(level.charAt(i)) {
            case(' '): break; // Nothing

            case('|'): 
                var f = new Floor(game, ASSET_MANAGER.getAsset("img/smallPlatform.png"), x, y, blockwidth, blockHeight); 
                game.addEntity(f);
                this.entityList[i] = f;    break; // Wall
            
            case('@'): 
                var kayNine = new KayNine(game, x, y);
                this.K9 = kayNine;  
                game.addEntity(kayNine);
                this.entityList[i] = kayNine; break;           // KayNine
            
            case('g'): 
                var g = new Goal(game, ASSET_MANAGER.getAsset("img/flag.png"),x, y);
                game.addEntity(g);
                this.entityList[i] = g; break;              // Goal

            case('['): game.addEntity(new Turret(game, x, y, true)); break;      // Right Facing Turret
            case(']'): game.addEntity(new Turret(game, x, y, false)); break;     // Left  Facing Turret 
            // not used at the moment ; will get to later
            
            case('^'): 
                var sUp = new Spike(game, ASSET_MANAGER.getAsset("img/spike_up.png"), x, y, 65, 65);
                game.addEntity(sUp);
                this.entityList[i] = sUp; break;       // Upward    Facing Spike

            case('v'): 
                var sDown = new Spike(game, ASSET_MANAGER.getAsset("img/spike_up.png"), x, y, 65, 65);
                game.addEntity(sDown);   
                this.entityList[i] = sDown; break;       // Upward    Facing Spike  // Downward  Facing Spike
            
            case('<'): 
                var sLeft = new Spike(game, ASSET_MANAGER.getAsset("img/spike_left.png"), x + blockwidth - 65, y, 65, 65); 
                game.addEntity(sLeft);
                this.entityList[i] = sLeft; break;     // Leftward  Facing Spike

            case('>'): 
                var sRight = new Spike(game, ASSET_MANAGER.getAsset("img/spike_right.png"), x, y, 65, 65); 
                game.addEntity(sRight);
                this.entityList[i] = sRight; break;    // Rightward Facing Spike

            case('\n'): y = y + blockHeight; x = -blockwidth; break; // Next line

            default: console.log("Level builder encountered unknown character \"" + level.charAt(i) + "\"");
        }
        x = x + blockwidth;
    }

    return entityList;
}

function beginGame(game, level) {

    // game.ctx.font = "30px Arial";
    // game.ctx.fillText("Display", 100, 100);

    // clearLevel(game);

    // switch(level) {
    //     case 1: if(state === "victory") { level2(game); } else { level1(game); } break;
    //     case 2: if(state === "victory") { level3(game); } else { level2(game); } break;

    //     default: console.log("You beat the game!!!");
    // }
    
    loadLevel(this, level);

}

function level1(game) {

    var bg = new Background(game, ASSET_MANAGER.getAsset("img/background.png"));
    game.addEntity(bg);

    loadLevel(game, 1);

    game.start(/*game,*/ 1);
    //beginGame(game, 1);
}

function level2(game) {

    var bg = new Background(game, ASSET_MANAGER.getAsset("img/background.png"));
    game.addEntity(bg);

    loadLevel(game, 2);

    return game.start(game, 2);
}

// function clearLevel(game) {

//     game.entities.length = 0;
// }