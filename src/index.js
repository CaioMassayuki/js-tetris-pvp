import Game from './Game.class'
import Clock from './GameLogic/Clock.class'
import HUD from './HUD/Hud.class'

const hud = new HUD()
const clock = new Clock()
const game = new Game(hud, clock)

game.gameLoop()