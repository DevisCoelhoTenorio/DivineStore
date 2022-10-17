'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'barbaratenorio@gmail.com',
        password: '12345',
        admin: true
      },
      {
        email: 'devistenorio@gmail.com',
        password: '12345',
      },
      {
        email: 'arthurcoelho@gmail.com',
        password: '12345'
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
   await queryInterface.bulkDelete('users', null, {});
  }
};
