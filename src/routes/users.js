const router = require('express').Router()

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addBookToUser,
  deleteBookFromUser,
} = require('../controllers/users')

router.get('/', getUsers)
router.get('/:user_id', getUser)
router.post('/', createUser)
router.patch('/:user_id', updateUser)
router.delete('/:user_id', deleteUser)
router.post('/:user_id/books/:book_id', addBookToUser)
router.delete('/:user_id/books/:book_id', deleteBookFromUser)

module.exports = router
