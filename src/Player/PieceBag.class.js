import { TETROMINOS, TETROMINOS_NAMES } from 'config/constants'
import Piece from './Piece.class'

export default class PieceBag {
  constructor(hud) {
    this.hud = hud
    this.bag = this.randomizer()

  }

  randomizer(){
    const newBag = TETROMINOS_NAMES

    for(let i = 0; i < newBag.length; i++){
      const variavel = parseInt(Math.random() * (newBag.length - i)) + i

      const temp = newBag[i]
      newBag[i] = newBag[variavel]
      newBag[variavel] = temp
    }

    this.bag = randomBag
  }

  takePiece(){
    const pieceName = this.bag.pop()

    return new Piece(this.hud, TETROMINOS[pieceName])
  }
}
