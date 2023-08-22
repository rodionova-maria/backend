const router = require('express').Router()
const notFound = require('../controllers/notFound')

router.get('*', notFound)
router.post('*', notFound)
router.patch('*', notFound)
router.delete('*', notFound)

module.exports = router
