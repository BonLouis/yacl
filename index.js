const colors = require('./colors')

const _hideCursor = Symbol('hideCursor')
const _showCursor = Symbol('showCursor')
const _clearLine = Symbol('clearLine')
const _handleCursor = Symbol('handleCursor')
const _draw = Symbol('_draw')
const _loop = Symbol('_loop')

class Loader {
  constructor (
    {
      text = 'Please wait ',
      delay = 500,
      pattern = ['.', ' .', '  .', ' .'],
      autostart = false
    } = {}
  ) {
    this[_handleCursor]()

    this.text = text
    this.delay = delay
    this.pattern = pattern

    this.patternIndex = 0
    this.patternMaxI = this.pattern.length - 1

    this.intervalID = null
    if (autostart) {
      this[_loop]()
    }
  }
  // Public methods
  start () { this[_loop]() }
  stop () {
    clearInterval(this.intervalID)
    this[_clearLine]()
  }
  [_loop] () {
    this.intervalID = setInterval(() => {
      this[_draw]()
    }, this.delay)
  }
  [_draw] () {
    this[_clearLine]()
    process.stdout.write(`${this.pattern[this.patternIndex++]} ${this.text}`)
    if (this.patternIndex > this.patternMaxI) this.patternIndex = 0
  }
  // Private methods
  [_clearLine] () {
    process.stdout.clearLine(0)
    process.stdout.cursorTo(0)
  }
  [_hideCursor] () { process.stdout.write('\x1B[?25l') }
  [_showCursor] () { process.stdout.write('\x1B[?25h') }
  [_handleCursor] () {
    this[_hideCursor]();
    ['exit', 'SIGINT'].map(signal => {
      process.on(signal, () => {
        this[_clearLine]()
        this[_showCursor]()
        process.exit()
      })
    })
  }
}

const test = () => {
  const pattern = colors.blue + '.o0O0o'.split('')
  const l = new Loader({
    pattern,
    delay: 100
  })
  console.clear()
  l.text = 'Je fais quelque chose'
  l.start()
  setTimeout(() => {
    l.text = 'Et une autre'
  }, 2000)
  setTimeout(() => {
    l.stop()
  }, 4000)
}
// test()
console.log(colors.bg.chartreuse4 + 'Coucou')
