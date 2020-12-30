class Slingshot{
    constructor(bodyA, ptnB){
        var options = {
            bodyA: bodyA,
            pointB: ptnB,
            stiffness: 0.04,
            length: 10
        }

        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
        
    }

       fly(){
         this.slingshot.bodyA = null;
       }
    display(){
        if( this.slingshot.bodyA){

        var point1 = this.slingshot.bodyA.position;
       var point2 = this.slingshot.pointB;
        strokeWeight(4);
        line(point1.x, point1.y,point2.x,point2.y);
    }
}
    
}