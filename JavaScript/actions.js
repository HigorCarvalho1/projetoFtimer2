import {variaveis} from './variaveis.js'
import * as audio from './audio.js'
import * as focustimer from './focustimer.js'
import { state } from './state.js'





export function music1(){
    variaveis.card1.classList.toggle('light')
    variaveis.card11.classList.toggle('light')
    variaveis.card2.classList.remove('light')
    variaveis.card22.classList.add('light')
    variaveis.card3.classList.remove('light')
    variaveis.card33.classList.add('light')
    variaveis.card4.classList.remove('light')
    variaveis.card44.classList.add('light')

    audio.floresta.play()
    audio.lareira.pause()
    audio.cafeteria.pause()
    audio.chuva.pause()
}
export function music11(){
    variaveis.card1.classList.toggle('light')
    variaveis.card11.classList.toggle('light')
    variaveis.card2.classList.remove('light')
    variaveis.card22.classList.add('light')
    variaveis.card3.classList.remove('light')
    variaveis.card33.classList.add('light')
    variaveis.card4.classList.remove('light')
    variaveis.card44.classList.add('light')
    
    audio.lareira.pause()
    audio.cafeteria.pause()
    audio.chuva.pause()
    audio.floresta.pause()
}
export function music2(){
    variaveis.card2.classList.toggle('light')
    variaveis.card22.classList.toggle('light')
    variaveis.card1.classList.remove('light')
    variaveis.card11.classList.add('light')
    variaveis.card3.classList.remove('light')
    variaveis.card33.classList.add('light')
    variaveis.card4.classList.remove('light')
    variaveis.card44.classList.add('light')

    audio.chuva.play()
    audio.lareira.pause()
    audio.cafeteria.pause()
    audio.floresta.pause()
}
export function music22(){
    variaveis.card2.classList.toggle('light')
    variaveis.card22.classList.toggle('light')
    variaveis.card1.classList.remove('light')
    variaveis.card11.classList.add('light')
    variaveis.card3.classList.remove('light')
    variaveis.card33.classList.add('light')
    variaveis.card4.classList.remove('light')
    variaveis.card44.classList.add('light')
    
    audio.lareira.pause()
    audio.cafeteria.pause()
    audio.chuva.pause()
    audio.floresta.pause()
}
export function music3(){
    variaveis.card3.classList.toggle('light')
    variaveis.card33.classList.toggle('light')
    variaveis.card2.classList.remove('light')
    variaveis.card22.classList.add('light')
    variaveis.card1.classList.remove('light')
    variaveis.card11.classList.add('light')
    variaveis.card4.classList.remove('light')
    variaveis.card44.classList.add('light')

    audio.cafeteria.play()
    audio.lareira.pause()
    audio.chuva.pause()
    audio.floresta.pause()
}
export function music33(){
    variaveis.card3.classList.toggle('light')
    variaveis.card33.classList.toggle('light')
    variaveis.card2.classList.remove('light')
    variaveis.card22.classList.add('light')
    variaveis.card1.classList.remove('light')
    variaveis.card11.classList.add('light')
    variaveis.card4.classList.remove('light')
    variaveis.card44.classList.add('light')

    audio.lareira.pause()
    audio.cafeteria.pause()
    audio.chuva.pause()
    audio.floresta.pause()
}
export function music4(){
    variaveis.card4.classList.toggle('light')
    variaveis.card44.classList.toggle('light')
    variaveis.card2.classList.remove('light')
    variaveis.card22.classList.add('light')
    variaveis.card3.classList.remove('light')
    variaveis.card33.classList.add('light')
    variaveis.card1.classList.remove('light')
    variaveis.card11.classList.add('light')

    audio.lareira.play()
    audio.cafeteria.pause()
    audio.chuva.pause()
    audio.floresta.pause()
}
export function music44(){
    variaveis.card4.classList.toggle('light')
    variaveis.card44.classList.toggle('light')
    variaveis.card2.classList.remove('light')
    variaveis.card22.classList.add('light')
    variaveis.card3.classList.remove('light')
    variaveis.card33.classList.add('light')
    variaveis.card1.classList.remove('light')
    variaveis.card11.classList.add('light')

    audio.lareira.pause()
    audio.cafeteria.pause()
    audio.chuva.pause()
    audio.floresta.pause()
}

export function reset(){
    state.isRunning = false
    variaveis.play.classList.remove('light')
    variaveis.pause.classList.add('light')
    focustimer.start(5, 0)
}
export function soma() {
    if(state.minutes < 60){
        let acrescente = state.minutes + 5
        state.minutes = acrescente
        focustimer.updateDisplay()
}
}
export function menos() {
    if(state.minutes > 0){
        let menos = state.minutes - 5
        state.minutes = menos
        focustimer.updateDisplay()
}
}

