const esc = require('./_esc')
module.exports = {
  reset: `${esc}0m`,
  bold: [`${esc}1m`, `${esc}21m`],
  dim: [`${esc}2m`, `${esc}22m`],
  underline: [`${esc}4m`, `${esc}24m`],
  blink: [`${esc}5m`, `${esc}25m`],
  reverse: [`${esc}7m`, `${esc}27m`],
  invisible: [`${esc}8m`, `${esc}28m`]
}
