import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
canvas.addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

window.addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
class Shape {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

    update() {
        this.draw()
    }
}

// Implementation
let shapes
function init() {
    shapes = []

    // for (let i = 0; i < 400; i++) {
    //     const radius = utils.randomIntFromRange(10, 50)
    //     const x = utils.randomIntFromRange(0 + radius, canvas.width - radius)
    //     const y = utils.randomIntFromRange(0 + radius, canvas.height - radius)
    //     shapes.push(new Shape(x, y, radius, utils.randomColor(colors)))
    // }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    // shapes.forEach(shape => {
    //     shape.update()
    // })
}

init()
animate()
