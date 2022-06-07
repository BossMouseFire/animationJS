
export default abstract class Animation {

    public static canvas: HTMLCanvasElement = document.querySelector('canvas');
    public static context: CanvasRenderingContext2D = this.canvas.getContext('2d');

    public static clearCanvas() {
        Animation.canvas.width = Animation.canvas.width;
    }

    public static setSize() {
        let rect = Animation.canvas.getBoundingClientRect();

        Animation.canvas.width = rect.width * devicePixelRatio;
        Animation.canvas.height = rect.height * devicePixelRatio;

        Animation.context.scale(devicePixelRatio, devicePixelRatio);

        Animation.canvas.style.width = rect.width + 'px';
        Animation.canvas.style.height = rect.height + 'px';
    }

    public abstract init(): void

    public abstract animation(): void

}
