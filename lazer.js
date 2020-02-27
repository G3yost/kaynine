function Lazer(game, spritesheet, xPosition, yPosition, speed, faceRight, camera){
    Entity.call(this, game, xPosition, yPosition + 10, 50, 30, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;
    this.speed = speed;
    this.faceRight = faceRight;
    this.camera = camera;

    if(this.faceRight) {
        this.travel  = new Animation(ASSET_MANAGER.getAsset("./img/lazer_right.png"), 0, 0, 50, 50, 0.2, 7, true, false);
    } else {
        this.travel = new Animation(ASSET_MANAGER.getAsset("./img/lazer_left.png"), 0, 0, 50, 50, 0.2, 7, true, false);
    }
    // collision behavior can mimic that of a spike
    // this is technically a spike on the move
    this.type = "spike";
}

Lazer.prototype = new Entity();
Lazer.prototype.constructor = Lazer;

Lazer.prototype.update = function () {

 if(faceRight){
     this.xPos += this.game.clockTick * this.speed;
 } else {
     this.xPos -= this.game.clockTick * this.speed;
 }

 this.boundingBox.update(this.xPos, this.yPos);

 for (const ent in this.game.entities) {

    entity = this.game.entities[ent];
    if (this.boundingBox.collide(entity.boundingBox)) {
        this.removeFromWorld = true;
    }
    }

}


Lazer.prototype.draw = function (ctx) {
    this.travel.drawFrame(this.game.clockTick, ctx, this.xPos - this.camera.xPos , this.yPos - this.camera.yPos)
    Entity.prototype.draw.call(this);
}