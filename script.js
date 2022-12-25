const muteSoundsBtn = document.getElementById('mute-sounds-btn')
const soundsBtn = document.getElementById('sounds-btn')
const boomSound = document.getElementById('boom-sound')
const dropSound = document.getElementById('boom-sound')
const looseSound = document.getElementById('loose-sound')
const winSound = document.getElementById('success-sound')
/* SOUNDS */
const rollDiceSound = document.getElementById('roll-dice-sound')
/* HOME */
const homeScreen = document.getElementById('home-screen')
const startGameBtn = document.getElementById('start-game-btn')
const signInBtn = document.getElementById('sign-in-btn')
const gameTitle = document.getElementById('game-title')
    /* RULES */
    const gameRulesBtn = document.getElementById('rules-game-btn')
    const rulesScreen = document.getElementById('rules-screen')
    const rulesAcceptBtn = document.getElementById('rules-accept-btn')
    /* SCORES */
    const scoreScreen = document.getElementById('score-screen')
    const scoreGameBtn = document.getElementById('score-game-btn')
    let yourCurrentScore = document.getElementById('your-current-score')
        /* PLAYER */
        let playerScore = document.getElementById('player-score-card')
        let playerCount = document.getElementById('player-count')
        let playerRoundCount = document.getElementById('player-round-count')
        /* IA */
        let iaCount = document.getElementById('ia-count')
        let iaRoundCount = document.getElementById('ia-round-count')
        let iaScore = document.getElementById('ia-score-card')
    /* OPTIONS */
    const optionsGameBtn = document.getElementById('options-game-btn')
    const optionsScreen = document.getElementById('options-screen')

/* GAMEPLAY */
const playScreen = document.getElementById('play-screen')
const cube2 = document.getElementById('cube2')
let rollDiceBtn = document.getElementById('roll-dice-btn')
let holdBtn= document.getElementById('hold-btn')
const playerRoundScreen = document.getElementById('player-round-screen')
const iaRoundScreen =  document.getElementById('ia-round-screen')
const iaWinScreen =  document.getElementById('ia-win-screen')
const playerWinScreen = document.getElementById('player-win-screen')
const restartBtn = document.getElementById('restart-btn')

/* FORM */
const form = document.getElementById('form')
const closeFormBtn = document.getElementById('close-form-btn')
const submitFormBtn = document.getElementById('submit-form-btn')


/* PLAYERS OBJECT */
const player = {
    activePlayer: true,
    player: {
        roundScore: 0,
        score: 90,
    },
    roundCount: 0,
    ia: {
        roundScore: 0,
        score: 90,
    } ,
}

