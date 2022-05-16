var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
fix_dpi();
var gravity = 2;
function setSize() {
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    canvas.style.width = (canvas.width / devicePixelRatio) + "px";
    canvas.style.height = (canvas.height / devicePixelRatio) + "px";
}
function fix_dpi() {
    var dpi = window.devicePixelRatio;
    var style = {
        height: function () {
            return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
        },
        width: function () {
            return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
        }
    };
    canvas.setAttribute('width', String(style.width() * dpi));
    canvas.setAttribute('height', String(style.height() * dpi));
}
var Ball = /** @class */ (function () {
    function Ball(x, y, radius, dy, dx, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dy = dy;
        this.dx = dx;
        this.color = color;
    }
    Ball.prototype.update = function () {
        if (this.y + this.radius >= canvas.height) {
            this.dy = -this.dy * 0.92;
        }
        else {
            this.dy += gravity;
        }
        this.dx = this.dx * 0.995;
        this.y += this.dy;
        this.x += this.dx;
        this.draw();
    };
    Ball.prototype.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };
    return Ball;
}());
function clearCanvas() {
    canvas.width = canvas.width;
}
var listBall = [];
function init() {
    for (var i = 0; i < 100; i++) {
        var x = Math.random() * 200 + 10;
        var y = Math.random() * 200 + 10;
        var radius = Math.random() * 25 + 5;
        var dy = Math.random() * 5 + 1;
        var dx = Math.random() * 5 + 1;
        var color = "rgb(".concat(Math.random() * 255 + 10, ", ").concat(Math.random() * 255 + 10, ", ").concat(Math.random() * 255 + 10, ")");
        var ball = new Ball(x, y, radius, dy, dx, color);
        listBall.push(ball);
    }
}
function animation() {
    requestAnimationFrame(animation);
    clearCanvas();
    listBall.forEach(function (ball) {
        ball.update();
    });
}
init();
animation();
