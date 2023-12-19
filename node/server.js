const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

const users = require('./users.js')

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(express.static(path.join(__dirname, 'web')))
app.use('/cli', express.static(path.join(__dirname, 'cli')))

var list = [];

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(__dirname + "/web/index.html");
})

app.get('/users', (req, res) => {
  var list = users.getList()
  res.json(list)
})

app.post('/username', (req, res) => {
  var body = req.body

  users.storeUser(body)

  var list = users.getList()
  res.json(list)
})

app.delete('/username', (req, res) => {
  users.remove()

  var list = users.getList()
  res.json(list)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
