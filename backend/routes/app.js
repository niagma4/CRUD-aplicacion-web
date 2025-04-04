const express = require('express')
const morgan = require('morgan');
const port = 3000

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})