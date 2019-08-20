import utils from './utils'
import { Shape } from './objects'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

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

// Implementation
let shapes
function init() {
    shapes = []

    for (let i = 0; i < 400; i++) {
        const radius = utils.randomIntFromRange(10, 50)
        const x = utils.randomIntFromRange(0 + radius, canvas.width - radius)
        const y = utils.randomIntFromRange(0 + radius, canvas.height - radius)
        shapes.push(new Shape(c, x, y, radius, utils.randomColor(colors)))
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    shapes.forEach(shape => {
        shape.update()
    })

    c.fillStyle = '#000'
    c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
}

init()
animate()
