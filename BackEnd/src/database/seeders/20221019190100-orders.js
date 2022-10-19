'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('orders', [
      {
        client_id: 1,
        method_id: 1,
        full_price: '350.50',
        installments: 3,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
      {
        client_id: 2,
        method_id: 2,
        full_price: '500.00',
        installments: 0,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
      {
        client_id: 3,
        method_id: 4,
        full_price: '754.10' ,
        installments: 2,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
