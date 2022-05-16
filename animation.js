var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
setSize();
var gravity = 0.01;
var listBall = [];
function setSize() {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    context.scale(devicePixelRatio, devicePixelRatio);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
}
var Ball = /** @class */ (function () {
    function Ball(x, y, radius, dy, dx, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dy = dy;
        this.dx = dx;
        this.color = color;
        this.frictionX = 0.995;
        this.frictionY = 0.92;
    }
    Ball.prototype.update = function () {
        if (Ball.wrapDevicePixelRation(this.y + this.radius) >= canvas.height) {
            this.dy = -this.dy * this.frictionY;
        }
        else if (Ball.wrapDevicePixelRation(this.y - this.radius) <= 0) {
            this.dy = Math.abs(this.dy);
        }
        else {
            this.dy += gravity;
        }
        this.dx = this.dx * this.frictionX;
        this.y += this.dy;
        this.x += this.dx;
        this.draw();
    };
    Ball.prototype.draw = function () {
        context.beginPath();
        context.arc(Ball.wrapDevicePixelRation(this.x), Ball.wrapDevicePixelRation(this.y), Ball.wrapDevicePixelRation(this.radius), 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };
    Ball.wrapDevicePixelRation = function (number) {
        return number * devicePixelRatio;
    };
    return Ball;
}());
function clearCanvas() {
    canvas.width = canvas.width;
}
function init() {
    for (var i = 0; i < 50; i++) {
        var x = Math.random() * 50 + 10;
        var y = Math.random() * 50 + 10;
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
