var user = {}
var Model = require('../models')

user.getUsers = (req, res, next) => {
  Model.User.findAll().then((data) => {
    res.send(data)
  })
}

user.getUser = (req, res, next) => {
  Model.User.find({where:{id:req.params.id}}).then((data) => {
    res.send(data)
  })
}

user.newUser = (req, res, next) => {
  Model.User.create({
    fullname: req.body.fullname,
    email: req.body.email
  }).then((data) => {
    res.send(data)
  })
}

user.updateUser = (req, res, next) => {
  Model.User.update({
    fullname: req.body.fullname,
    email: req.body.email
  }, {where:{id: req.params.id}}).then((data) => {
    res.send(data)
  })
}

user.deleteUser = (req, res, next) => {
  Model.User.destroy({where: {id: req.params.id}}).then((data) => {
    res.send(data)
  })
}

module.exports = user
