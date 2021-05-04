class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}


if(this.body.velocity.x > 10 && this.body.position.x > 200){
	var position = [this.body.position.x, this.body.position.y];
	this.trajectory.push(position);
  }
 

  for(var i=0; i<this.trajectory.length; i++){
	image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
  }
