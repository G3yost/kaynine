function Camera (game) {

	//	constructor
	this.type = "camera";
	this.camX = 0;
	this.camY = 0;
	this.width = 800;
	this.height = 800;
	game.updateCam(this);
	
	//	Makes Camera object an entity
	Entity.call(this, game, CamX, CamY, this.width, this.height, this);
}


	
	Camera.prototype = new Entity();
	Camera.prototype.constructor = Camera;
	
	
	Camera.prototype.update = function ()	{
		
		this.boundingbox = new boundingbox(this.x + 200, this.y + 200, 400, 400);
		
		// if kaynine does not collide with bounding box
		if("kaynine".xPos < camera.boundingbox.left) this.x("kaynine".xPos,  camY);
		if("kaynine".xPos > camera.boundingbox.right) this.x("kaynine".xPos + "kaynine".width,  camY);
		if("kaynine".yPos < camera.boundingbox.top) this.x(camX, "kaynine".yPos + "kaynine".height);
		if("kaynine".yPos > camera.boundingbox.bottom) this.x(camX, "kaynine".yPos);
	
	
	}
	
	function updatePos (x, y)	{
	"camera".camX = x;
	"camera".camY = y;
	"camera".boundingbox.update(x+2, y+2)
	game.updateCam(this);
	

	}
		
	
	