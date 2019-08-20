class Shape {
    constructor(context, x, y, radius, color) {
        this.c = context
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        this.c.beginPath()
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.c.fillStyle = this.color
        this.c.fill()
        this.c.closePath()
    }

    update() {
        this.draw()
    }
}

module.exports = { Shape }
