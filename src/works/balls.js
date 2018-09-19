let balls = [];
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
import drawBackground from '../utils/drawGrid';

let play = true;

for (let i = 0; i < 50; i++) {
    balls[i] = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 30 * Math.random(),
        velocityX: 3 * Math.random(),
        velocityY: 3 * Math.random(),
        color: `rgb(
                ${(255 * Math.random()).toFixed(0)},
                ${(255 * Math.random()).toFixed(0)},
                ${(255 * Math.random()).toFixed(0)})`
    };
}


function drawBalls() {
    if (play) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground(context);

        balls.forEach(ball => {
            context.beginPath();
            context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
            context.fillStyle = ball.color;
            context.fill();

            moveBall(ball);
        });
    }

    requestAnimationFrame(drawBalls);
}

function moveBall(ball) {
    if (ball.x + ball.velocityX + ball.radius > canvas.width ||
        ball.x + ball.velocityX - ball.radius < 0) {
        ball.velocityX = -ball.velocityX;
    }

    if (ball.y + ball.velocityY + ball.radius > canvas.height ||
        ball.y + ball.velocityY - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
    }

    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
}

requestAnimationFrame(drawBalls);

function* playState() {
    while (true) {
        yield false;
        yield true;
    }
}

let state = playState();

canvas.addEventListener('click', function () {
    play = state.next().value;
})