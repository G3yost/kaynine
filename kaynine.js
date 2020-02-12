function KayNine(game) {

    this.type = "kaynine";

    // Animations
    this.idleRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_running_right.png"), 0, 0, 128, 128, 0.2, 1, true, false);
    this.idleLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_running_left.png"), 0, 0, 128, 128, 0.2, 1, true, true);

    this.jumpRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_jumping_right.png"), 0, 0, 128, 128, 0.2, 8, true, false);
    this.jumpLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_jumping_left.png"), 0, 0, 128, 128, 0.2, 8, true, false);

    this.fallingRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_jumping_right.png"), 0, 0, 128, 128, 0.2, 1, true, false);
    this.fallingLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_jumping_left.png"), 0, 0, 128, 128, 0.2, 1, true, false);

    this.walkRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_running_right.png"), 0, 0, 128, 128, 0.2, 4, true, false);
    this.walkLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_running_left.png"), 0, 0, 128, 128, 0.2, 4, true, true);

    this.wallClimbRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_climbing_right.png"), 0, 0, 128, 128, 0.2, 9, true, false);
    this.wallClimbLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_climbing_left.png"), 0, 0, 128, 128, 0.2, 9, true, false);

    this.wallHangRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_hanging_right.png"), 0, 0, 128, 128, 0.2, 8, true, false);
    this.wallHangLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_hanging_left.png"), 0, 0, 128, 128, 0.2, 8, true, false);

    this.wallJumpRight = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_jump_right.png"), 0, 0, 128, 128, 0.2, 5, true, false);
    this.wallJumpLeft  = new Animation(ASSET_MANAGER.getAsset("./img/kay_nine_wall_jump_left.png"), 0, 0, 128, 128, 0.2, 5, true, false);

    // Status
    this.jumpReq  = false;
    this.onGround = true;
    this.onWall   = false;

    this.width  = 128;
    this.height = 128;

    // Movement
    this.xAccel = 2;
    this.yAccel = 2;

    this.xMax = 10;

    this.jumpVelocity = 15;
    this.wallJumpVelocity = 10;
    this.groundAccel = 0.5;
    this.wallAccel = this.groundAccel / 8;
    this.airAccel = this.groundAccel / 2;

    // this.ground = 592;
    // this.leftWall  = 50;
    // this.rightWall = 750;

    Entity.call(this, game, 100, 300, this.width, this.height, this);
}

KayNine.prototype = new Entity();
KayNine.prototype.constructor = KayNine;

