function Goal(game, spritesheet,xPosition, yPosition){
    //this.moving = move;
    Entity.call(this, game, xPosition, yPosition, 10, 120, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;

    //282 X 358
    this.goalAnim  = new Animation(this.spritesheet, 0, 0, 282, 358, 0.2, 1, true, false);

    this.type = "goal";
}

Goal.prototype = new Entity();
Goal.prototype.constructor = Goal;

Goal.prototype.update = function () {
    
}

Goal.prototype.draw = function (ctx) {
this.game.ctx.fillRect(this.boundingBox.left, this.boundingBox.top, this.boundingBox.width, this.boundingBox.height);
    //this.goalAnim.drawFrame(this.spritesheet, this.xPos, this.yPos, 0.2);
    this.goalAnim.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos, 0.35 );
    Entity.prototype.draw.call(this);
}
