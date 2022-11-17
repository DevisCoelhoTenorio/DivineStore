'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('addresses', [
      {
        client_id: 1,
        city: 'Maceió',
        state: 'Alagoas',
        district: 'Jardim Petrópolis',
        locality: 'Cond. Aldebaran Ômega - Quadra G - Lote 15',
        number: null,
        cep: '87080548',
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now())
      },
      {
        client_id: 2,
        city: 'Maceió',
        state: 'Alagoas',
        district: 'Jardim Petrópolis',
        locality: 'Cond. Aldebaran Ômega - Quadra F - Lote 17',
        number: null,
        cep: '87080548',
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now())
      },
      {
        client_id: 3,
        city: 'Recife',
        state: 'Pernambuco',
        district: 'NaoSeiOnde',
        locality: 'Perto do outro lado de lá',
        number: 16,
        cep: '87080785',
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now())
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
