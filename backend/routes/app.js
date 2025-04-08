const express = require('express')
const morgan = require('morgan');
const port = 3000

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hola mundo!')
})

app.listen(port, () => {
  console.log(`Servidor lanzado en el puerto ${port}`)
})