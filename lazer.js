function Lazer(game, spritesheet, xPosition, yPosition, speed, faceRight, camera){
    Entity.call(this, game, xPosition, yPosition + 10, 50, 10, this);
    this.spritesheet = spritesheet;
    this.ctx = game.ctx;
    this.speed = speed;
    this.faceRight = faceRight;
    this.camera = camera;



    if(this.faceRight === "R") {
        this.travel  = new Animation(this.spritesheet, 0, 0, 50, 50, 0.2, 7, true, false);
    } 
    if(this.faceRight === "L"){
        this.travel  = new Animation(this.spritesheet, 0, 0, 50, 50, 0.2, 7, true, false);
    }
    // collision behavior can mimic that of a spike
    // this is technically a spike on the move
    this.type = "lazer";
}

Lazer.prototype = new Entity();
Lazer.prototype.constructor = Lazer;

Lazer.prototype.update = function () {

    var distance = this.game.clockTick * this.speed;
    if(this.faceRight === "R"){
        this.xPos += distance;
    } 

    if(this.faceLeft === "L"){
        this.xPos -= distance;
    }

    this.boundingBox.update(this.xPos, this.yPos + 27);

    for (const ent in this.game.entities) {

        entity = this.game.entities[ent];
        if(this != entity && entity.type != "camera"){
            if (this.boundingBox.collide(entity.boundingBox)) {
                if(entity.type === "kaynine") { // need this to kill the dog
                    entity.isDead = "Dead";
                    // this.game.entities.length = 0;
                    // entity.update() does not do anything
                }
                // this.wasTouching = true;


                // if(this.wasTouching) {
                //     this.removeFromWorld = true;
                // }


                console.log("Lazer has hit something");
                console.log(entity.type);
                // this.speed = 0;
                // this.xPos = -10;
                this.removeFromWorld = true; // having this will cause the crash of kaynine colliding with lazer
                console.log(this.game.entities.length);
                // if (entity.type === )
            }
        }
    }

}


Lazer.prototype.draw = function (ctx) {

    //ctx.rect(this.xPos - this.camera.xPos, this.yPos - this.camera.yPos, this.boundingBox.width, this.boundingBox.height);
	

    this.travel.drawFrame(this.game.clockTick, ctx, this.xPos - this.camera.xPos , this.yPos - this.camera.yPos, 1.5);
    Entity.prototype.draw.call(this);
}