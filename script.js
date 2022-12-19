const homeScreen = document.getElementById('home-screen')
const startGameBtn = document.getElementById('start-game-btn')
const signInBtn = document.getElementById('sign-in-btn')
const gameRulesBtn = document.getElementById('rules-game-btn')
const scoreGameBtn = document.getElementById('score-game-btn')
const playScreen = document.getElementById('play-screen')
let rollDiceBtn = document.getElementById('roll-dice-btn')
let holdBtn= document.getElementById('hold-btn')
const gameTitle = document.getElementById('game-title')
const playerScore = document.getElementById('player-score')
const iaScore = document.getElementById('ia-score')
const playerCount = document.getElementById('player-count')
const playerRoundCount = document.getElementById('player-round-count')
const playerRoundScreen = document.getElementById('player-round-screen')
const iaCount = document.getElementById('ia-count')
const iaRoundCount = document.getElementById('ia-round-count')
const iaRoundScreen =  document.getElementById('ia-round-screen')
const iaWinScreen =  document.getElementById('ia-win-screen')
const playerWinScreen = document.getElementById('player-win-screen')
let yourCurrentScore = document.getElementById('your-current-score')
const form = document.getElementById('form')
const closeFormBtn = document.getElementById('close-form-btn')
const submitFormBtn = document.getElementById('submit-form-btn')

const player = {
    activePlayer: true,
    player: {
        roundScore: 0,
        score: 99,
    },
    roundCount: 0,
    ia: {
        roundScore: 0,
        score: 99,
    } ,
}

let titleLineDrawing1 = anime({
    targets: '#titleLineDrawing1 .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2800,
    direction: 'alternate',
    loop: false
  });



  let titleLineDrawing2 = anime({
    targets: '#titleLineDrawing2 .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2800,
    delay: 2600,
    direction: 'alternate',
    loop: false
  });

  

  function animationDisplayNone(el, time, trans){
    el.style.transition = time + 's'
    el.style.opacity = 0
    el.style.display ='none'
  }
  function animationDisplayBlock(el, time, trans){
    el.style.transition = time + 's'
    el.style.display = 'block'
    el.style.opacity = 1
  }

  function disabledBtn(el){
    el.disabled = true
  }
  function reabledBtn(el){
    el.disabled = false
  }
  
  function animationF(el, anim, time, cb) {
    el.style.animation = anim + ' ' + time + 's ' + cb
    el.style.display = 'block'
  }

// SCREENS FUNCTIONS

const stateBuild = () => {
    console.log('statebd');
    player.roundCount = 1
    addEvent()
    animationDisplayNone(signInBtn, 0)
    animationDisplayNone(homeScreen, 0)
    disabledBtn(startGameBtn)
    disabledBtn(gameRulesBtn)
    disabledBtn(scoreGameBtn)
    animationDisplayBlock(playScreen, 1.3)
    reabledBtn(rollDiceBtn)   
    reabledBtn(holdBtn)
    animationF(rollDiceBtn, 'fadeLeft', 1.3, 'ease')
    animationF(holdBtn, 'fadeRight', 1.3, 'ease')
    animationF(gameTitle, 'rotate', 9)
    animationF(playerScore, 'fade-down-right', 0.6, 'ease-out')
    animationF(iaScore, 'fade-down-left', 0.6, 'ease-out')
}

function roundScreen() {
    console.log(player.activePlayer);
    playScreen.style.opacity = 0.1
    if(player.activePlayer){
        playerRoundScreenAnimation()
    }
    if(!player.activePlayer){
        iaRoundScreenAnimation()
    }
}

function playerRoundScreenAnimation() {
    animationDisplayBlock(iaRoundScreen, .8, 'ease')
    setTimeout( () => {
        console.log('time');
        animationDisplayNone(iaRoundScreen, .8, 'ease')
        playScreen.style.opacity = 1
    }, '1800')
    
}

function iaRoundScreenAnimation() {
    animationDisplayBlock(playerRoundScreen, .8, 'ease')
    setTimeout( () => {
        console.log('screen round animation');
        animationDisplayNone(playerRoundScreen, .8, 'ease')
        playScreen.style.opacity = 1
    }, '1800')
}

