var paddle = {
    width : 100,
    height : 20,
    color : '#5D6D7E',
    positionX : 0,
    positionY : 0,
    speed : 100,
    startPosition : function(){
        this.positionX = 500 / 2 - this.width / 2
        this.positionY = 500 - (this.height + 10)
    },
    moveLeft : function()
    {
        if(this.positionX > 10)
            this.positionX = this.positionX - 10;
    },
    moveRight : function()
    {
        if(this.positionX < 490-this.width)
            this.positionX = this.positionX + 10;
    },
    draw : function(ctx)
    {
        ctx.fillStyle = this.color
        ctx.fillRect(this.positionX,this.positionY,this.width,this.height)
    }

}