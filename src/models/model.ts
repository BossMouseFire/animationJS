
export default class Model {
    protected readonly friction: number = 0.95;

    protected wrapDevicePixelRation(number: number) {
        return number * devicePixelRatio
    }

    protected draw(context: CanvasRenderingContext2D): void {}

    protected update(width: number, height: number, context: CanvasRenderingContext2D): void {}
}
