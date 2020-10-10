const createError = require('http-errors')
const { authorModel } = require('./../model/author.model')

module.exports = {
  get: async (req, res, next) => {
    try {
      const penName = req.query.penName
      const authorFind = await authorModel.find(
        penName ? { penName: { $regex: '.*' + penName + '.*' } } : {},'penName createDate'
      )
      res.send({ authorFind })
    } catch (error) {
      next(createError.InternalServerError())
    }
  },
  add: async (req, res, next) => {
    try {
      const author = new authorModel(req.body)
      const authorSave = await author.save()
      res.send({ authorSave })
    } catch (error) {
      next(createError.InternalServerError())
    }
  }
}