const rollDice = () => {
    let rollFace = Math.floor(Math.random() * (6-1+1)+1)
    if(player.activePlayer) {
        if(rollFace > 1) {
            player.player.roundScore += rollFace
            playerRoundCount.innerHTML = player.player.roundScore
        }
        else if(rollFace === 1) {
            player.roundCount += 1
            player.player.roundScore = 0
            playerRoundCount.innerHTML = player.player.roundScore
            removeEvent()
            setTimeout( () => {
                roundScreen()
                player.activePlayer = !player.activePlayer
                addEventWithDelay()
            }, '900')
        }
    } 
    else if(!player.activePlayer) {
        if(rollFace > 1) {
            player.ia.roundScore += rollFace
            iaRoundCount.innerHTML = player.ia.roundScore
        }
        else if(rollFace === 1) {
            player.roundCount += 1
            player.ia.roundScore = 0
            iaRoundCount.innerHTML = player.ia.roundScore
            removeEvent()
            setTimeout( () => {
                roundScreen()
                player.activePlayer = true
                addEventWithDelay()
            }, 900)
        }
    }
}

const hold = () => {
    if(player.activePlayer) {
        player.player.score += player.player.roundScore
        playerCount.innerHTML = player.player.score
        player.player.roundScore = 0
        playerRoundCount.innerHTML = 0
        removeEvent()
        if(player.player.score < 100) {
            setTimeout( () => {
                roundScreen()
                !player.activePlayer
                addEventWithDelay()
            }, '800')
        }
        else if(player.player.score >= 100){
            playerWin()
        }
    }
    else if(!player.activePlayer) {
        player.ia.score += player.ia.roundScore
        iaCount.innerHTML = player.ia.score
        player.ia.roundScore = 0
        iaRoundCount.innerHTML = 0
        removeEvent()
        if(player.ia.score < 100) {
            setTimeout( () => {
                roundScreen()
                player.activePlayer
                addEventWithDelay()
            }, '800')
        }
        else if(player.ia.score >= 100) {
            iaWin()
        }
    }
}

function playerWin() {
    disabledBtn(holdBtn)
    disabledBtn(rollDiceBtn)
    animationDisplayNone(playScreen, .8, 'ease-out')
    animationDisplayBlock(playerWinScreen, .8, 'ease-out')
    setTimeout( () => {
    animationDisplayNone(playerWinScreen, .8, 'ease-out')
    seeForm()
    player.player.score = 0
    playerCount.innerHTML = player.player.score
    }, '3000 ')
}

let winLineDrawing = anime({
    targets: '#winlineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2800,
    delay: 0,
    autoplay: false,
    direction: 'alternate',
    loop: true
  });
document.querySelector('#hold-btn').onclick = winLineDrawing.play


function iaWin() {
    disabledBtn(holdBtn)
    disabledBtn(rollDiceBtn)
    animationDisplayNone(playScreen, .8, 'ease-in')
    animationDisplayBlock(iaWinScreen, .8, 'ease-in')
    setTimeout( () => {
        animationDisplayNone(iaWinScreen, .8, 'ease-in')
        seeForm()
    }, '3000')
}

let looseLineDrawing = anime({
targets: '#looseLineDrawing .lines path',
strokeDashoffset: [anime.setDashoffset, 0],
easing: 'easeInOutSine',
duration: 2800,
autoplay: false,
delay: 0,
direction: 'alternate',
loop: true
});

function seeForm() {
    reabledBtn(closeFormBtn)
    reabledBtn(submitFormBtn)
    animationDisplayBlock(form, .8, 'ease-out')
}

function closeForm() {
    console.log('close')
    disabledBtn(closeFormBtn)
    animationDisplayNone(form, 1.1, 'ease')
    reabledBtn(startGameBtn)
    reabledBtn(gameRulesBtn)
    reabledBtn(scoreGameBtn)
    animationDisplayBlock(homeScreen, 1.1, 'ease')
    animationDisplayBlock(signInBtn, 1.1, 'ease')
}

// EVENT FUNCTIONS 


function removeEvent() {
    rollDiceBtn.removeEventListener('click', rollDice)
    holdBtn.removeEventListener('click', hold)
}

function addEventWithDelay() {
    setTimeout( () => {
        rollDiceBtn.addEventListener('click', rollDice)
        holdBtn.addEventListener('click', hold)                
    }, '1800')
}

function addEvent() {
    rollDiceBtn.addEventListener('click', rollDice)
    holdBtn.addEventListener('click', hold)              
}

// ADD EVENTS LISTENERS
closeFormBtn.addEventListener('click', closeForm)
startGameBtn.addEventListener('click', stateBuild)
rollDiceBtn.addEventListener('click', rollDice)
holdBtn.addEventListener('click', hold)