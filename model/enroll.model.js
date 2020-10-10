const mongoose = require('mongoose')
const schema = mongoose.Schema

const enrollSchema = new schema({
  store: {
    type: schema.Types.ObjectId,
    ref: 'store',
    required: true
  },
  book: {
    type: schema.Types.ObjectId,
    ref: 'book',
    required: true
  },
  createDate: {
    type: Date,
    default: Date.now
  }
})

const enrollModel = mongoose.model('enroll', enrollSchema)
module.exports = { enrollModel, enrollSchema }
