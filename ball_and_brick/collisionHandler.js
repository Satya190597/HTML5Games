var collisionHandler = {
    isBallAndPaddleCollide : function(ball,paddle)
    {
        let ballBottom = ball.positionY + 8
        let ballTop = ball.positionY

        let paddleBottom = paddle.positionY + paddle.height
        let paddleTop = paddle.positionY
        let paddleLeft = paddle.positionX
        let paddleRight = paddle.positionX + paddle.width

        console.log(ballBottom+":"+ballTop+":"+paddleBottom+":"+paddleTop+":"+paddleLeft+":"+paddleRight)
        if(ballBottom >= paddleTop && 
            ballTop <= paddleBottom &&
            ball.positionX + 8 <= paddleRight &&
            ball.positionX >= paddleLeft)
        {
            // console.log('****** TRUE ******')
            return true
        }
        else
        {
            return false
        }
    }
}