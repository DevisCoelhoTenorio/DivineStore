'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sizes', [
      {
        name: 'P'
      },
      {
        name: 'M'
      },
      {
        name: 'G'
      },
      {
        name: 'GG'
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sizes', null, {});
  }
};
