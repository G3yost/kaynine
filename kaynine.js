function KayNine(game) {

    // Files
    ASSET_MANAGER.queueDownload("./img/RobotUnicorn.png");

    // Animations
    this.idleRight = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);
    this.idleLeft  = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);

    this.walkRight = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);
    this.walkLeft  = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);

    this.jumpRight = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);
    this.jumpLeft  = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);

    this.wallHangRight = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);
    this.wallHangLeft  = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), x, y, xlen, ylen, dur, frameCount, true, false);

    this.animation = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), 0, 0, 206, 110, 0.02, 30, true, true);
    this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/FileName.png"), 618, 334, 174, 138, 0.02, 40, false, true);

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
commit -m "Made layout for kaynine file."

    // Wall move set


    // Modify position/state



    Entity.prototype.update.call(this);
}

KayNine.prototype.draw = function (ctx) {
    if (this.jumping) {
        this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.xPos + 17, this.yPos - 34);
    }
    else {
        this.animation.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos);
    }
    Entity.prototype.draw.call(this);
}