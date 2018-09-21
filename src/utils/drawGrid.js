export default function drawGrid(context, color = 'lightgray', stepx = 10, stepy = 10) {
    context.save();

    context.strokeStyle = color;
    context.lineWidth = 0.5;

    context.beginPath();

    for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
        // context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        // context.stroke();
    }

    for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
        // context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        // context.stroke();
    }
    context.stroke();

    context.restore();
}