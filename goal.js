function Goal(game, spritesheet,xPosition, yPosition){
    //this.moving = move;
    Entity.call(this, game, xPosition, yPosition, 10, 200, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;

    this.type = "goal";
}

Goal.prototype = new Entity();
Goal.prototype.constructor = Goal;

Goal.prototype.update = function () {
    
}

Goal.prototype.draw = function (ctx) {
this.game.ctx.fillRect(this.boundingBox.left, this.boundingBox.top, this.boundingBox.width, this.boundingBox.height);
    ctx.drawImage(this.spritesheet, this.xPos, this.yPos, 0.2);
    Entity.prototype.draw.call(this);
}
