const router = require('express').Router()
const userRouter = require('./users')
const bookRouter = require('./books')
const notFoundRouter = require('./notFound')

const loggerOriginalUrl = require('../middlewares/loggerOriginalUrl')

router.use(loggerOriginalUrl)

router.use('/users', userRouter)
router.use('/books', bookRouter)
router.use('*', notFoundRouter)

module.exports = router
