var ball = {
    color : '#5D6D7E',
    speed : 10,
    positionX : 50,
    positionY : 50,
    draw : function(ctx)
    {
        // ctx.beginPath(); -- need to understand
        ctx.arc(this.positionX,this.positionY,8,0,2*Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath();
    },
    update : function(ctx)
    {
        this.positionX += this.speed
        this.positionY += this.speed
        this.draw(ctx)
    }
}