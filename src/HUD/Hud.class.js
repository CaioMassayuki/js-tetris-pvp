export default class HUD {
  constructor() {
    this.canvas = document.getElementById('canvas')
    this.context = this.canvas.getContext('2d')
    this.pixelSize = this.canvas.width / 10 || this.canvas.height / 20
  }

  drawOnScreen(x, y) {
    this.context.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize)
  }
}
