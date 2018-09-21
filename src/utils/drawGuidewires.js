function drawHorizontalLine (context, y) {
    context.beginPath();
    context.moveTo(0,y+0.5);
    context.lineTo(context.canvas.width,y+0.5);
    context.stroke();
}

function drawVerticalLine (context, x) {
    context.beginPath();
    context.moveTo(x+0.5,0);
    context.lineTo(x+0.5,context.canvas.height);
    context.stroke();
}

function drawGuidewires(context, x, y, color = 'rgba(0,0,230,0.4)') {
    context.save();
    context.strokeStyle = color;
    context.lineWidth = 0.5;
    drawVerticalLine(context, x);
    drawHorizontalLine(context, y);
    context.restore();
}

export default drawGuidewires;