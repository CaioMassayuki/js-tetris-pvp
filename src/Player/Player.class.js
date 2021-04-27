export default class Player {
  constructor(Joystick) {
    this.position = { x: 5, y: 0 }
    this.piece = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ]
    this.Joystick = Joystick

    this.Joystick.plugJoystick(this)
  }
}
