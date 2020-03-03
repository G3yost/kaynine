function Vacuum(game, spritesheet, xPos, yPos, speed, direction, camera){
	this.width = 128;
	this.height = 64;
    Entity.call(this, game, xPos, yPos, width, height, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;
    this.camera;
	
	this.speed = speed;

	//STATUS
	this.onWall   = false;
    this.isDead   = false;
	
	
	
    this.type = "Vacuum";
	
	//	ANIMATIONS
	this.movingRight = new Animation(ASSET_MANAGER.getAsset("./img/vacuum_moving_right.png"), 0, 0, 128, 64, 0.075, 8, true, false);
    this.movingLeft  = new Animation(ASSET_MANAGER.getAsset("./img/vacuum_moving_left.png"), 0, 0, 128, 64, 0.075, 8, true, true);
    this.attackRight = new Animation(ASSET_MANAGER.getAsset("./img/vacuum_attack_left.png"), 0, 0, 128, 64, 0.2, 8, true, false);
    this.attackLeft  = new Animation(ASSET_MANAGER.getAsset("./img/vacuum_attack_right.png"), 0, 0, 128, 164, 0.2, 8, true, false);
}

Vacuum.prototype = new Entity();
Vacuum.prototype.constructor = Vacuum;

Vacuum.prototype.update = function () {
	
	if (this.direction === "R")	{
		if (this.onWall === true)	this.direction = "L";
	}	else	{	xPos += speed;
	}
	if (this.direction === "L")	{
		if (this.onWall === true)	this.direction = "R";
	}	else	{	xPos -= speed;
	}
	
	
	    for (const ent in this.game.entities) {

        entity = this.game.entities[ent];
        if(this != entity && entity.type != "camera"){
            if (this.boundingBox.collide(entity.boundingBox)) {
                if(entity.type === "kaynine") { // need this to kill the dog
                    entity.update();
                }

                console.log("Vacuum has hit something");
                console.log(entity.type);
                this.removeFromWorld = true; // having this will cause the crash of kaynine colliding with lazer
                console.log(this.game.entities.length);
            }
        }
    }



}


Vacuum.prototype.draw = function (ctx) {
    ctx.drawImage(this.spritesheet,
                    this.xPos - this.camera.xPos, this.yPos - this.camera.yPos);
    Entity.prototype.draw.call(this);
}