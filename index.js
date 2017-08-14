const express = require('express') // cannot redeclare this variable
const app = express();  // invoke the express function.  Gives us flexibility to call this and utilize this over and over again.

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/home', function(req, res) {
  res.send('Welcome Home!')
})

app.get('/person/:name', function(req, res) {
  res.send(`Hello ${req.params.name}`)
})

app.get('/math/:operation/:num1/:num2', function(req, res) {
  var operation = req.params.operation
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)

  var lookup = {
    add: (num1 + num2).toString(),
    subtract: (num1 - num2).toString(),
    multiple: (num1 * num2).toString(),
    divide: (num1 / num2).toString()
  }

  res.send(lookup[operation] ? lookup[operation] : "Does not compute")

})

app.listen(3000)
