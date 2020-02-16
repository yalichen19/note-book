import getRandom from './getRandom';
const COLORS = ['#f36395', '#62efab', '#ef7658', '#ffe868', '#80e3f7', '#d781f9'];

/**
 * 返回一个随机的颜色
 */
export default function () {
  const index = getRandom(0, COLORS.length);
  return COLORS[index];
}