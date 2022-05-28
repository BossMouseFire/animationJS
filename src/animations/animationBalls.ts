import Animation from "./animation";
import Ball from "../models/ball";


export default class AnimationBalls extends Animation {

    private listBalls: Ball[] = [];
    private readonly countBalls: number;

    constructor(countBalls) {
        super();
        this.countBalls = countBalls;
        this.init();
    }

    protected init(): void {
        super.init()
        for (let i = 0; i < this.countBalls; i++) {
            const x = Math.random() * 50 + 10
            const y = Math.random() * 50 + 10
            const radius = Math.random() * 25 + 5
            const dy = Math.random() * 5 + 1
            const dx = Math.random() * 5 + 1
            const color = `rgb(${Math.random() * 255 + 10}, ${Math.random() * 255 + 10}, ${Math.random() * 255 + 10})`
            const ball = new Ball(x, y, radius, dy, dx, color)
            this.listBalls.push(ball)
        }
    }

    public animation(): void {
        requestAnimationFrame(() => this.animation())
        this.clearCanvas()
        this.listBalls.forEach(ball => {
            console.log(ball, this.canvas.height, this.context)
            ball.update(this.canvas.height, this.context)
        })
    }

}