KayNine.prototype.update = function () {



if(this.game.keyDownList['shift']) { console.log("Start of update: jumpReq = " + this.jumpReq + ", onGround = " + this.onGround + ", onWall = " + this.onWall + ", xPos = " + this.xPos + ", xVel = " + this.xVel + ", xAccel = " + this.xAccel + ", yPos = " + this.yPos + ", yVel = " + this.yVel + ", yAccel = " + this.yAccel); }

    // Ground move set
    if(this.onGround) {
        if(this.game.keyDownList['a'] && !this.game.keyDownList['d']) { this.xVel -= this.xAccel; }
        if(this.game.keyDownList['d'] && !this.game.keyDownList['a']) { this.xVel += this.xAccel; }
        if(!this.game.keyDownList['space']) { this.jumpREQ = false; }
        if(this.game.keyDownList['space'] && !this.jumpREQ) { this.yVel = this.jumpVelocity; this.jumpREQ = true; this.onGround = false; }

        if(this.xVel > 0) {

            this.xVel -= this.game.groundFriction;
            if(this.xVel > this.xMax) {
                this.xVel = this.xMax;
            }
        }

        if(this.xVel < 0) {

            this.xVel += this.game.groundFriction;
            if(this.xVel < -this.xMax) {
                this.xVel = -this.xMax;
            }
        }

        if(this.xVel === this.xPre && this.xVel != this.xMax && this.xVel != -this.xMax) { this.xVel = 0; }

    } else if (this.onWall) {

        this.yVel = 0;

        if(this.facingRight  && !(this.game.keyDownList['d'] && !this.game.keyDownList['a'])) { this.xPos = this.xPos - 1; }
        if(!this.facingRight && !(this.game.keyDownList['a'] && !this.game.keyDownList['d'])) { this.xPos = this.xPos + 1; }

        if(this.game.keyDownList['w'] && !this.game.keyDownList['s']) { this.yVel += this.yAccel; }
        if(this.game.keyDownList['s'] && !this.game.keyDownList['w']) { this.yVel -= this.yAccel; }

        if(this.game.keyDownList['space'] && this.jumpREQ != true)  {

            if(this.facingRight) { this.xVel = -this.wallJumpVelocity; this.yVel = this.wallJumpVelocity; }
            else { this.xVel = this.wallJumpVelocity; this.yVel = this.wallJumpVelocity; }
        }
    }

    else {

        if(this.game.keyDownList['a'] && !this.game.keyDownList['d']) { this.xVel -= this.xAccel * this.game.airFriction; }
        if(this.game.keyDownList['d'] && !this.game.keyDownList['a']) { this.xVel += this.xAccel * this.game.airFriction; }

        if(this.jumpREQ && this.game.keyDownList['space']) { this.yVel -= this.game.gravity / 2; }
        else { this.yVel -= this.game.gravity; this.jumpREQ = false; }
    }

    this.lastBox.update(this.xPos, this.yPos);

    this.xPre  = this.xVel;
    this.xPos += this.xVel;
    this.yPos -= this.yVel;
// Complex Collision with all entities.
    this.boundingBox.update(this.xPos, this.yPos);

    this.onGround = false;
    this.onWall = false;

    for (const ent in this.game.entities) {

        entity = this.game.entities[ent];

        if (this.boundingBox.collide(entity.boundingBox)) {

            state = "n/a";

            switch (entity.type) {

                case "floor":
                console.log("Touching Floor");
                         if(this.lastBox.bottom <= entity.lastBox.top)    { state = "top"; }
                    else if(this.lastBox.right  <= entity.lastBox.left)   { state = "left"; }
                    else if(this.lastBox.left   >= entity.lastBox.right)  { state = "right"; }
                    else if(this.lastBox.top    >= entity.lastBox.bottom) { state = "bottom"; }
                    else { console.log("Error on collision side")}

                    switch(state) {
                        case "top"    :
                                this.yPos = entity.boundingBox.top - this.boundingBox.height;
                                this.yVel = 0;
                                this.onGround = true;
                            break;
                        case "bottom" :
                                this.yPos = entity.boundingBox.bottom;
                                this.yVel = 0;
                            break;
                        case "left"   :
                                this.xPos = entity.boundingBox.left - this.boundingBox.width;
                                this.xVel = 0;
                                this.onWall = true;
                            break;
                        case "right"  :
                                this.xPos = entity.boundingBox.right;
                                this.xVel = 0;
                                this.onWall = true;
                            break;
                    }

                break;

                /* case "spike":
                        this.getRekt; he will hopefully eventually die when he has a life to lose >:)
                break; */

                default:
            }
        }
        // if touching get relative velocity to determine side
    }

    if(this.xVel > 0) { this.facingRight =  true; }
    if(this.xVel < 0) { this.facingRight = false; }

console.log(["xPos = " + this.xPos, "yPos = " + this.yPos])
console.log(["Ground = " + this.onGround, "Wall = " + this.onWall]);

if(this.game.keyDownList['shift']) { console.log("Start of update: jumpReq = " + this.jumpReq + ", onGround = " + this.onGround + ", onWall = " + this.onWall + ", xPos = " + this.xPos + ", xVel = " + this.xVel + ", xAccel = " + this.xAccel + ", yPos = " + this.yPos + ", yVel = " + this.yVel + ", yAccel = " + this.yAccel) }

    Entity.prototype.update.call(this);
}

KayNine.prototype.draw = function (ctx) {

this.game.ctx.fillRect(this.boundingBox.left, this.boundingBox.top, this.boundingBox.width, this.boundingBox.height);

    if(false) {}

    else if (this.onGround && this.facingRight && this.xVel != 0) { this.walkRight.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos); }
    else if (this.onGround && !this.facingRight && this.xVel != 0) { this.walkLeft.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos); }

    else if (this.onGround && this.facingRight) { this.idleRight.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos); }
    else if (this.onGround && !this.facingRight) { this.idleLeft.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos); }
/*
    else if (this.onWall && this.facingRight && this.game.keyDownList['w'] && !this.game.keyDownList['s']) { this.wallClimbRight.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos); }
    else if (this.onWall && !this.facingRight && this.game.keyDownList['w'] && !this.game.keyDownList['s']) { this.wallClimbLeft.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos); }

    else if (this.onWall && this.facingRight) { this.wallHangLeft.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos); }
    else if (this.onWall && !this.facingRight) { this.wallHangLeft.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos); }
*/
    else if (this.facingRight) { this.jumpRight.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos); }
    else                       { this.jumpLeft.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos); }

    Entity.prototype.draw.call(this);
}