import $ from 'jquery';
import isPrime from '../util/isPrime'
import getRandomColor from '../util/getRandomColor'
import getRandom from '../util/getRandom'

const divContainer = $('#divContainer')
const divCenter = $('#divCenter')

export default function (n) {
  const span = $('<span>').text(n);
  if (isPrime(n)) {
    const color = getRandomColor();
    const div = $('<div>').addClass('center').css('color', color).text(n);
    $('body').append(div);
    getComputedStyle(div[0]).left;
    div.css('transform', `translate(${getRandom(-200, 200)}px,${getRandom(-200, 200)}px)`).css('opacity', 0);
    span.css('color', color);
  }
  divContainer.append(span);
  divCenter.text(n);
}