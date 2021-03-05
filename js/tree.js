class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treeWidth=450;
		this.treeHeight=600;
		this.treeThickness=10;
		
		this.image=loadImage("images/tree.png")
		//this.treee=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true})
		//World.add(world, this.treee)
//<script src="js/tree.js"></script>
	}
	
	display()
	{
			//var opt=this.treee.position;
			push()
			//translate(opt.x, opt.y+10);
			//fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight)
			pop()
			
	}

}