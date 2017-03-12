'use strict';
module.exports = function(sequelize, DataTypes) {
  var Memo = sequelize.define('Memo', {
    UserId: DataTypes.INTEGER,
    todo: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Memo.belongsTo(models.User)
      }
    }
  });
  return Memo;
};
