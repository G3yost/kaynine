function KayNine(game) {

    // Files
    ASSET_MANAGER.queueDownload("./img/RobotUnicorn.png");
    ASSET_MANAGER.queueDownload("./img/Kay_Nine_Jumping.png");
    ASSET_MANAGER.queueDownload("./img/Kay_Nine_Running.png");
    ASSET_MANAGER.queueDownload("./img/Kay_Nine_Wall_Climbing.png");
    ASSET_MANAGER.queueDownload("./img/Kay_Nine_Wall_Hang.png");
    ASSET_MANAGER.queueDownload("./img/Kay_Nine_Wall_Jump.png");


    // Animations
    this.idleRight = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);
    this.idleLeft  = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);

    this.walkRight = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);
    this.walkLeft  = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);

    this.jumpRight = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);
    this.jumpLeft  = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);

    this.wallHangRight = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);
    this.wallHangLeft  = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);

    // Movement
    this.groundAccel = 0.5;
    this.wallAccel = this.groundAccel / 8;
    this.airAccel = this.groundAccel / 2;

    Entity.call(this, game, 0, 400);
}

KayNine.prototype = new Entity();
KayNine.prototype.constructor = KayNine;

KayNine.prototype.update = function () {

    // get curent position properties


    // Modify accel/state
// this.game.keyDownList;
    // Ground move set


    // Air move set


    // Wall move set


    // Modify position/state

    if(this.xVel > 0)

    Entity.prototype.update.call(this);
}

KayNine.prototype.draw = function (ctx) {

    if


    Entity.prototype.draw.call(this);
}