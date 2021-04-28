import { checkMatrixIndex } from 'utils/checkMatrixIndex'

export default class Playfield {
  constructor(hud, player) {
    this.hud = hud
    this.player = player

    this.arena = []
  }

  drawOutline() {
    this.hud.context.lineWidth = 2
    this.hud.context.strokeStyle = '#fff'
    for (let column = 0; column < this.hud.canvas.width; column += this.hud.pixelSize) {
      for (let line = 0; line < this.hud.canvas.height; line += this.hud.pixelSize) {
        this.hud.context.strokeRect(column, line, this.hud.pixelSize, this.hud.pixelSize)
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
    this.hud.context.fillStyle = 'red'
    checkMatrixIndex(this.arena, (line, column) => {
      if (this.arena[line][column] !== 0) {
        this.hud.drawOnScreen(column, line)
      }
    })
  }

  clearPlayfield() {
    this.hud.context.clearRect(0, 0, this.hud.canvas.width, this.hud.canvas.height)
  }
}
