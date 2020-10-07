class Bob{
    constructor(x,y,r){
var options={
    isStatic:false,
    restitution:1,
    friction:0.5,
    density:1.2
} 
this.x=x;
this.r=r;
this.y=y;
this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
World.add(world,this.body)
    }
display(){
    var bobposition=this.body.position 
    push();
    translate(bobposition.x,bobposition.y)
    //strokeWeight(3)
    rectMode(CENTER)
    fill("purple")
    //imageMode(CENTER);
	//image(this.image, 0,0,this.r, this.r)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop()
}
}