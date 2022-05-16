const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
setSize()
const gravity = 0.01;
let listBall: Ball[] = [];

function setSize() {
    let rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;

    context.scale(devicePixelRatio, devicePixelRatio);

    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
}

class Ball {
    public x: number;
    public y: number;
    public dy: number;
    public dx: number;
    public radius: number;
    public color: string;
    private readonly frictionY: number;
    private readonly frictionX: number;

    constructor(x: number, y: number, radius: number, dy: number, dx: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dy = dy;
        this.dx = dx;
        this.color = color;
        this.frictionX = 0.995
        this.frictionY = 0.92
    }

    public update() {
        if (Ball.wrapDevicePixelRation(this.y + this.radius) >= canvas.height) {
            this.dy = -this.dy * this.frictionY
        }
        else if (Ball.wrapDevicePixelRation(this.y - this.radius) <= 0) {
            this.dy = Math.abs(this.dy)
        }
        else {
            this.dy += gravity
        }

        this.dx = this.dx * this.frictionX

        this.y += this.dy
        this.x += this.dx
        this.draw()
    }

    public draw() {
        context.beginPath()
        context.arc(
            Ball.wrapDevicePixelRation(this.x),
            Ball.wrapDevicePixelRation(this.y),
            Ball.wrapDevicePixelRation(this.radius),
            0,
            2 * Math.PI
        )
        context.fillStyle = this.color
        context.fill();
        context.closePath()
    }

    private static wrapDevicePixelRation(number: number) {
        return number * devicePixelRatio
    }
}


function clearCanvas() {
    canvas.width = canvas.width;
}

function init() {
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * 50 + 10
        const y = Math.random() * 50 + 10
        const radius = Math.random() * 25 + 5
        const dy = Math.random() * 5 + 1
        const dx = Math.random() * 5 + 1
        const color = `rgb(${Math.random() * 255 + 10}, ${Math.random() * 255 + 10}, ${Math.random() * 255 + 10})`
        const ball = new Ball(x, y, radius, dy, dx, color)
        listBall.push(ball)
    }
}

function animation() {
    requestAnimationFrame(animation)
    clearCanvas()
    listBall.forEach(ball => {
        ball.update()
    })
}

init()
animation()
