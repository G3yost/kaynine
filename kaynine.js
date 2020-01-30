function KayNine(game) {

    // Files
    ASSET_MANAGER.queueDownload("./img/kay_nine_idle.png");
    ASSET_MANAGER.queueDownload("./img/kay_nine_jumping.png");
    ASSET_MANAGER.queueDownload("./img/kay_nine_running.png");
    ASSET_MANAGER.queueDownload("./img/kay_nine_wall_climbing.png");
    ASSET_MANAGER.queueDownload("./img/kay_nine_wall_hang.png");
    ASSET_MANAGER.queueDownload("./img/kay_nine_wall_jump.png");

    ASSET_MANAGER.queueDownload("./img/kay_nine_idle_temp.png");    // !!! CHANGE FILE NAME IN ANIM
    ASSET_MANAGER.queueDownload("./img/kay_nine_running_temp.png"); // !!! CHANGE FILE NAME IN ANIM
    ASSET_MANAGER.queueDownload("./img/kay_nine_jumping_temp.png"); // !!! CHANGE FILE NAME IN ANIM


    // Animations
    this.idleRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_idle_temp.png"), 0, 0, 128, 128, 0.2, 1, true, false);
    this.idleLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_idle_temp.png"), 0, 0, 128, 128, 0.2, 1, true, false);

    this.jumpRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_jumping.png"), 0, 0, 128, 128, 0.2, 1, true, false);
    this.jumpLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_jumping.png"), 0, 0, 128, 128, 0.2, 1, true, false);

    this.fallingRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_jumping.png"), 0, 0, 128, 128, 0.2, 1, true, false);
    this.fallingLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_jumping.png"), 0, 0, 128, 128, 0.2, 1, true, false);

    this.walkRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_running_temp.png"), 0, 0, 128, 128, 0.2, 1, true, false);
    this.walkLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_running_temp.png"), 0, 0, 128, 128, 0.2, 1, true, false);

    this.wallClimbRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_climbing.png"), 0, 0, 128, 128, 0.2, 1, true, false);
    this.wallClimbLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_climbing.png"), 0, 0, 128, 128, 0.2, 1, true, false);

    this.wallHangRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_hang.png"), 0, 0, 128, 128, 0.2, 1, true, false);
    this.wallHangLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_hang.png"), 0, 0, 128, 128, 0.2, 1, true, false);

    this.wallJumpRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_jump.png"), 0, 0, 128, 128, 0.2, 1, true, false);
    this.wallJumpLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_jump.png"), 0, 0, 128, 128, 0.2, 1, true, false);

    // Status
    this.jumpReq = false;
    this.onGround = true;
    this.onWall = false;

    // Movement
    this.xAccel = 0;
    this.yAccel = 0;

    this.xMax = 10;

    this.jumpVelocity = 15;
    this.wallJumpVelocity = 10;
    this.groundAccel = 0.5;
    this.wallAccel = this.groundAccel / 8;
    this.airAccel = this.groundAccel / 2;

    this.ground = 600;
    this.leftWall  = 50;
    this.rightWall = 750;

    Entity.call(this, game, 100, this.ground);
}

KayNine.prototype = new Entity();
KayNine.prototype.constructor = KayNine;

KayNine.prototype.update = function () {


    // Modify accel/state
// this.game.keyDownList;
    // Ground move set
    if(this.onGround) {

        if(this.game.keyDownList['space']) { this.yVel = this.jumpVelocity; this.jumpReq = true; }

             if(this.game.keyDownList['a'] && !this.game.keyDownList['d']) { this.xAccel = -this.groundAccel; }
        else if(this.game.keyDownList['d'] && !this.game.keyDownList['a']) { this.xAccel =  this.groundAccel; }
    }
    // Wall move set
    else if(this.onWall) {

        if(this.game.keyDownList['space']) { this.xVel = this.onWall === 'right' ? -this.wallJumpVelocity : this.wallJumpVelocity; this.onWall = false; }

             if(this.onWall === "right" && !this.game.keyDownList['d']) { this.onWall = false; }
        else if(this.onWall === "left"  && !this.game.keyDownList['a']) { this.onWall = false; }

             if(this.onWall && this.game.keyDownList['w']) { this.yAccel =  this.wallAccel; }
        else if(this.onWall && this.game.keyDownList['s']) { this.yAccel = -this.wallAccel; }
    }
    // Air move set
    else {

        if(this.jumpReq && !this.keyDownList['space']) { this.jumpReq = false; }

             if(this.game.keyDownList['a'] && !this.game.keyDownList['d']) { this.xAccel =  this.airAccel; }
        else if(this.game.keyDownList['d'] && !this.game.keyDownList['a']) { this.xAccel = -this.airAccel; }
    }

    // Modify position/state
    this.xVel += this.xAccel;
    this.yVel += this.yAccel;

    this.xPos += this.xVel;
    this.yPos += this.yVel;

    if(this.yPos > this.ground) { this.yPos = this.ground; this.yVel = 0; this.yAccel = 0; }
         if(this.xVel >  this.xMax) { this.xVel =  this.xMax; }
    else if(this.xVel < -this.xMax) { this.xVel = -this.xMax; }

    if(this.xVel > 0) { this.facingRight =  true; }
    if(this.xVel < 0) { this.facingRight = false; }

    Entity.prototype.update.call(this);
}

KayNine.prototype.draw = function (ctx) {

console.log("KayNine");
    if (false) {}

    else if(this.facingRight) { console.log("draw right"); this.idleRight.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos, 2); }
    else                      { console.log("draw right"); this.idleLeft.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos, 2); }


    Entity.prototype.draw.call(this);
}