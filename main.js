const MAX_CLICKS = 7

const STARS = [
  { left: '8%', top: '12%', size: 4, delay: 0 },
  { left: '22%', top: '8%', size: 6, delay: 0.5 },
  { left: '35%', top: '18%', size: 3, delay: 1 },
  { left: '78%', top: '15%', size: 5, delay: 0.2 },
  { left: '88%', top: '22%', size: 4, delay: 0.8 },
  { left: '12%', top: '45%', size: 5, delay: 0.3 },
  { left: '5%', top: '72%', size: 4, delay: 1.2 },
  { left: '45%', top: '6%', size: 3, delay: 0.6 },
  { left: '92%', top: '55%', size: 6, delay: 0.4 },
  { left: '68%', top: '78%', size: 4, delay: 0.9 },
  { left: '55%', top: '85%', size: 5, delay: 0.1 },
  { left: '28%', top: '92%', size: 3, delay: 0.7 },
  { left: '85%', top: '38%', size: 4, delay: 1.1 },
  { left: '18%', top: '62%', size: 5, delay: 0.5 },
  { left: '72%', top: '42%', size: 3, delay: 0.3 },
  { left: '3%', top: '28%', size: 3, delay: 0.4 },
  { left: '42%', top: '35%', size: 5, delay: 0.9 },
  { left: '58%', top: '12%', size: 4, delay: 0.15 },
  { left: '95%', top: '8%', size: 5, delay: 0.65 },
  { left: '15%', top: '85%', size: 4, delay: 1.0 },
  { left: '38%', top: '78%', size: 6, delay: 0.25 },
  { left: '62%', top: '55%', size: 3, delay: 0.75 },
  { left: '82%', top: '72%', size: 5, delay: 0.55 },
  { left: '8%', top: '35%', size: 4, delay: 0.85 },
  { left: '48%', top: '52%', size: 3, delay: 0.35 },
  { left: '75%', top: '28%', size: 5, delay: 0.95 },
  { left: '25%', top: '25%', size: 4, delay: 0.45 },
  { left: '90%', top: '88%', size: 4, delay: 0.6 },
]

const title = document.getElementById('title')
const penguinImg = document.getElementById('penguinImg')
const buttonsContainer = document.getElementById('buttonsContainer')
const noButton = document.getElementById('noButton')
const yesButton = document.getElementById('yesButton')
const flowerPetals = document.getElementById('flowerPetals')
const container = document.getElementById('container')
const starsBg = document.getElementById('starsBg')
const acceptSound = document.getElementById('acceptSound')
const rejectSound = document.getElementById('rejectSound')

let state = 'asking'
let noClicks = 0
let noButtonPosition = null

STARS.forEach((star, i) => {
  const span = document.createElement('span')
  span.className = 'star'
  span.textContent = '★'
  span.style.left = star.left
  span.style.top = star.top
  span.style.fontSize = star.size * 4 + 'px'
  span.style.animationDelay = star.delay + 's'
  starsBg.appendChild(span)
})

function hideButtons() {
  buttonsContainer.style.display = 'none'
}

function displayAcceptance() {
  state = 'accepted'
  title.textContent = 'ура, чмоки'
  penguinImg.src = 'гифка да.gif'
  flowerPetals.style.display = 'block'
  acceptSound.play()
  hideButtons()
}

function displayRejection() {
  state = 'rejected'
  title.textContent = 'ладно...'
  penguinImg.src = 'гифка нет.gif'
  container.style.background = 'linear-gradient(135deg, #a0b2ee 0%, #b8c5f0 50%, #c9d3f2 100%)'
  rejectSound.play()
  hideButtons()
}

function randomizeButtonLocation() {
  const padding = 20
  const maxX = window.innerWidth - noButton.offsetWidth - padding * 2
  const maxY = window.innerHeight - noButton.offsetHeight - padding * 2
  noButton.style.position = 'fixed'
  noButton.style.left = (padding + Math.floor(Math.random() * Math.max(0, maxX))) + 'px'
  noButton.style.top = (padding + Math.floor(Math.random() * Math.max(0, maxY))) + 'px'
}

yesButton.onclick = function () {
  displayAcceptance()
}

noButton.onclick = function () {
  noClicks += 1
  if (noClicks >= MAX_CLICKS) {
    displayRejection()
  } else if (noClicks > 1) {
    randomizeButtonLocation()
  }
}
