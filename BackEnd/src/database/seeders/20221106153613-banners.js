'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('banners', [
      {
        id: 1,
        img: 'https://img.lojasrenner.com.br/banner/01-home/20221103_HOME_CARROSSEL_ALTOVERAO_BELEZADEVERAO_DESK_BELEZA.jpg',
        name: 'renner01'
      },
      {
        id: 2,
        img: 'https://img.lojasrenner.com.br/banner/01-home/20221103_HOME_CARROSSEL_ALTOVERAO_PECAUNICA_DESK_GERAL.jpg',
        name: 'renner02'
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('banners', null, {});
  }
};
