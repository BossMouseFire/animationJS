import Model from "./model";


export default class Ball extends Model {
    public x: number;
    public y: number;
    public dy: number;
    public dx: number;
    public radius: number;
    public color: string;
    private angle: number;
    private speed: number;
    private readonly mass: number

    constructor(x: number, y: number,
                radius: number, color: string, angle: number, speed: number, mass: number) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.angle = angle
        this.speed = speed;
        this.mass = mass
        this.changeUnits();
    }

    public update(width: number, height: number, context: CanvasRenderingContext2D) {
        if (super.wrapDevicePixelRation(this.y + this.radius) > height) {
            this.speed = this.speed * this.friction
        }

        if (super.wrapDevicePixelRation(this.x + this.radius) > width
            || super.wrapDevicePixelRation(this.x - this.radius) < 0) {
            this.angle = 180 - this.angle;
            this.changeUnits();
        } else if (
            super.wrapDevicePixelRation(this.y + this.radius) > height
            || super.wrapDevicePixelRation(this.y - this.radius) < 0) {
            this.angle = 360 - this.angle;
            this.changeUnits();
        }
        this.y += this.dy;
        this.x += this.dx;
        this.draw(context)
    }

    private changeUnits () {
        const radians = this.angle * Math.PI / 180;
        this.dy = Math.sin(radians) * this.speed;
        this.dx = Math.cos(radians) * this.speed;
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