/* ANIMATIONS */
let titleLineDrawing1 = anime({
    targets: '#titleLineDrawing1 .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1600,
    direction: 'alternate',
    loop: false
  });
  let titleLineDrawing2 = anime({
    targets: '#titleLineDrawing2 .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1800,
    delay: 1650,
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
  function rollDiceAnimation() {
    console.log('rd anim');
    cube2.style.display = 'block'
    cube2.style.animation = "spin2 2.5s cubic-bezier(.1,.75,.79,1.08)"
    setTimeout( () => {
        cube2.style.transform = "rotate(0, 0)"
        cube2.style.display = 'none'
    },'2500')
  }

function homeScreens() {
    disabledBtn(gameRulesBtn)
    animationDisplayNone(gameRulesBtn, .8, 'ease')
    disabledBtn(startGameBtn)
    animationDisplayNone(startGameBtn, .8, 'ease')
    disabledBtn(scoreGameBtn)
    animationDisplayNone(scoreGameBtn, .8, 'ease')
    homeScreen.style.opacity = 0.1
    gameRulesBtn.removeEventListener('click', seeRules)    
    startGameBtn.removeEventListener('click', stateBuild)
    scoreGameBtn.removeEventListener('click', seeScores)
}


const seeRules = () => {
    homeScreens()
    animationDisplayBlock(rulesScreen, .8, 'ease')
    reabledBtn(rulesAcceptBtn)
}
function closeRules() {
    console.log('close rules')
    animationDisplayNone(gameRulesBtn, .8, 'ease')
    reabledBtn(gameRulesBtn)
    gameRulesBtn.addEventListener('click', seeRules)
    animationDisplayBlock(startGameBtn, .8, 'ease')
    startGameBtn.addEventListener('click', stateBuild)
    animationDisplayBlock(gameRulesBtn, .8, 'ease')
    gameRulesBtn.addEventListener('click', seeRules)
    animationDisplayBlock(scoreGameBtn, .8, 'ease')
    scoreGameBtn.addEventListener('click', seeScores)
    reabledBtn(startGameBtn)  
    animationDisplayBlock(homeScreen)
    animationDisplayNone(rulesScreen)
}
function seeScores(){
    console.log('a');
    homeScreens()
    animationDisplayBlock(scoreScreen, .8, 'ease')
}

/* function closeScores(){

} */

function seeOptions() {
    console.log('options screen');
    homeScreens()
    animationDisplayBlock(optionsScreen, .8, 'ease')
}

const playBoomSound = () => {
    boomSound.play()
}

const playDropSound = () => {
   dropSound.play()
}
const stateBuild = () => {
    playBoomSound()
    player.roundCount = 1
    addEvent()
    animationDisplayNone(signInBtn, 0)
    animationDisplayNone(homeScreen, 0)+
    disabledBtn(startGameBtn)
    disabledBtn(gameRulesBtn)
    disabledBtn(scoreGameBtn)
    reabledBtn(restartBtn)
    animationDisplayBlock(restartBtn, 1.3, 'ease-in')
    animationDisplayBlock(playScreen, 1.3, 'ease-in')
    reabledBtn(rollDiceBtn)   
    reabledBtn(holdBtn)
    animationF(rollDiceBtn, 'fadeLeft', 1.3, 'ease')
    animationF(holdBtn, 'fadeRight', 1.3, 'ease')
    animationF(gameTitle, 'rotate', 9)
    animationF(playerScore, 'fade-down-right', 0.6, 'ease-out')
    animationF(iaScore, 'fade-down-left', 0.6, 'ease-out')
    muteSoundsBtn.style.top = "80%"
    cardTurnAnimationAdd(iaScore)

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
function cardTurnAnimationAdd(el){
    console.log(el.id);
    el.classList.add("score-card-animation")
    el.style.transformStyle = ("preserve-3d")
    el.style.transition = ("transform 0.8s cubic-bezier(.65,.6,.52,1.49)")
    el.style.boxShadow = 'none'
}
function cardTurnAnimationRemove(el){
el.classList.remove('score-card-animation')
el.style.transformStyle = ('preserve-3d');
el.style.transition = ('transform 0.8s cubic-bezier(.65,.6,.52,1.49)')
el.style.boxShadow = '0px 0px 7px 10px rgba(153, 138, 138, 0.45)'
}
function playerRoundScreenAnimation() {
    animationDisplayBlock(iaRoundScreen, .8, 'ease')
    setTimeout( () => {
        console.log('time');
        animationDisplayNone(iaRoundScreen, .8, 'ease')
        playScreen.style.opacity = 1
        cardTurnAnimationAdd(playerScore)
        cardTurnAnimationRemove(iaScore)
    }, '1800')
    
}
function iaRoundScreenAnimation() {
    animationDisplayBlock(playerRoundScreen, .8, 'ease')
    setTimeout( () => {
        console.log('screen round animation');
        animationDisplayNone(playerRoundScreen, .8, 'ease')
        playScreen.style.opacity = 1
        cardTurnAnimationAdd(iaScore)
        cardTurnAnimationRemove(playerScore)
    }, '1800')
}
function playerWin() {
    disabledBtn(holdBtn)
    disabledBtn(rollDiceBtn)
    disabledBtn(restartBtn)
    animationDisplayNone(playScreen, .8, 'ease-out')
    animationDisplayBlock(playerWinScreen, .8, 'ease-out')
    winSound.play()
    setTimeout( () => {
        animationDisplayBlock(document.querySelector('.win-word'))
    }, '800')
    
    setTimeout( () => {
    animationDisplayNone(playerWinScreen, .8, 'ease-out')
    seeForm()
    player.player.score = 0
    playerCount.innerHTML = player.player.score
    }, '3500')
}
function iaWin() {
    disabledBtn(holdBtn)
    disabledBtn(rollDiceBtn)
    disabledBtn(restartBtn)
    animationDisplayNone(playScreen, .8, 'ease-in')
    animationDisplayBlock(iaWinScreen, .8, 'ease-in')
    looseSound.play()
    setTimeout( () => {
        animationDisplayBlock(document.querySelector('.loose-word'))
    }, '800')
    setTimeout( () => {
        animationDisplayNone(iaWinScreen, .8, 'ease-in')
        seeForm()
        player.ia.score = 0
        ia.innerHTML = player.ia.score
    }, '3500')
}
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


/* GAMEPLAY FUNCTIONS */
const rollDice = () => {
    let rollFace = Math.floor(Math.random() * (6-1+1)+1)
    disabledBtn(rollDiceBtn)
    disabledBtn(holdBtn)
    if(player.activePlayer === true) {
        if(rollFace > 1) {
            setTimeout( () => {
                player.player.roundScore += rollFace
                playerRoundCount.innerHTML = player.player.roundScore
               /*  addEvent() */
                reabledBtn(rollDiceBtn)
                reabledBtn(holdBtn)
            },'2300')
            
        }
        else if(rollFace === 1) {
            
            setTimeout( () => {
                player.roundCount += 1
                player.player.roundScore = 0
                playerRoundCount.innerHTML = player.player.roundScore
                roundScreen()
                player.activePlayer = false
                /* addEvent() */
                reabledBtn(rollDiceBtn)
                reabledBtn(holdBtn)
            }, '2500')
        }
    } 
    else if(player.activePlayer === false) {
        if(rollFace > 1) {
            setTimeout( () => {
                player.ia.roundScore += rollFace
                iaRoundCount.innerHTML = player.ia.roundScore
                /* addEvent() */
                reabledBtn(rollDiceBtn)
                reabledBtn(holdBtn)
            }, '2300')
            
        }
        else if(rollFace === 1) {
            setTimeout( () => {
                player.roundCount += 1
                player.ia.roundScore = 0
                iaRoundCount.innerHTML = player.ia.roundScore
                roundScreen()
                player.activePlayer = true
                /* addEvent() */
                reabledBtn(rollDiceBtn)
                reabledBtn(holdBtn)
            },'2500')
        }
    }
}
const playRollDiceSound = () =>{
    rollDiceSound.play()
}
const hold = () => {
    /* removeEvent() */
    disabledBtn(rollDiceBtn)
    disabledBtn(holdBtn)
    if(player.activePlayer === true) {
        player.player.score += player.player.roundScore
        playerCount.innerHTML = player.player.score
        player.player.roundScore = 0
        playerRoundCount.innerHTML = 0
        if(player.player.score < 100) {
            setTimeout( () => {
                roundScreen()
                player.activePlayer = false
            }, '1500')
            setTimeout( () => {
                reabledBtn(holdBtn)
                reabledBtn(rollDiceBtn)
            }, '1800')
        }
        else if(player.player.score >= 100){
            setTimeout( () => {
                playerWin()
            }, '1500')
           
        }
    }
    else if(player.activePlayer === false) {
        player.ia.score += player.ia.roundScore
        iaCount.innerHTML = player.ia.score
        player.ia.roundScore = 0
        iaRoundCount.innerHTML = 0
        if(player.ia.score < 100) {
            setTimeout( () => {
                roundScreen()
                player.activePlayer = true
            }, '1500')
            setTimeout( () => {
                reabledBtn(holdBtn)
               reabledBtn(rollDiceBtn)
            }, '1800')
        }
        else if(player.ia.score >= 100) {
            setTimeout( () => {
                iaWin()
            }, '1500')
            
        }
    }
}


const resetGame = () => {
    console.log('reset');
    player.activePlayer = true
    player.player.score = 0
    player.player.roundScore = 0
    playerCount.innerHTML = 0
    playerRoundCount.innerHTML = 0
    player.ia.score = 0
    player.ia.roundScore = 0
    iaCount.innerHTML = 0
    iaRoundCount.innerHTML = 0    
    animationDisplayNone(playScreen, .8, 'ease-in')
    disabledBtn(restartBtn)
    animationDisplayBlock(homeScreen, .8, 'ease-in')
    reabledBtn(startGameBtn)
    reabledBtn(gameRulesBtn)
    reabledBtn(scoreGameBtn)
    cardTurnAnimationRemove(iaScore)
    cardTurnAnimationRemove(playerScore)

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

//MUTE SOUNDS FUNCTIONS
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

// ADD EVENTS LISTENERS
muteSoundsBtn.addEventListener('click', muteSounds)
    /* HOME */
    gameRulesBtn.addEventListener('click', seeRules)
    rulesAcceptBtn.addEventListener('click', closeRules);
    scoreGameBtn.addEventListener('click', seeScores)
    startGameBtn.addEventListener('click', stateBuild)
    optionsGameBtn.addEventListener('click', seeOptions)
    /* PLAY SCREEN */
    rollDiceBtn.addEventListener('click', rollDice)
    rollDiceBtn.addEventListener('click', rollDiceAnimation)
    rollDiceBtn.addEventListener('click', playRollDiceSound)
    holdBtn.addEventListener('click', hold)
    holdBtn.addEventListener('click', playDropSound)
    restartBtn.addEventListener('click', resetGame)

closeFormBtn.addEventListener('click', closeForm)