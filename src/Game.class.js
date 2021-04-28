import Playfield from './Playground/Playfield.class'
import Player from './Player/Player.class'

export default class Game {
  constructor(hud, clock) {
    this.hud = hud
    this.clock = clock
    this.player = new Player(this.hud)
    this.playerPlayfield = new Playfield(this.hud, this.player)

    this.playerPlayfield.createPlayfield()
    this.player.spawnPiece()
    // this.playerPlayfield.arena[1][1] = 1
    // this.playerPlayfield.arena[0][2] = 1
    // this.playerPlayfield.arena[9][2] = 1
    // this.playerPlayfield.arena[3][7] = 1
  }

  gameLoop(timer = 0) {
    this.playerPlayfield.clearPlayfield()

    this.clock.frameTick(timer)
    this.clock.triggerWhen(3000, () => {})

    this.player.piece.renderPiece()
    this.playerPlayfield.renderBlocks()
    this.playerPlayfield.drawOutline()
    requestAnimationFrame((timer) => this.gameLoop(timer))
  }
}
