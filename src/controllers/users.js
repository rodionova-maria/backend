const User = require('../models/user')

// Получим всех пользователей из БД
const getUsers = (req, res) => {
  User.find({})
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
}

// Получим пользователя по ID
const getUser = (req, res) => {
  const { user_id } = req.params
  User.findById(user_id)
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
}

// Создаем пользователя
const createUser = (req, res) => {
  const data = req.body
  User.create(data)
    .then((user) => {
      res.status(201).send(user)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
}

// Обновляем пользователя
const updateUser = (req, res) => {
  const { user_id } = req.params
  const data = req.body
  User.findByIdAndUpdate(user_id, data, { new: true, runValidators: true })
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
}

// Удаляем пользователя
const deleteUser = (req, res) => {
  const { user_id } = req.params
  User.findByIdAndDelete(user_id)
    .then((user) => {
      res.status(200).send('User deleted')
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
}

// Добавляем пользователю книгу
const addBookToUser = (req, res) => {
  const { user_id, book_id } = req.params
  User.findByIdAndUpdate(
    user_id,
    { $addToSet: { books: book_id } },
    { new: true, runValidators: true }
  )
    .then((user) => {
      res.status(200).send('Book added')
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
}

// Удаляем у пользователя книгу
const deleteBookFromUser = (req, res) => {
  const { user_id, book_id } = req.params
  User.findByIdAndUpdate(
    user_id,
    { $pullAll: { books: [{ _id: book_id }] } },
    { new: true, runValidators: true }
  )
    .then((user) => {
      res.status(200).send('Book deleted')
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addBookToUser,
  deleteBookFromUser
}
