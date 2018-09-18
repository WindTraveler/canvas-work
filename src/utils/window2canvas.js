/**
 *
 * @param canvas
 * @param x 鼠标事件的clientX
 * @param y 鼠标事件的clientY
 * @return Object
 */
export default function window2canvas(canvas, x, y) {
    let rect = canvas.getBoundingClientRect();

    return {
        x: x - rect.left,
        y: y - rect.top
    };
}