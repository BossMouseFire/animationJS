
export default class Animation {

    protected canvas: HTMLCanvasElement = document.querySelector('canvas');
    protected context: CanvasRenderingContext2D = this.canvas.getContext('2d');

    protected clearCanvas() {
        this.canvas.width = this.canvas.width;
    }

    private setSize() {
        let rect = this.canvas.getBoundingClientRect();

        this.canvas.width = rect.width * devicePixelRatio;
        this.canvas.height = rect.height * devicePixelRatio;

        this.context.scale(devicePixelRatio, devicePixelRatio);

        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
    }

    protected init(): void {
        this.setSize()
    }

    public animation(): void {}

}
