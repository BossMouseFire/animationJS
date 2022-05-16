const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
fix_dpi()
const gravity = 2;

function setSize() {
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    canvas.style.width = (canvas.width / devicePixelRatio) + "px";
    canvas.style.height = (canvas.height / devicePixelRatio) + "px";
}

function fix_dpi() {
    let dpi = window.devicePixelRatio;

    let style = {
        height() {
            return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
        },
        width() {
            return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
        }
    }

    canvas.setAttribute('width', String(style.width() * dpi));
    canvas.setAttribute('height', String(style.height() * dpi));
}

class Ball {
    public x: number;
    public y: number;
    public dy: number;
    public dx: number;
    public radius: number;
    public color: string;

    constructor(x: number, y: number, radius: number, dy: number, dx: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dy = dy;
        this.dx = dx;
        this.color = color;
    }

    public update() {
        if (this.y + this.radius >= canvas.height) {
            this.dy = -this.dy * 0.92
        } else {
            this.dy += gravity
        }
        this.dx = this.dx * 0.995

        this.y += this.dy
        this.x += this.dx
        this.draw()
    }

    public draw() {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        context.fillStyle = this.color
        context.fill();
        context.closePath()
    }
}


function clearCanvas() {
    canvas.width = canvas.width;
}

const listBall: Ball[] = [];

function init() {
    for (let i =0; i < 100; i++) {
        const x = Math.random() * 200 + 10
        const y = Math.random() * 200 + 10
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
