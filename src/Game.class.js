import HUD from './HUD/HUD.class'
import Clock from './GameLogic/Clock.class'
import Playfield from './Playground/Playfield.class'

class Game {
  constructor() {
    if (!Game.instance) {
      this.HUD = new HUD()
      this.Clock = new Clock()
      this.PlayerPlayfield = new Playfield(this.HUD)

      // this.playfields = []
      // this.playing = true

      this.PlayerPlayfield.createPlayfield()
      // this.PlayerPlayfield.arena[1][1] = 1
      // this.PlayerPlayfield.arena[0][2] = 1
      // this.PlayerPlayfield.arena[9][2] = 1
      // this.PlayerPlayfield.arena[3][7] = 1
      this.gameLoop()
    }
    return Game.instance
  }
  
  gameLoop(timer = 0) {
    this.PlayerPlayfield.clearPlayfield()

    this.Clock.frameTick(timer)
    this.Clock.triggerWhen(3000, () => {
      
    })

    this.PlayerPlayfield.renderPlayer()
    this.PlayerPlayfield.renderBlocks()
    this.PlayerPlayfield.drawOutline()
    requestAnimationFrame((timer) => this.gameLoop(timer))
  }
}

const instance = new Game()
Object.freeze(instance)

export default instance
