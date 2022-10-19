'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('inventories', {
      productId: {
        field: 'product_id',
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id',
        }
      },
      sizeId: {
        field: 'size_id',
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'sizes',
          key: 'id',
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      },
      createAt: {
        field: 'created_at',
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('inventories');
  }
};
