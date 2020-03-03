// Change order of adding entities, add to array and sort by type before adding.

LEVEL_LIST = [ "",
"||||||||||||||||||||||||||||||\n|                            |\n|                            |\n|                            |\n|                            |\n|                            |\n|                          g |\n|              ||||          |\n|              |   |||    ||||\n|              |      ^^^^||||\n|              |||||||||||||||\n|   |||||||    |||||||||||||||\n|         |       ||||||||||||\n|         |       ||||||||||||\n|         |       ||||||||||||\n|||       |       ||||||||||||\n|||       |       ||||||||||||\n|         |       ||||||||||||\n|         |       ||||||||||||\n|                 ||||||||||||\n|                 ||||||||||||\n|                 ||||||||||||\n|                 ||||||||||||\n|                 ||||||||||||\n|                            |\n|||||||                      |\n|||||||        ||            |\n|||||||                      |\n|||||||                      |\n||||||||||                   |\n||||||||||                   |\n||||||||||                   |\n||||||||||||||||||||||||     |\n|                            |\n| @                          |\n|                            |\n||||||||||||||||||||||||||||||",
"||||||||||||||||||||||||||||||||||||||||||||||||||\n|                 V                              |\n|                                                |\n|                                                |\n|                                                |\n|   g                                            |\n|                                                |\n|                                                |\n| |||||||||||||  ^ ^                    ^^      ||\n| |||||||||||||        |||||||||||||||||||      ||\n|                      |||||||||||||||||||      ||\n|                      |||||||||||||||||||       |\n|                      |||||||||||||||||||       |\n|                      |||||||||||||||||||       |\n|                      |||||||||||||||||||      <|\n|                     <|||||||||||||||||||      <|\n|                     <|||||||||||||||||||      <|\n|                     <|||||||||||||||||||      <|\n|                      |||||||||||||||||||       |\n|                     <|||||||||||||||||||       |\n|                     <|||||||||||||||||||       |\n|                     <|||||||||||||||||||       |\n|                     <|||||||||||||||||||       |\n|                     <|||||||||||||||||||>      |\n|                               ||||||||||>      |\n| @                                  |||||>      |\n|                                                |\n|           ]                                    |\n||||||||||||||||||||||||||||||||||||||||||||||||||",
"|||||||||||||||||||||||||||||||||||||\n |           |                       |\n |           |                       |\n |           |                       |\n |           |                       |\n |                        |||||   ||||\n | g                  ^^^     |      |\n |                 ^^^        |      |\n ||||        ||||             |      |\n |  |                         |      |\n |                                   |\n |                                   |\n |                                   |\n |      ||||                         |\n |         |              ||||||||||||\n |         |              ||||||||||||\n |         |vvvvvvvvvvvvvvvvvvvvvvvvv|\n |||||       <>                      |\n |||||       <>                      |\n |           ||                      |\n |     |     |                       |\n |     |     |     ||||||            |\n |     |     |          |            |\n |     |                |            |\n |     |                |            |\n |     |                             |\n |^^^^^|    ||||                     |\n |||||||                          ||||\n |                                |  |\n |                                   |\n |                      ||||         |\n |                                   |\n |                                   |\n |        ||||                       |\n |                                   |\n |  @                                |\n |                   	             |\n ||||||^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^|\n|||||||||||||||||||||||||||||||||||||",
""]

/*
He made this hold its own entity list and then performed load and delete functions
He also had to add lvlMngr back into its own list once he emptied it

Current issue is that the lvlMngr is not being updated beacuse it is not in the entitylist of the gameEngine

*/
function LevelManager(game, Kay9, lvl, camera){
    // this.moving = move;
    this.K9 = Kay9;
    this.level = lvl;
    Entity.call(this, game, 0, 0, 0, 0);

    // this.spritesheet = spritesheet;
    this.ctx = game.ctx;

    this.entityList = [];
    this.camera = camera;

    this.type = "lvlMngr";
    this.lvlSize = 0;

    //beginGame(game, this.level);

}

LevelManager.prototype = new Entity();
LevelManager.prototype.constructor = LevelManager;

