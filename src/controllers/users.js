const User = require('../models/user')

const getUsers = (req, res) => {
  // Get all users
}

const getUser = (req, res) => {
  const { user_id } = req.params
  res.status(200)
  res.send(`User with id: ${user_id}`)
}

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

const updateUser = (req, res) => {
  // Delete user
}

const deleteUser = (req, res) => {
  // Delete user
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
