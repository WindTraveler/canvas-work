const TEXT_RADIUS = 110;
const CLOCK_RADIUS = 100;
const CENTER_RADIUS = 3;
const HOUR_RADIUS = 35;
const MIN_RADIUS = 50;
const SEC_RADIUS = 65;
const FONT_SIZE = 15;
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function drawCircle() {
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, CLOCK_RADIUS,
                0, 2 * Math.PI, true);
    context.stroke();
}

function drawCenter() {
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, CENTER_RADIUS,
        0, 2 * Math.PI, true);
    context.fill();
}

function drawHands() {
    let t = new Date();
    let h = t.getHours();
    h = h > 12 ? h - 12 : h;

    context.save();

    context.lineWidth = 5;
    drawHand(5 * (h + t.getMinutes() / 60), HOUR_RADIUS);

    context.lineWidth = 3;
    drawHand(t.getMinutes(), MIN_RADIUS);

    context.restore();
    drawHand(t.getSeconds(), SEC_RADIUS);
}

function drawHand(value, handRadius) {
    let angle = Math.PI * 2 * (value / 60) - Math.PI / 2;
    context.moveTo(canvas.width / 2, canvas.height / 2);
    context.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius,
                    canvas.height / 2 + Math.sin(angle) * handRadius);
    context.stroke();
}

function drawNums() {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let angle;
    let numWidth;
    nums.forEach(n => {
        angle = (n - 3) * Math.PI / 6;
        numWidth = context.measureText(n).width;
        context.fillText(n, canvas.width / 2 + Math.cos(angle) * TEXT_RADIUS - numWidth / 2,
                            canvas.height / 2 + Math.sin(angle) * TEXT_RADIUS + FONT_SIZE / 3);
    });
}

// main function主函数
function drawClock() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle();
    drawCenter();
    drawHands();
    drawNums();
}

context.font = `${FONT_SIZE}px serif`;
setInterval(drawClock, 1000);