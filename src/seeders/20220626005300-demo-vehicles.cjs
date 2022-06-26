'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vehicles', [{
      licensePlate: 'ASX-478',
      typeId: 1
      }], {});
    await queryInterface.bulkInsert('Vehicles', [{
      licensePlate: 'BGE-321',
      typeId: 1
      }], {});
    await queryInterface.bulkInsert('Vehicles', [{
      licensePlate: 'YTQ-852',
      typeId: 2
      }], {});
    await queryInterface.bulkInsert('Vehicles', [{
      licensePlate: 'OUN-654',
      typeId: 2
      }], {});
    await queryInterface.bulkInsert('Vehicles', [{
      licensePlate: 'SSD-789',
      typeId: 3
      }], {});
    await queryInterface.bulkInsert('Vehicles', [{
      licensePlate: 'BCV-951',
      typeId: 3
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
