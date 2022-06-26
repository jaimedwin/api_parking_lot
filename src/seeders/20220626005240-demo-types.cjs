'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types', [{
      title: 'Oficial',
      costPerMinute: 0.00
      }], {});
    await queryInterface.bulkInsert('Types', [{
      title: 'Residente',
      costPerMinute: 0.02
      }], {});
    await queryInterface.bulkInsert('Types', [{
      title: 'No residente',
      costPerMinute: 0.20
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Types', null, {});
  }
};
