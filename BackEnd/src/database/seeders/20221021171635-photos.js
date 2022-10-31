'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('photos', [
      {
        product_id: 1,
        img: 'https://drive.google.com/uc?export=view&id=1WECjLWrY9qVHqMiIKrvKGSWl-tSCwyRC',
        thumbnail: true
      },
      {
        product_id: 2,
        img: 'https://drive.google.com/uc?export=view&id=1MlI7Mb4x7SGBL8Q0o61sVPVJFEQaAjZp',
        thumbnail: false
      },
      {
        product_id: 3,
        img: 'https://drive.google.com/uc?export=view&id=1ip7YASxOiFDPwipWTP2rFg5M-KT668iC',
        thumbnail: false
      },
      {
        product_id: 1,
        img: 'https://drive.google.com/uc?export=view&id=1fRTKB3lOcSqz-G3GsINZziSGxwVjIMoK',
        thumbnail: false
      },
      {
        product_id: 3,
        img: 'https://drive.google.com/uc?export=view&id=1xBFaW8GWvbCJoxf0_ihCcfg4DU6YDwdL',
        thumbnail: false
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('photos', null, {});
  }
};
