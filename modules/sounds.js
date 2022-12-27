const muteSoundsBtn = document.getElementById('mute-sounds-btn')
const soundsBtn = document.getElementById('sounds-btn')
const boomSound = document.getElementById('boom-sound')
const dropSound = document.getElementById('boom-sound')
const rollDiceSound = document.getElementById('roll-dice-sound')
const looseSound = document.getElementById('loose-sound')
const winSound = document.getElementById('success-sound')

const playRollDiceSound = () =>{
    rollDiceSound.play()
}

const playBoomSound = () => {
    boomSound.play()
}

const playDropSound = () => {
   dropSound.play()
}

function muteSounds() {
    animationDisplayNone(muteSoundsBtn, .8, 'ease')
    disabledBtn(muteSoundsBtn)
    reabledBtn(soundsBtn)
    animationDisplayBlock(soundsBtn, .8, 'ease')
    rollDiceSound.muted = true
    boomSound.muted = true
    dropSound.muted = true
    looseSound.muted = true
    winSound.muted = true
}
muteSoundsBtn.addEventListener('click', muteSounds)

const reabledSounds = () => {
    animationDisplayNone(soundsBtn, .8, 'ease')
    disabledBtn(soundsBtn)
    reabledBtn(muteSoundsBtn)
    animationDisplayBlock(muteSoundsBtn, .8, 'ease')
    rollDiceSound.muted = false
    boomSound.muted = false
    dropSound.muted = false
    looseSound.muted = false
    winSound.muted = false
}

