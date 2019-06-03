var ball = {
    color : '#5D6D7E',
    speedX : 10,
    speedY : 8,
    positionX : 50,
    positionY : 50,
    draw : function(ctx)
    {
        ctx.beginPath();
        ctx.arc(this.positionX,this.positionY,8,0,2*Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath();
    },
    update : function(ctx)
    {
        this.positionX += this.speedX
        this.positionY += this.speedY
        // Prevent ball from bottom of the wall -- need to remove
        if(this.positionY + 8 > 500)
            this.speedY =  -this.speedY
        if(this.positionY + 8 < 0)
            this.speedY =  -this.speedY
        if(this.positionX + 8 < 0 || this.positionX + 8 > 500)
            this.speedX = -this.speedX
        this.draw(ctx)
    }
}