export default class NumberTimer {
  constructor(onNumerCreated, duration = 500) {
    this.duration = duration;
    this.number = 1;
    this.onNumerCreated = onNumerCreated;
  }

  start() {
    if (this.timerId) {
      return;
    }
    this.timerId = setInterval(() => {
      this.onNumerCreated && this.onNumerCreated(this.number)
      this.number ++;
    }, this.duration)
  }

  stop() {
    clearInterval(this.timerId)
    this.timerId = null;
  }
}