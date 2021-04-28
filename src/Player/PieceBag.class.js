import { TETROMINOS, TETROMINOS_NAMES } from 'config/constants'
import { arrayShuffle } from 'utils/arrayShuffle'
import Piece from './Piece.class'

export default class PieceBag {
  constructor(hud) {
    this.hud = hud
    this.bag = []

    this.randomizer()
  }

  randomizer(){
    const newBag = TETROMINOS_NAMES
    arrayShuffle(newBag)
    this.bag = newBag
  }

  takePiece(){
    if(this.bag.length < 1){
      this.randomizer()
    }

    const pieceName = this.bag.pop()
    
    return new Piece(this.hud, TETROMINOS[pieceName])
  }
}
