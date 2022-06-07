import Animation from "./animation";
import Ball from "../models/ball";


export default class AnimationBalls implements Animation {

    private listBalls: Ball[] = [];
    private readonly countBalls: number;

    constructor(countBalls) {
        this.countBalls = countBalls;
        this.init();
    }

    public init(): void {
        Animation.setSize()
        for (let i = 0; i < this.countBalls; i++) {
            const x = Math.random() * Animation.canvas.width / 2 + 10
            const y = Math.random() * Animation.canvas.height / 2 + 10
            const radius = Math.random() * 5 + 2
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
        Animation.clearCanvas()
        this.listBalls.forEach(ball => {
            ball.update(Animation.canvas.width, Animation.canvas.height, Animation.context)
        })

    }
}
