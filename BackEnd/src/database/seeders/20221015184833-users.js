'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'barbaratenorio@gmail.com',
        password: '12345'
      },
      {
        email: 'devistenorio@gmail.com',
        password: '12345'
      },
      {
        email: 'arthurcoelho@gmail.com',
        password: '12345'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {});
  }
};
