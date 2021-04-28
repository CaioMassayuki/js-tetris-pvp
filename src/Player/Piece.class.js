import { checkMatrixIndex } from '../utils/checkMatrixIndex'

export default class Piece {
  constructor(hud) {
    this.hud = hud
    this.position = { x: 4, y: 0 }
    this.matrix = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ]
  }

  renderPiece() {
    checkMatrixIndex(this.matrix, (line, column) => {
      if (this.matrix[line][column] !== 0) {
        this.hud.drawOnScreen(this.position.x + column, this.position.y + line)
      }
    })
  }
}
