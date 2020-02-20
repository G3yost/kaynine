function Camera (game) {

	//	constructor
	this.type = "camera";
	this.width = 800;
	this.height = 800;
	this.horBuff = 200;
	this.vertBuff = 100;
	this.kaynine = null;
	this.boundingBox = new BoundingBox(this.x + this.horBuff, this.y + this.vertBuff, 400, 400);	// creates camera bounding box that KayNine interacts with

	//	Makes Camera object an entity
	Entity.call(this, game, 0, 0, this.width, this.height, this);
}



Camera.prototype = new Entity();
Camera.prototype.constructor = Camera;
Camera.prototype.attachKaynine = function(kaynine) {

	this.kaynine = kaynine;
}

Camera.prototype.update = function ()	{
console.log(this.kaynine);
	this.boundingBox.update(this.xPos + this.horBuff, this.y + this.verBuff);

	if(this.boundingBox.collide(this.kaynine.boundingBox)) {
		if(kaynine.xPos < camera.boundingBox.left) this.updatePos(kaynine.xPos,  camY);
		if(kaynine.xPos > camera.boundingBox.right) this.updatePos(kaynine.xPos + kaynine.width,  camY);
		if(kaynine.yPos < camera.boundingBox.top) this.updatePos(camX, kaynine.yPos + kaynine.height);
		if(kaynine.yPos > camera.boundingBox.bottom) this.updatePos(camX, kaynine.yPos);
	}


}

function updatePos (x, y)	{
	this.xPos = x;
	this.yPos = y;
	camera.boundingBox.update(x + this.horBuff, y + this.vertBuff);
}