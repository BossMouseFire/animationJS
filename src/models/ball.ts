import Model, {IModel} from "./model";


export default class Ball extends Model implements IModel {
    public radius: number;

    constructor(x: number, y: number,
                radius: number, color: string, angle: number, speed: number, mass: number) {
        super(x, y, color, angle, speed, mass)
        this.radius = radius;
        this.changeUnits();
    }

    public update(width: number, height: number, context: CanvasRenderingContext2D) {
        if (this.wrapDevicePixelRation(this.y + this.radius) > height) {
            this.speed = this.speed * Model.friction
        }

        if (this.wrapDevicePixelRation(this.x + this.radius) > width
            || this.wrapDevicePixelRation(this.x - this.radius) < 0) {
            this.angle = 180 - this.angle;
            this.changeUnits();
        } else if (
            this.wrapDevicePixelRation(this.y + this.radius) > height
            || this.wrapDevicePixelRation(this.y - this.radius) < 0) {
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
            this.wrapDevicePixelRation(this.x),
            this.wrapDevicePixelRation(this.y),
            this.wrapDevicePixelRation(this.radius),
            0,
            2 * Math.PI
        )
        context.fillStyle = this.color
        context.fill();
        context.closePath()
    }
}
