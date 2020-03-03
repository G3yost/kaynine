function Vacuum(game, spritesheet, xPos, yPos, camera){
	this.width = 128;
	this.height = 64;
    Entity.call(this, game, xPos, yPos, width, height, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;
    this.camera;


    this.type = "Vacuum";
}

Vacuum.prototype = new Entity();
Vacuum.prototype.constructor = Vacuum;

Vacuum.prototype.update = function () {



}


Vacuum.prototype.draw = function (ctx) {
    ctx.drawImage(this.spritesheet,
                    this.xPos - this.camera.xPos, this.yPos - this.camera.yPos);
    Entity.prototype.draw.call(this);
}