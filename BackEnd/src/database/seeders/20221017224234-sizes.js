'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sizes', [
      {
        size: 'P'
      },
      {
        size: 'M'
      },
      {
        size: 'G'
      },
      {
        size: 'GG'
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sizes', null, {});
  }
};
