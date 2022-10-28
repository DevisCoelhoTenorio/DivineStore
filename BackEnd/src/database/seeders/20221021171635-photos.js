'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('photos', [
      {
        product_id: 1,
        img: 'https://photos.app.goo.gl/nPeioNBqPitmixgZ7',
        thumbnail: true
      },
      {
        product_id: 2,
        img: 'https://photos.app.goo.gl/UKX9Hzgc43qerHCv9',
        thumbnail: false
      },
      {
        product_id: 3,
        img: 'https://photos.app.goo.gl/1DhA3jfzo5V9sNKw9',
        thumbnail: false
      },
      {
        product_id: 1,
        img: 'https://photos.app.goo.gl/Y4U14EQkbgzSBE959',
        thumbnail: false
      },
      {
        product_id: 3,
        img: 'https://photos.app.goo.gl/orRvZ3XvukGXftep9',
        thumbnail: false
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('photos', null, {});
  }
};
