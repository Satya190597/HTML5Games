

let canvas = document.getElementById('gameArea')
let context = canvas.getContext('2d')

console.log(canvas+' '+context)

paddle.draw(context)

document.addEventListener("keydown", event => {

    switch (event.keyCode) {
        case 37:
          console.log(paddle.moveLeft())
        break;

        case 39:
            console.log(paddle.moveRight())
        break;
      }
})
let lastTime = 0
ball.draw(context)
function gameLoop(timestamp)
{
    if(lastTime == 0)
    {
        paddle.startPosition()
    }
    let deltatime = timestamp - lastTime
    lastTime = deltatime
    context.clearRect(0, 0, 500, 500);
    ball.update(context,collisionHandler.isBallAndPaddleCollide(ball,paddle))
    paddle.draw(context)
    if(deltatime < 9000)
    {
        console.log('Game Playing')
        requestAnimationFrame(gameLoop);
    }
}
requestAnimationFrame(gameLoop);
console.log('Game Stopped')