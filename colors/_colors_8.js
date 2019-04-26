const list = require('./_list8')
const { esc } = require('../utils')

module.exports = new Proxy({
  bg: '',
  c: [...list.map(x => x.name)]
}, {
  get (obj, prop, ca) {
    if (!(prop in obj) && !(obj.c.includes(prop))) {
      console.log(prop)
      return obj[prop]
    }
    let str = ''
    if (prop === 'reset') {
      str = esc + '104;'
    } else if (prop === 'bg') {
      this.bg = true
      return ca
    } else {
      str = esc + (this.bg ? 48 : 38) + ';5;' + list.find(x => x.name === prop).id + 'm'
      this.bg = false
      console.log({ str })
      return ca
    }
    return obj[prop]
  }
})
