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
this.game.ctx.fillRect(this.boundingBox.left, this.boundingBox.top, this.boundingBox.width, this.boundingBox.height);
    ctx.drawImage(this.spritesheet, this.xPos, this.yPos);
    Entity.prototype.draw.call(this);
}
