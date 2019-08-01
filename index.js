var express = require('express')
var app = express()

var cors = require('cors')
app.use(cors())

app.get('/url', (req, res, next) => {
  res.json([{ hello: 'hello', world: 'world' }])
})

app.listen(3020, () => {
  console.log('Server running on port 3020')
})
