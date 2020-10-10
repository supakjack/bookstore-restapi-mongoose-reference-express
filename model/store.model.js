const mongoose = require('mongoose')
const schema = mongoose.Schema

const storeSchema = new schema({
  name: {
    type: String,
    required: true
  },
  createDate: {
    type: Date,
    default: Date.now
  }
})

const storeModel = mongoose.model('store', storeSchema)
module.exports = { storeModel, storeSchema }
