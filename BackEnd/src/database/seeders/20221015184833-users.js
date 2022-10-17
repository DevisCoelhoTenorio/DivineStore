'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'barbaratenorio@gmail.com',
        password: '12345',
        admin: true
      },
      {
        email: 'devistenorio@gmail.com',
        password: '12345',
        admin: false
      },
      {
        email: 'arthurcoelho@gmail.com',
        password: '12345',
        admin: false
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {});
  }
};
