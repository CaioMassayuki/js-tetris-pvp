export default class Joystick {
  constructor() {
    this.moveSet = {}
    this.controller = this.startController.bind(this)
  }

  startController(event) {
    if (typeof this.moveSet[event.key] === 'function') this.moveSet[event.key]()
  }

  movePlayer(player, { x, y }) {
    player.position = { x, y }
  }

  plugJoystick(player) {
    this.moveSet = {
      ArrowLeft: () => this.movePlayer(player, { x: player.position.x - 1, y: player.position.y }),
      ArrowUp: () => this.movePlayer(player, { x: player.position.x, y: player.position.y - 1 }),
      ArrowRight: () => this.movePlayer(player, { x: player.position.x + 1, y: player.position.y }),
      ArrowDown: () => this.movePlayer(player, { x: player.position.x, y: player.position.y + 1 }),
      q: () => this.unplugJoystick(),
    }
    document.addEventListener('keydown', this.controller, true)
  }

  unplugJoystick() {
    this.moveSet = {}
    document.removeEventListener('keydown', this.controller, true)
  }

}
