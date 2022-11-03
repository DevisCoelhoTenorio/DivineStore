'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'barbaratenorio@gmail.com',
        name: 'Bárbara Tenório',
        password: '1234567',
        admin: true
      },
      {
        email: 'devistenorio@gmail.com',
        name: 'Dêvis Coelho',
        password: '1234567',
      },
      {
        email: 'arthurcoelho@gmail.com',
        name: 'Arthur Coelho',
        password: '1234567'
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
   await queryInterface.bulkDelete('users', null, {});
  }
};
