var express = require('express')
var router = express.Router()
var todo = require('../../controllers/todo')
var user = require('../../controllers/user')

// index route for users
router.get('/users', user.getUsers)
router.get('/user/:id', user.getUser)
router.post('/user', user.newUser)
router.put('/user/:id', user.updateUser)
router.delete('/user/:id', user.deleteUser)

// index route for todos
router.get('/todos', todo.getTodos)
router.get('/todo/:id', todo.getTodo)
router.post('/todo', todo.newTodo)
router.put('/todo/:id', todo.completeTodo)
router.delete('/todo/:id', todo.deleteTodo)

module.exports = router
