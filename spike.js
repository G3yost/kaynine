function Spike(game, spritesheet, xPosition, yPosition, width, height){
    Entity.call(this, game, xPosition, yPosition, width, height, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;

    this.type = "spike";
}

Spike.prototype = new Entity();
Spike.prototype.constructor = Floor;

Spike.prototype.update = function () {

    // Will probably need something to check if player has collided

}


Spike.prototype.draw = function (ctx) {
    ctx.drawImage(this.spritesheet,
                    this.xPosition + this.camera.xPosition, this.yPosition + this.camera.yPosition);
    Entity.prototype.draw.call(this);
}