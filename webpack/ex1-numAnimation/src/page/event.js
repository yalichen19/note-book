import NumerTimer from '../util/NumberTimer'
import appendNumber from './appendNumber'

const nmberTimer = new NumerTimer((n) => {
  appendNumber(n)
})

let isStart = false;
window.onclick = function () {
  if (isStart) {
    nmberTimer.stop();
    isStart = false;
  } else {
    nmberTimer.start();
    isStart = true;
  }
}