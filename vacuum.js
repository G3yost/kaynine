function Vacuum(game, spritesheet, xPosition, yPosition, width, height){
    Entity.call(this, game, xPosition, yPosition, width, height, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;

    // collision behavior can mimic that of a vacuum
    // the vacuum moves along a platform like an enemy
    this.type = "Vacuum";
}

Vacuum.prototype = new Entity();
Vacuum.prototype.constructor = Floor;

Vacuum.prototype.update = function () {



}


Vacuum.prototype.draw = function (ctx) {
    ctx.drawImage(this.spritesheet,
                    this.xCam, this.yCam);
    Entity.prototype.draw.call(this);
}