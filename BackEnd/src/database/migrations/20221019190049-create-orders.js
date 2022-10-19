'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientId: {
        field: 'client_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'clients',
          key: 'id',
        }
      },
      methodId: {
        field: 'method_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'paymentMethods',
          key: 'id',
        }
      },
      fullPrice: {
        field: 'full_price',
        allowNull: false,
        type: Sequelize.STRING,
      },
      installments: {
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
    await queryInterface.dropTable('orders');
  }
};
