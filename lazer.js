function Lazer(game, spritesheet, xPosition, yPosition, speed, faceRight, camera){
    Entity.call(this, game, xPosition, yPosition + 50, 50, 10, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;
    this.speed = speed;
    this.faceRight = faceRight;
    this.camera = camera;

    if(this.faceRight) {
        this.travel  = new Animation(this.spritesheet, 0, 0, 50, 50, 0.2, 7, true, false);
    } else {
        this.travel = new Animation(this.spritesheet, 0, 0, 50, 50, 0.2, 7, true, false);
    }
    // collision behavior can mimic that of a spike
    // this is technically a spike on the move
    this.type = "spike";
}

Lazer.prototype = new Entity();
Lazer.prototype.constructor = Lazer;

Lazer.prototype.update = function () {

    var distance = this.game.clockTick * this.speed;
    if(this.faceRight){
        this.xPos += distance;
    } else {
        this.xPos -= distance;
    }

 this.boundingBox.update(this.xPos, this.yPos);

 for (const ent in this.game.entities) {

    entity = this.game.entities[ent];
    if (this.boundingBox.collide(entity.boundingBox)) {
        if(entity.type === "floor") {
            console.log("Lazer has hit something");
            console.log(entity.type);
            this.removeFromWorld = true;
        }
    }
    }

}


Lazer.prototype.draw = function (ctx) {

    //ctx.rect(this.xPos - this.camera.xPos, this.yPos - this.camera.yPos, this.boundingBox.width, this.boundingBox.height);
	

    this.travel.drawFrame(this.game.clockTick, ctx, this.xPos - this.camera.xPos , this.yPos - this.camera.yPos)
    Entity.prototype.draw.call(this);
}