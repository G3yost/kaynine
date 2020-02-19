function Vaccuum(game, spritesheet, xPosition, yPosition, width, height){
    Entity.call(this, game, xPosition, yPosition, width, height, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;

    // collision behavior can mimic that of a vaccuum
    // the vaccuum moves along a platform like an enemy
    this.type = "vaccuum";
}

Lazer.prototype = new Entity();
Lazer.prototype.constructor = Floor;

Lazer.prototype.update = function () {



}


Lazer.prototype.draw = function (ctx) {
    ctx.drawImage(this.spritesheet,
                    this.xCam, this.yCam);
    Entity.prototype.draw.call(this);
}