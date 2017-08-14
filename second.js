function sayHi(first) {
  return `Hi ${first}` //ES2015
}

function sayBye(first) {
  return `Bye ${first}`
}

module.exports = {
  sayHi: sayHi,
  sayBye: sayBye
}
