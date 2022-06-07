

export default abstract class Model {
    public static readonly friction: number = 0.95;

    public static wrapDevicePixelRation(number: number) {
        return number * devicePixelRatio
    }

    public abstract draw(context: CanvasRenderingContext2D): void

    public abstract update(width: number, height: number, context: CanvasRenderingContext2D): void

}
