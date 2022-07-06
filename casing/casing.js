//return string with opposite casing
//ex 'hello world' === 'HELLO WORLD'

String.prototype.toAlternatingCase = function () {
  return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}