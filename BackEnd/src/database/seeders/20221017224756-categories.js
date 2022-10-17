'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        category: 'Short'
      },
      {
        category: 'Camisa'
      },
      {
        category: 'Calca'
      },
      {
        category: 'Saia'
      },
      {
        category: 'Vestido'
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
