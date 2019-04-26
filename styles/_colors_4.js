const codeFg = {
  'test': 133,
  'black': 30,
  'red': 31,
  'green': 32,
  'yellow': 33,
  'blue': 34,
  'magenta': 35,
  'cyan': 36,
  'white': 37,
  'brightBlack': 90,
  'brightRed': 91,
  'brightGreen': 92,
  'brightYellow': 93,
  'brightBlue': 94,
  'brightMagenta': 95,
  'brightCyan': 96,
  'brightWhite': 97
}
const codeBg = {
  'black': 40,
  'red': 41,
  'green': 42,
  'yellow': 43,
  'blue': 44,
  'magenta': 45,
  'cyan': 46,
  'white': 47,
  'brightBlack': 100,
  'brightRed': 101,
  'brightGreen': 102,
  'brightYellow': 103,
  'brightBlue': 104,
  'brightMagenta': 105,
  'brightCyan': 106,
  'brightWhite': 107
}
const all = {}
for (const key in codeFg) {
  all[key] = `\u001b[0;${codeFg[key]}m`
  all[`light_${key}`] = `\u001b[1;${codeFg[key]}m`
  if (key in codeBg) {
    all[`bg_${key}`] = `\u001b[0;${codeBg[key]}m`
    all[`light_bg_${key}`] = `\u001b[1;${codeBg[key]}m`
  }
}
module.exports = all
