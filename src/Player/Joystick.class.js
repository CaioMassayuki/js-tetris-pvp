export default class Joystick {
  constructor(piece) {
    this.piece = piece
    this.moveSet = {}
    this.controller = this.startController.bind(this)
  }

  startController(event) {
    if (typeof this.moveSet[event.key] === 'function') this.moveSet[event.key]()
  }

  movePlayer({ x, y }) {
    this.piece.position = { x, y }
  }

  plugJoystick() {
    this.moveSet = {
      ArrowLeft: () => this.movePlayer({ x: this.piece.position.x - 1, y: this.piece.position.y }),
      ArrowUp: () => this.movePlayer({ x: this.piece.position.x, y: this.piece.position.y - 1 }),
      ArrowRight: () => this.movePlayer({ x: this.piece.position.x + 1, y: this.piece.position.y }),
      ArrowDown: () => this.movePlayer({ x: this.piece.position.x, y: this.piece.position.y + 1 }),
      q: () => this.unplugJoystick(),
    }
    document.addEventListener('keydown', this.controller, true)
  }

  unplugJoystick() {
    this.moveSet = {}
    document.removeEventListener('keydown', this.controller, true)
  }
}
