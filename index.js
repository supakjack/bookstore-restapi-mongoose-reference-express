const express = require('express')
const app = express()
const createError = require('http-errors')
var morgan = require('morgan')
require('dotenv').config()
require('./helper/init.mongodb')
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const authorRouter = require('./router/author.router')
const bookRouter = require('./router/book.router')
const storeRouter = require('./router/store.router')
const enrollRouter = require('./router/enroll.router')

app.use('/author', authorRouter)
app.use('/book', bookRouter)
app.use('/store', storeRouter)
app.use('/enroll', enrollRouter)

app.use((req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  })
})

app.listen(port, () => console.log(`run on http://localhost:${port}`))
