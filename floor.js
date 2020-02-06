function Floor(game, spritesheet, xPosition, yPosition, move){
    //this.moving = move;
    Entity.call(this, game, xPosition, yPosition);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;
}

Floor.prototype = new Entity();
Floor.prototype.constructor = Floor;

Floor.prototype.update = function () {
    // if(this.moving === true) {

    // }
}

Floor.prototype.draw = function (ctx) {
    ctx.drawImage(this.spritesheet, this.xPos, this.yPos);
    Entity.prototype.draw.call(this);
}
