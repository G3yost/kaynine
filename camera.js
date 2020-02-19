function Camera (game, kaynine) {

	//	constructor
	this.type = "camera";
	this.camX = 0;
	this.camY = 0;
	this.width = 800;
	this.height = 800;
	this.kaynine = kaynine;	//	adds KayNine to object
	this.boundingbox = new boundingbox(this.x + 200, this.y + 200, 400, 400);	// creates camera bounding box that KayNine interacts with
	game.updateCam(this);
	
	//	Makes Camera object an entity
	Entity.call(this, game, CamX, CamY, this.width, this.height, this);
}


	
	Camera.prototype = new Entity();
	Camera.prototype.constructor = Camera;
	
	
	Camera.prototype.update = function ()	{
		
		this.boundingbox.update(this.xPos + 200, this.y + 100);

		if(this.boundingbox.collide(this.kaynine.boundingbox)) {
			if(.xPos < camera.boundingbox.left) this.x(kaynine.xPos,  camY);
			if(kaynine.xPos > camera.boundingbox.right) this.x(kaynine.xPos + kaynine.width,  camY);
			if(kaynine.yPos < camera.boundingbox.top) this.x(camX, kaynine.yPos + kaynine.height);
			if(kaynine.yPos > camera.boundingbox.bottom) this.x(camX, kaynine.yPos);
		}
	
	
	}
	
	function updatePos (x, y)	{
	camera.camX = x;
	camera.camY = y;
	camera.boundingbox.update(x+2, y+2)
	game.updateCam(this);
	

	}
		
	
	