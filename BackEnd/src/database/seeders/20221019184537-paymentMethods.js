'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('paymentMethods', [
      {
        method: 'Pix'
      },
      {
        method: 'Cartão de Crédito'
      },
      {
        method: 'Cartão de Débito'
      },
      {
        method: 'Dinheiro'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('paymentMethods', null, {});
  }
};
