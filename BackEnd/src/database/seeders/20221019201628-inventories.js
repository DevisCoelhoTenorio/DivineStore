'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('inventories', [
      {
        product_id: 1,
        size_id: 3,
        quantity: 0,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
      {
        product_id: 3,
        size_id: 1,
        quantity: 5,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
      {
        product_id: 2,
        size_id: 2,
        quantity: 30,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('inventories', null, {});
  }
};
