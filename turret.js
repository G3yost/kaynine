function Turret(game, spritesheet, xPosition, yPosition, speed, firerate, faceRight,  camera){
    //this.moving = move;
    Entity.call(this, game, xPosition, yPosition, 65, 65, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;
    this.camera = camera;
    this.speed = speed;
    this.firerate = firerate;
    this.faceRight = faceRight;
    this.time = 0;

    this.right = xPosition + 66;

    console.log("Here");
    this.left = xPosition - 66;

//    370 * 280
    console.log("Here again");
    this.turrAnim  = new Animation(this.spritesheet, 0, 0, 370, 358, 0.2, 1, true, false);

    this.type = "floor";
}

Turret.prototype = new Entity();
Turret.prototype.constructor = Turret;

Turret.prototype.update = function () {
    this.time +=  this.game.clockTick;
    console.log("Turret stoof" + this.faceRight);
    if(this.time > this.firerate){
        console.log("Time for lazer");
        if (this.faceRight === "R") {
            console.log("Reached Right lazer");
            var Pew = new Lazer(this.game, ASSET_MANAGER.getAsset("img/lazer_right.png"), this.right, this.yPos - 10, this.speed, this.faceRight, this.camera);
        }
         
        if (this.faceRight === "L"){
            console.log("Reached left lazer");
            var Pew = new Lazer(this.game, ASSET_MANAGER.getAsset("img/lazer_left.png"), this.left, this.yPos - 10, this.speed, this.faceRight,  this.camera);
        }

        this.game.addEntity(Pew);
        this.time = 0;
    }
    console.log("Ending turret");
}

Turret.prototype.draw = function (ctx) {
    this.turrAnim.drawFrame(this.game.clockTick, ctx, this.xPos - this.camera.xPos, this.yPos - this.camera.yPos, 0.28 );
    Entity.prototype.draw.call(this);
}
