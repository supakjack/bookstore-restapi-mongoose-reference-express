const mongoose = require('mongoose')
const schema = mongoose.Schema

const authorSchema = new schema({
  penName: {
    type: String,
    required: true
  },
  createDate: {
    type: Date,
    default: Date.now
  }
})

const authorModel = mongoose.model('author', authorSchema)
module.exports = { authorModel, authorSchema }
