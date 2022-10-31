'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        field: 'product_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id',
        }
      },
      img: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      thumbnail: {
        default: false,
        type: Sequelize.BOOLEAN
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('photos');
  }
};