LevelManager.prototype.update = function () {
    
    var dogIsInLevel = false;
    for( const ent in this.game.entities){
        entity = this.game.entities[ent];
        if(entity.type === 'kaynine'){
            dogIsInLevel = true;
        }
    }

    if(dogIsInLevel === false){ // dog has been removed from game world
        loadLevel(this.game, this.level);
    }
    
    
    switch(this.K9.isDead){
        case "Dead":
            // for( const ent in this.game.entities){
            //     entity = this.game.entities[ent];
            //     //entity.removeFromWorld = true;
            //     // entity.update();
            //     console.log(entity.type);
            // }
            //this.game.entities.length = 0;
            loadLevel(this.game, this.level);
            //console.log("You die die");
        break;

        case "Victory":
            loadLevel(this.game, this.level + 1);
            console.log("Next Level");
            //console.log("You win");
        break;

        default : break; // nothing
    }
    // var dogIsInLevel = false;
    // for( const ent in this.game.entities){
    //     entity = this.game.entities[ent];
    //     if(entity.type === 'kaynine'){
    //         dogIsInLevel = true;
    //     }
    // }

    // if(dogIsInLevel === false){ // dog has been removed from game world
    //     loadLevel(this.game, this.level);
    // }

}

function loadLevel(game, levelNumber) {

    var level = this.LEVEL_LIST[levelNumber];
    //this.entityList = [];
    //game.entityList = [];


    game.entities.length = 0; // get rid of all entities in the level

    var cam = new Camera();

    if( level.length === 0){
        var win = new Background(game, ASSET_MANAGER.getAsset("img/win.jpg"), cam);
        game.addEntity(win);
    } else {

        // var bg = new Background(game, ASSET_MANAGER.getAsset("img/background.png"), cam);
        // game.addEntity(bg);

        x = 0;
        xMax = x;
        y = 0;
        blockwidth  = 65; // this blockwidth's time is limited
        // blockwidth = 65; eventually we'll use this ; for testing load and such i'll keep this commented out
        blockHeight = 65;

        for(i = 0; i < level.length; i++) {

            switch(level.charAt(i)) {
                case(' '): break; // Nothing

                case('|'):
                case('-'):
                    var f = new Floor(game, ASSET_MANAGER.getAsset("img/smallPlatform.png"), x, y, blockwidth, blockHeight, cam);
                    game.addEntity(f);
                    /*this.entityList[i] = f;*/    break; // Wall

                case('@'):
                    var kayNine = new KayNine(game, x, y, cam);
                    this.K9 = kayNine;
                    game.addEntity(kayNine);
                    cam.attachKaynine(kayNine);
                break;           // KayNine

                case('g'):
                    var g = new Goal(game, ASSET_MANAGER.getAsset("img/flag.png"),x, y, cam);
                    game.addEntity(g);
                break;              // Goal

                case('['):
                    var RT = new Turret(game, ASSET_MANAGER.getAsset("img/turret_right.png"), x, y, 100, 10, "R",  cam);
                    game.addEntity(RT);
                break;      // Right Facing Turret

                case(']'):
                    var LT = new Turret(game, ASSET_MANAGER.getAsset("img/turret_left.png"), x, y, 100, 10, "L",  cam);
                    game.addEntity(LT);
                break;          // Left Facing Turret

                case('^'):
                    var sUp = new Spike(game, ASSET_MANAGER.getAsset("img/spike_up.png"), x, y, 65, 65, "u", cam);
                    game.addEntity(sUp);
                    /*this.entityList[i] = sUp;*/ break;       // Upward    Facing Spike

                case('v'):
                    var sDown = new Spike(game, ASSET_MANAGER.getAsset("img/spike_down.png"), x, y, 65, 65, "d", cam);
                    game.addEntity(sDown);
                    /*this.entityList[i] = sDown;*/ break;       // Upward    Facing Spike  // Downward  Facing Spike

                case('<'):
                    var sLeft = new Spike(game, ASSET_MANAGER.getAsset("img/spike_left.png"), x, y, 65, 65, "l", cam);
                    game.addEntity(sLeft);
                    /*this.entityList[i] = sLeft;*/ break;     // Leftward  Facing Spike

                case('>'):
                    var sRight = new Spike(game, ASSET_MANAGER.getAsset("img/spike_right.png"), x, y, 65, 65, "r", cam);
                    game.addEntity(sRight);
                    /*this.entityList[i] = sRight;*/ break;    // Rightward Facing Spike

                case('\n'): y = y + blockHeight; x = -blockwidth; break; // Next line

                default: console.log("Level builder encountered unknown character \"" + level.charAt(i) + "\"");
            }
            x = x + blockwidth;
            if(x > xMax) { xMax = x; }
        }
    game.addEntity(cam);

    var lvlMngr = new LevelManager(game, kayNine, levelNumber, cam); // This needs to be here because lvlMngr needs to be in the new entities update list
    game.addEntity(lvlMngr);
    console.log("Reached the end of levelManager");

    }    //return entityList;
}

function beginGame(game, level) {

    loadLevel(this, level);

}


