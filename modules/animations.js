export class Animation {
    constructor() {
    }
    disabledBtn(el) {
        el.disabled = true
     }
    reabledBtn(el) {
        el.disabled = false
    }

    displayNone(el, time, transition){
        el.style.transition = 'all' + time + 's' + transition
        el.style.opacity = 0
        el.style.display ='none'
    }
    displayBlock(el, time, transition){
        el.style.transition = 'all' + time + 's' + transition
        el.style.display = 'block'
        el.style.opacity = 1
      }
}