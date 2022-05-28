
export default class Model {
    protected readonly frictionY: number = 0.995;
    protected readonly frictionX: number = 0.9955;
    protected readonly gravity: number = 0.1;

    protected wrapDevicePixelRation(number: number) {
        return number * devicePixelRatio
    }

    protected draw(context: CanvasRenderingContext2D): void {}

    protected update(height: number, context: CanvasRenderingContext2D): void {}
}
