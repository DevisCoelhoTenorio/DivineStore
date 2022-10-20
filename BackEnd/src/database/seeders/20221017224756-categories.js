'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Short'
      },
      {
        name: 'Camisa'
      },
      {
        name: 'Calca'
      },
      {
        name: 'Saia'
      },
      {
        name: 'Vestido'
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
