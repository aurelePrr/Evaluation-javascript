import {Animation} from './animations.js'

export class Home {
    constructor(game) {
        this.home = document.getElementById('home-screen')
        this.homeBtn = [
            this.startGameBtn = document.getElementById('start-game-btn'),
            this.gameRulesBtn = document.getElementById('game-rules-btn'), 
            this.scoreGameBtn = document.getElementById('score-game-btn'), 
            this.optionsGameBtn = document.getElementById('options-game-btn') 
        ]
        this.buttons = ['start-game-btn', 'rules-game-btn', 'score-game-btn', 'options-game-btn']
        this.rulesScreen = document.getElementById('rules-screen')
        this.rulesAcceptBtn = document.getElementById('rules-accept-btn')
        this.animation = new Animation
    }
    homeScreens(){
        this.home.style.opacity = 0.1
    }
    seeRules(){
        this.animation.displayBlock(this.rulesScreen, .8, 'ease')
        this.animation.reabledBtn(this.rulesAcceptBtn)
        this.rulesAcceptBtn.addEventListener('click', this.closeRules())
    }
    closeRules(){
        this.animation.displayNone(this.gameRulesBtn, .8, 'ease')
        
        /* animationDisplayNone(gameRulesBtn, .8, 'ease')
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
        animationDisplayNone(rulesScreen) */
    }
    draw() {
        document.addEventListener('click', (e) => {
        console.log(e.target.id)
            if(e.target.id === this.buttons[0]) {
                return
            } else if (e.target.id === this.buttons[1]) {
                this.homeScreens()
                this.seeRules()
            }

        })
    }
}