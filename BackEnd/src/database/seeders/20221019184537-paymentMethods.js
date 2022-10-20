'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('paymentMethods', [
      {
        name: 'Pix'
      },
      {
        name: 'Cartão de Crédito'
      },
      {
        name: 'Cartão de Débito'
      },
      {
        name: 'Dinheiro'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('paymentMethods', null, {});
  }
};
