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

    // Status
    this.jumpReq = false;
    this.onGround = true;
    this.onWall = false;

    // Movement
    this.xAccel = 0;
    this.yAccel = 0;

    this.jumpVelocity = 15;
    this.groundAccel = 0.5;
    this.wallAccel = this.groundAccel / 8;
    this.airAccel = this.groundAccel / 2;

    this.ground = 600;
    this.leftWall  = 375;
    this.rightWall = 425;

    Entity.call(this, game, 0, 400);
}

KayNine.prototype = new Entity();
KayNine.prototype.constructor = KayNine;

KayNine.prototype.update = function () {


    // Modify accel/state
// this.game.keyDownList;
    // Ground move set
    if(this.onGround) {

        if(this.keyDownList['space']) { this.yVel = this.jumpVelocity; }

             if(this.keyDownList['a'] && !this.keyDownList['d']) { this.xAccel =  this.groundAccel; }
        else if(this.keyDownList['d'] && !this.keyDownList['a']) { this.xAccel = -this.groundAccel; }
    }
    // Wall move set
    else if(this.onWall) {

        if(this.keyDownList['space']) { this.yVel = this.jumpVelocity; }

             if(this.keyDownList['a'] && !this.keyDownList['d']) { this.xAccel =  this.airAccel; }
        else if(this.keyDownList['d'] && !this.keyDownList['a']) { this.xAccel = -this.airAccel; }
    }
    // Air move set
    else {


    }



    // Modify position/state

    if(this.xVel > 0) {}

    Entity.prototype.update.call(this);
}

KayNine.prototype.draw = function (ctx) {

    if (false) {}


    Entity.prototype.draw.call(this);
}