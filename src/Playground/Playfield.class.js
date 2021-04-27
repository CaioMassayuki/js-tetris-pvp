import Joystick from '../Player/Joystick.class'
import Player from '../Player/Player.class'
import { checkMatrixIndex, checkMatrixStatic } from './playfield.utils'

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
    this.HUD.context.fillStyle = 'red'
    checkMatrixIndex(this.arena, (line, column) => {
      if (this.arena[line][column] !== 0) {
        this.HUD.drawOnScreen(column, line)
      }
    })
  }

  renderPlayer() {
    checkMatrixIndex(this.Player.piece, (line, column) => {
      if (this.Player.piece[line][column] !== 0) {
        this.HUD.drawOnScreen(this.Player.position.x + column, this.Player.position.y + line)
      }
    })
  }

  clearPlayfield() {
    this.HUD.context.clearRect(0, 0, this.HUD.canvas.width, this.HUD.canvas.height)
  }
}
