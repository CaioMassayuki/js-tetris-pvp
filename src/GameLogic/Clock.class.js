export default class Clock {
  constructor() {
    this.deltaTime = 0
    this.lastTime = 0
    this.fpsCount = 0
    this.fpsTimer = 0
    this.timeCounter = 0
  }

  frameTick(timeelapsed) {
    this.fpsCount++
    this.deltaTime = timeelapsed - this.lastTime
    this.lastTime = timeelapsed
    this.fpsTimer += this.deltaTime
    if (this.fpsTimer > 1000) {
      this.fpsTimer = 0
      // console.log(this.fpsCount, 'FPS')
      this.fpsCount = 0
    }
  }

  triggerWhen(limit = 1000, trigger = () => {}) {
    this.timeCounter += this.deltaTime
    if (this.timeCounter > limit) {
      trigger()
      this.timeCounter = 0
    }
  }
}
