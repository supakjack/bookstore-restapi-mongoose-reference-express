const createError = require('http-errors')
const { storeModel } = require('./../model/store.model')

module.exports = {
  get: async (req, res, next) => {
    try {
      const storeFind = await storeModel.find()
      res.send({ storeFind })
    } catch (error) {
      next(createError.InternalServerError())
    }
  },
  add: async (req, res, next) => {
    try {
      const store = new storeModel(req.body)
      const storeSave = await store.save()
      res.send({ storeSave })
    } catch (error) {
      next(createError.InternalServerError())
    }
  }
}
