class Drop {
    constructor(x,y,radius){

    this.body = ellispe(x,y,radius);
    this.radius = radius;
    this.x = x;
    this.y = y;
    }

    fall(speed){
        this.y +=speed;
    }

    display(){
        push();
        fill("silver");
        ellipseMode(CENTER);
        elipse(this.x,this.y,this.radius);
        pop();
    }
}