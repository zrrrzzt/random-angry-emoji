const shuffle = require('crypto-shuffle')
const emojis = require('./lib/emojis.json')

module.exports = () => {
  return shuffle(emojis)[0].toLowerCase()
}
