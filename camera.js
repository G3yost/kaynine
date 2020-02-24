function Camera (game) {

	//	constructor
	this.type = "camera";
	this.width = document.getElementById('gameWorld').width;
	this.height = document.getElementById('gameWorld').height;
	this.horBuff = 450;
	this.vertBuff = 300;
	this.kaynine = null;
	//	Makes Camera object an entity
	Entity.call(this, game, 0, 0, this.width, this.height, this);
	this.boundingBox = new BoundingBox(this.xPos + this.horBuff, this.yPos + this.vertBuff, this.width - (2 * this.horBuff), this.height - (2 * this.vertBuff));	// creates camera bounding box that KayNine interacts with
}



Camera.prototype = new Entity();
Camera.prototype.constructor = Camera;
Camera.prototype.attachKaynine = function(kaynine) {

	this.kaynine = kaynine;
	this.update();
}

Camera.prototype.update = function ()	{
	let offsetX = this.xPos;
	let offsetY = this.yPos;
	if(!this.boundingBox.collide(this.kaynine.boundingBox)) {
		if(this.kaynine.xPos < this.boundingBox.left) {
			console.log("Left");
			offsetX = this.kaynine.boundingBox.right - this.horBuff;
		}
		else if(this.kaynine.xPos > this.boundingBox.right) {
			console.log("Right");
			offsetX = this.kaynine.boundingBox.left - (this.horBuff + this.boundingBox.width);
		}
		if(this.kaynine.yPos < this.boundingBox.top)	{
			console.log("Up");
			offsetY = this.kaynine.boundingBox.bottom - this.vertBuff;
		}
		else if(this.kaynine.yPos > this.boundingBox.bottom)	{
			console.log("Down");
			offsetY = (this.kaynine.boundingBox.top) - (this.vertBuff + this.boundingBox.height);
		}
		
	}
	this.updatePos(offsetX, offsetY);

}

Camera.prototype.draw = function(ctx) {

	ctx.rect(this.boundingBox.left - this.xPos, this.boundingBox.top - this.yPos, this.boundingBox.width, this.boundingBox.height);
	ctx.stroke();
	
}

Camera.prototype.updatePos = function(x, y)	{
	this.xPos = x;
	this.yPos = y;

	this.boundingBox.update(this.xPos + this.horBuff, this.yPos + this.vertBuff);
}