import Piece from './Piece.class'
import Joystick from './Joystick.class'

export default class Player {
  constructor(hud) {
    this.hud = hud
    this.piece = new Piece(this.hud)
    this.joystick = new Joystick(this.piece)
    this.joystick.plugJoystick()
  }
}
