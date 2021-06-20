class Chain {
    constructor(body1,body2){
        var option = {
            bodyA: body1.body,
            bodyB: body2.body,
            stiffness: 0.04,
            length: 10
        }

        this.chain = Constraint.create(option)
        World.add(world,this.chain)
    }



    display(){
        var A = this.chain.bodyA.position
        var B = this.chain.bodyB.position
        line(A.x,A.y,B.x,B.y)
    }
}