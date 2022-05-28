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
            const x = Math.random() * this.canvas.width / 2 + 10
            const y = Math.random() * this.canvas.height / 2 + 10
            const radius = Math.random() * 25 + 5
            const color = `rgb(${Math.random() * 255 + 10}, ${Math.random() * 255 + 10}, ${Math.random() * 255 + 10})`
            const angle = Math.random() * 70 + 10
            const speed = Math.random() * 5 + 1
            const mass = Math.random() * 50 + 5
            const ball = new Ball(x, y, radius, color, angle, speed, mass)
            this.listBalls.push(ball)
        }
    }

    public animation(): void {
        requestAnimationFrame(() => this.animation())
        this.clearCanvas()
        this.listBalls.forEach(ball => {
            ball.update(this.canvas.width, this.canvas.height, this.context)
        })

    }
}
