'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING(50)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      phoneNumber: {
        field: 'phone_number',
        type: Sequelize.STRING,
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      createAt: {
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('clients');
  }
};
