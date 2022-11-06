'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('banners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      img: {
        allowNull: false,
        type: Sequelize.STRING(300),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(150)
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('banners');
  }
};
