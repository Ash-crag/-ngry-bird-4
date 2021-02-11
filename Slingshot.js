class SlingShot{
    constructor(bodyA, pointB){
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke('#301608')
            line(pointA.x - 15, pointA.y, pointB.x, pointB.y);   
            line(pointA.x , pointA.y, pointB.x + 20, pointB.y);  
            
            if(pointA.x > 200){
                image(this.sling3, pointA.x + 25, pointA.y - 10 , 15, 30)
            }
            else{
                image(this.sling3, pointA.x - 25, pointA.y - 10 , 15, 30);
            }
        }
        image(this.sling1, 220, 20);
        image(this.sling2, 195, 20);
        
    }
    
}