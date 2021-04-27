import Joystick from '../Player/Joystick.class'
import Player from '../Player/Player.class'

export default class Playfield {
  constructor(HUD) {
    this.HUD = HUD
    this.Joystick = new Joystick()
    this.Player = new Player(this.Joystick)

    this.arena = []
  }

  drawOutline() {
    this.HUD.context.lineWidth = 2
    this.HUD.context.strokeStyle = '#fff'
    for (let column = 0; column < this.HUD.canvas.width; column += this.HUD.pixelSize) {
      for (let line = 0; line < this.HUD.canvas.height; line += this.HUD.pixelSize) {
        this.HUD.context.strokeRect(column, line, this.HUD.pixelSize, this.HUD.pixelSize)
      }
    }
  }

  createPlayfield() {
    let height = 20
    let width = 10
    while (height--) {
      this.arena.push(new Array(width).fill(0))
    }
  }

  renderBlocks() {
    this.HUD.context.fillStyle = 'cyan'
    for (let line = 0; line < this.arena.length; line++) {
      for (let column = 0; column < this.arena.length; column++) {
        if (this.arena[line][column] !== 0) {
          this.HUD.context.fillRect(
            column * this.HUD.pixelSize,
            line * this.HUD.pixelSize,
            this.HUD.pixelSize,
            this.HUD.pixelSize
            )
          }
        }
      }
    }
    
    renderPlayer() {
    for (let line = 0; line < this.Player.piece.length; line++) {
      for (let column = 0; column < this.Player.piece[line].length; column++) {
        if (this.Player.piece[line][column] !== 0) {
          this.HUD.context.fillRect(
            (this.Player.position.x + column) * this.HUD.pixelSize,
            (this.Player.position.y + line) * this.HUD.pixelSize,
            this.HUD.pixelSize,
            this.HUD.pixelSize
          )
        }
      }
    }
  }

  clearPlayfield() {
    this.HUD.context.clearRect(0, 0, this.HUD.canvas.width, this.HUD.canvas.height)
  }
}
