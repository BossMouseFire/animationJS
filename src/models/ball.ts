import Model from "./model";


export default class Ball extends Model {
    public x: number;
    public y: number;
    public dy: number;
    public dx: number;
    public radius: number;
    public color: string;

    constructor(x: number, y: number,
                radius: number, dy: number,
                dx: number, color: string) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dy = dy;
        this.dx = dx;
        this.color = color;
    }

    public update(height: number, context: CanvasRenderingContext2D) {
        console.log('test')
        if (super.wrapDevicePixelRation(this.y + this.radius) >= height) {
            this.dy = -this.dy * this.frictionY
        }
        else if (super.wrapDevicePixelRation(this.y - this.radius) <= 0) {
            this.dy = Math.abs(this.dy)
        }
        else {
            this.dy += this.gravity
        }

        this.dx = this.dx * this.frictionX

        this.y += this.dy
        this.x += this.dx
        this.draw(context)
    }

    public draw(context: CanvasRenderingContext2D) {
        context.beginPath()
        context.arc(
            super.wrapDevicePixelRation(this.x),
            super.wrapDevicePixelRation(this.y),
            super.wrapDevicePixelRation(this.radius),
            0,
            2 * Math.PI
        )
        context.fillStyle = this.color
        context.fill();
        context.closePath()
    }
}
