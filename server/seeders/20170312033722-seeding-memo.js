'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {})
    */
    var newArr = [
      { UserId: 2, todo: 'Meet-Up Node.js', status: 0, createdAt: new Date(), updatedAt: new Date()},
      {UserId: 3, todo: 'Speaking REACT in MeetUp', status: 0, createdAt: new Date(), updatedAt: new Date()},
      {UserId: 4, todo: 'Discussion with other CTOs', status: 0, createdAt: new Date(), updatedAt: new Date()}
    ]

    return queryInterface.bulkInsert('Memos', newArr)
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {})
    */
  }
}
