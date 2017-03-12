var todo = {}
var Model = require('../models')

todo.getTodos = (req, res, next) => {
  Model.Memo.findAll({include:[{model: Model.User}]}).then((data) => {
    res.send(data)
  })
}

todo.getTodo = (req, res, next) => {
  Model.Memo.find({where:{id:req.params.id}}).then((data) => {
    res.send(data)
  })
}

todo.newTodo = (req, res, next) => {
  Model.Memo.create({
    todo: req.body.todo,
    status: 0
  }).then((data) => {
    res.send(data)
  })
}

todo.completeTodo = (req, res, next) => {
  Model.Memo.update({
    status: req.body.status
  }, {where:{id: req.params.id}}).then((data) => {
    res.send(data)
  })
}

todo.deleteTodo = (req, res, next) => {
  Model.Memo.destroy({where: {id: req.params.id}}).then((data) => {
    res.send(data)
  })
}

module.exports = todo
