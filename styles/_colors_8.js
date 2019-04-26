const list = require('./_list8')
const styles = require('./_styles')

const fgEsc = '\x1b[38;5;'
const bgEsc = '\x1b[48;5;'

module.exports = {
  open: '',
  close: '',
  ...list.map(x => {
    Object.defineProperty(this, x.name, {
      get () {
        this.open += `${x.id} `
        return (...args) => {
          console.log(args, this.open)
        }
      }
    })
  })
}
