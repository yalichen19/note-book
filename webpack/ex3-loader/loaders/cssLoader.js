module.exports = function (sourceCode) {
  return `const styleStr = \`${sourceCode}\`
  const style = document.createElement('style');
  style.innerHTML = styleStr;
  document.head.appendChild(style);
  module.exports = styleStr`
}