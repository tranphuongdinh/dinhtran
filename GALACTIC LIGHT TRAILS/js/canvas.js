const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66', '#FFF589']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

let mouseDown = false
addEventListener('mousedown', () => {
  mouseDown = true
  console.log(mouseDown)
})

addEventListener('mouseup', () => {
  mouseDown = false
  console.log(mouseDown)
})

// utils
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.shadowColor = this.color
    c.shadowBlur = 15
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

// Implementation
let particles
function init() {
  particles = []

  for (let i = 0; i < 800; i++) {
    const canvasWidth = canvas.width + 500
    const canvasHeight = canvas.height + 500

    const x = Math.random() * canvasWidth - canvasWidth / 2
    const y = Math.random() * canvasHeight - canvasHeight / 2
    const radius = 2 * Math.random()
    const color = colors[randomIntFromRange(0, colors.length)]
    particles.push(new Particle(x, y, radius, color))
  }

  console.log(particles)
}

// Animation Loop
let radians = 0
let alpha = 1
let radiandx = 0.002
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = `rgba(10, 10, 10, ${alpha})`
  c.fillRect(0, 0, canvas.width, canvas.height)

  c.save()
  c.translate(canvas.width / 2, canvas.height / 2)
  c.rotate(radians)

  particles.forEach(particles => {
    particles.update()
  }) 

  c.restore()

  radians += radiandx

  if (mouseDown && alpha >= 0.05) {
    console.log(mouseDown)
    alpha -= 0.1
    radiandx = 0.008
  } else if (!mouseDown && alpha < 1) {
    alpha += 0.005
    radiandx = 0.002
  }
}

init()
animate()
