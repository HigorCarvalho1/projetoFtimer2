import * as focustimer from './focustimer.js'
import { state } from './state.js'
import { variaveis } from './variaveis.js'
import * as actions from './actions.js'
import * as audio from './audio.js'




focustimer.start(5, 0)

// controles
variaveis.stop.addEventListener('click',actions.reset)
variaveis.plus.addEventListener('click', actions.soma)
variaveis.menos.addEventListener('click', actions.menos)
variaveis.pause.addEventListener('click', focustimer.toggleRunning)
variaveis.play.addEventListener('click', focustimer.toggleRunning)
variaveis.play.addEventListener('click', focustimer.countdown)

//cards / audio
variaveis.card1.addEventListener('click', actions.music1)
variaveis.card11.addEventListener('click', actions.music11)
variaveis.card2.addEventListener('click', actions.music2)
variaveis.card22.addEventListener('click', actions.music22)
variaveis.card3.addEventListener('click', actions.music3)
variaveis.card33.addEventListener('click', actions.music33)
variaveis.card4.addEventListener('click', actions.music4)
variaveis.card44.addEventListener('click', actions.music44)


