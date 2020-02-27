function Turret(game, spritesheet, xPosition, yPosition, speed, firerate, faceRight,  camera){
    //this.moving = move;
    Entity.call(this, game, xPosition, yPosition, 100, 100, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;
    this.camera = camera;
    this.speed = speed;
    this.firerate = firerate;
    this.faceRight = faceRight;

    this.left = xPosition + 100;
    this.right = xPosition - 100;

//    370 * 280
    this.turrAnim  = new Animation(this.spritesheet, 0, 0, 370, 358, 0.2, 1, true, false);

    this.type = "floor";
}

Turret.prototype = new Entity();
Turret.prototype.constructor = Turret;

Turret.prototype.update = function () {
    var time = this.game.clockTick % this.firerate;    
    if(time === 0){
        if (this.faceRight) {
            var Pew = new Lazer(game, ASSET_MANAGER.getAsset("img/lazer_right.png"), this.right, yPosition, speed, faceRight, camera);
        } else {
            var Pew = new Lazer(game, ASSET_MANAGER.getAsset("img/lazer_left.png"), this.left, yPosition, speed, faceRight, camera);
        }
        game.addEntity(Pew);
    }    
}

Turret.prototype.draw = function (ctx) {
    this.turrAnim.drawFrame(this.game.clockTick, ctx, this.xPos - this.camera.xPos, this.yPos - this.camera.yPos, 0.35 );
    Entity.prototype.draw.call(this);
}
