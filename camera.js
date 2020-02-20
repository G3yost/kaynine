function Camera (game) {

	//	constructor
	this.type = "camera";
	this.width = 800;
	this.height = 800;
	this.horBuff = 200;
	this.vertBuff = 100;
	this.boundingbox = new boundingbox(this.x + this.horBuff, this.y + this.vertBuff, 400, 400);	// creates camera bounding box that KayNine interacts with
	game.updateCam(this);

	//	Makes Camera object an entity
	Entity.call(this, game, CamX, CamY, this.width, this.height, this);
}



	Camera.prototype = new Entity();
	Camera.prototype.constructor = Camera;
	Camera.prototype.attachKaynine = function(kaynine) {

		this.kaynine = kaynine;
	}

	Camera.prototype.update = function ()	{

		this.boundingbox.update(this.xPos + this.horBuff, this.y + this.verBuff);

		if(this.boundingbox.collide(this.kaynine.boundingbox)) {
			if(kaynine.xPos < camera.boundingbox.left) this.updatePos(kaynine.xPos,  camY);
			if(kaynine.xPos > camera.boundingbox.right) this.updatePos(kaynine.xPos + kaynine.width,  camY);
			if(kaynine.yPos < camera.boundingbox.top) this.updatePos(camX, kaynine.yPos + kaynine.height);
			if(kaynine.yPos > camera.boundingbox.bottom) this.updatePos(camX, kaynine.yPos);
		}


	}

	function updatePos (x, y)	{
		this.xPos = x;
		this.yPos = y;
		camera.boundingbox.update(x + this.horBuff, y + this.vertBuff);
		game.updateCam(this);


	}


