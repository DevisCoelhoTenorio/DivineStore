'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Vestido de noiva',
        price: '600,45',
        description: 'Longo com manga grande',
        category_id: 3,
        promotion: 10,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
      {
        name: 'Blusa Verão',
        price: '140,45',
        category_id: 1,
        promotion: 0,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
      {
        name: 'Calça Moletom',
        price: '200,45',
        description: 'Puro Moletom',
        promotion: 0,
        category_id: 2,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
