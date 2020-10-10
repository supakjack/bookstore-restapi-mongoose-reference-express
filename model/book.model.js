const mongoose = require('mongoose')
const schema = mongoose.Schema

const bookSchema = new schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  createDate: {
    type: Date,
    default: Date.now
  },
  author: {
    type: schema.Types.ObjectId,
    ref: 'author',
    required: true
  }
})

const bookModel = mongoose.model('book', bookSchema)
module.exports = { bookModel, bookSchema }
