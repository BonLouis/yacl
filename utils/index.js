module.exports = {
  esc: '\x1b[',
  capitalize (str) {
    return str[0].toUpperCase() + str.slice(1)
  }
}
