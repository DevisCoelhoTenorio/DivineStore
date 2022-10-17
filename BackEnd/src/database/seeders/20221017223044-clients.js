'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('clients', [
      {
        name: 'Dulce',
        email: 'dulce@gmail.com',
        phone_number: '82991072293'
      },
      {
        name: 'Sâmia Coelho',
        email: 'samiacoelho@gmail.com',
        phone_number: '8299826610'
      },
      {
        name: 'Larissa',
        email: 'larissa@gmail.com',
        phone_number: '82991072293'
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
  }
};
