import {state} from './state.js'
import { variaveis } from './variaveis.js'
import * as actions from './actions.js'



export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds
    
    variaveis.minutes.textContent = String(minutes).padStart(2, "0")
    variaveis.seconds.textContent = String(seconds).padStart(2, "0")

}

export function toggleRunning(){
    state.isRunning = !state.isRunning
    variaveis.play.classList.toggle('light')
    variaveis.pause.classList.toggle('light')
}
export function  start (minutes, seconds){
    state.minutes = minutes
    state.seconds = seconds
    
    updateDisplay()
}
export  function countdown(){
    clearTimeout(state.countdownId)

    if(!state.isRunning){
        return
    }
    
    let minutes = Number(variaveis.minutes.textContent)
    let seconds = Number(variaveis.seconds.textContent)
    seconds--
    
    

    if(seconds < 0){
        seconds = 59
        minutes--
    }
    if(minutes < 0){
        minutes = 5
        seconds = 0
        state.isRunning = false
        variaveis.play.classList.remove('light')
        variaveis.pause.classList.add('light')
    }
    updateDisplay(minutes, seconds)
    state.countdownId = setTimeout (() => countdown(), 1000)// essa linha é oque faz ficar voltando sempre parao regresso  do cursor ( utlize o setTimeout (callBack))
    
}
