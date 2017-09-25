'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Cotisations', [{
        begin: new Date(2017, 9, 15),
        end: new Date(2018, 8, 31),
        createdAt: new Date(2017, 9, 25),
        updatedAt: new Date(2017, 9, 25),
        user: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cotisations', null, {});
  }
};
