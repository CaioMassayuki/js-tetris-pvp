export default class Joystick {
  constructor() {
    this.moveSet = {}
    this.controller = this.startController.bind(this)
  }

  startController(event) {
    if (typeof this.moveSet[event.key] === 'function') this.moveSet[event.key]()
  }

  movePiece(piece, { x, y }) {
    piece.position = { x, y }
  }

  plugJoystick(piece) {
    this.moveSet = {
      ArrowLeft: () => this.movePiece(piece, { x: piece.position.x - 1, y: piece.position.y }),
      ArrowUp: () => this.movePiece(piece, { x: piece.position.x, y: piece.position.y - 1 }),
      ArrowRight: () => this.movePiece(piece, { x: piece.position.x + 1, y: piece.position.y }),
      ArrowDown: () => this.movePiece(piece, { x: piece.position.x, y: piece.position.y + 1 }),
      q: () => this.unplugJoystick(),
    }
    document.addEventListener('keydown', this.controller, true)
  }

  unplugJoystick() {
    this.moveSet = {}
    document.removeEventListener('keydown', this.controller, true)
  }

}
