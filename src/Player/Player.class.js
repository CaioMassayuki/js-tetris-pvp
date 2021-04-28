import PieceBag from './PieceBag.class'
import Joystick from './Joystick.class'

export default class Player {
  constructor(hud) {
    this.hud = hud
    this.pieceBag = new PieceBag(this.hud)
    this.joystick = new Joystick()

    this.joystick.plugJoystick(this.piece)
  }

  spawnPiece(){
    this.piece = this.pieceBag.takePiece()
    this.joystick.plugJoystick(this.piece)
  }
}
