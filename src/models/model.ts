

export default class Model {
    public x: number;
    public y: number;
    protected dy: number;
    protected dx: number;
    public color: string;
    protected angle: number;
    protected speed: number;
    public readonly mass: number

    protected static readonly friction: number = 0.95;

    constructor(x: number, y: number, color: string, angle: number, speed: number, mass: number) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.angle = angle;
        this.speed = speed;
        this.mass = mass;
    }

    protected wrapDevicePixelRation(number: number) {
        return number * devicePixelRatio
    }

}

export interface IModel {
    draw(context: CanvasRenderingContext2D): void;
    update(width: number, height: number, context: CanvasRenderingContext2D): void;
}

