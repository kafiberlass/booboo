const MAX_CLICKS = 7

const STARS = [ ... ] // ваш массив звезд

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
  // ИСПРАВЛЕНО: добавлен правильный путь
  penguinImg.src = '/гифка да.gif'  // или '/assets/гифка да.gif'
  flowerPetals.style.display = 'block'
  acceptSound.play()
  hideButtons()
}

function displayRejection() {
  state = 'rejected'
  title.textContent = 'ладно...'
  // ИСПРАВЛЕНО: добавлен правильный путь
  penguinImg.src = '/гифка нет.gif'  // или '/assets/гифка нет.gif'
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
