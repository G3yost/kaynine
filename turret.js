function Turret(game, spritesheet, xPosition, yPosition, width, height, speed){
    //this.moving = move;
    Entity.call(this, game, xPosition, yPosition, width, height, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;

    this.type = "floor";
}

Turret.prototype = new Entity();
Turret.prototype.constructor = Floor;

Turret.prototype.update = function () {
    // if(this.moving === true) {

    // }
}

Turret.prototype.draw = function (ctx) {

    ctx.drawImage(this.spritesheet, this.xPosition + this.camera.xPosition, this.yPosition + this.camera.yPosition);
    Entity.prototype.draw.call(this);
}
