const createError = require('http-errors')
const { bookModel } = require('./../model/book.model')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = {
  get: async (req, res, next) => {
    try {
      const bookFind = await bookModel
        .find({},'title name createDate')
        .populate('author','penName createDate')
      res.send({ bookFind })
    } catch (error) {
      next(createError.InternalServerError())
    }
  },
  add: async (req, res, next) => {
    try {
      req.body.author = new ObjectId(req.body.author)
      const book = new bookModel(req.body)
      const bookSave = await book.save()
      res.send({ bookSave })
    } catch (error) {
      next(createError.InternalServerError())
    }
  }
}
