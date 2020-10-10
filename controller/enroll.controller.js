const createError = require('http-errors')
const { enrollModel } = require('./../model/enroll.model')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = {
  get: async (req, res, next) => {
    try {
      const enrollFind = await enrollModel.find().populate('book store')
      res.send({ enrollFind })
    } catch (error) {
      next(createError.InternalServerError())
    }
  },
  add: async (req, res, next) => {
    try {
      req.body.store = new ObjectId(req.body.store)
      req.body.book = new ObjectId(req.body.book)
      const enroll = new enrollModel(req.body)
      const enrollSave = await enroll.save()
      res.send({ enrollSave })
    } catch (error) {
      next(createError.InternalServerError())
    }
  }
}
