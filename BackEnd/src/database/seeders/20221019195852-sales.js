'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        order_id: 1,
        product_id: 2,
        quantity: 5,
        price: '100,50',
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
      {
        order_id: 2,
        product_id: 3,
        quantity: 10,
        price: '150,50',
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
      {
        order_id: 3,
        product_id: 1,
        quantity: 3,
        price: '160,50',
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
      {
        order_id: 1,
        product_id: 3,
        quantity: 10,
        price: '150,50',
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
