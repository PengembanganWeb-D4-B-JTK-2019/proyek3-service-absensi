'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.sequelize.query(
      `INSERT INTO "Jadwal" (id_jadwal, ja, jb, waktu_mulai, waktu_selesai, batas_terakhir_absen, hari, jenis, nip, id_perkuliahan) VALUES
      (1,1,2,'07:00:00','07:50:00','07:30:00',1,'TE','196610181995121000',36),
      (2,2,8,'07:50:00','08:40:00','08:20:00',1,'PR','198903252019032000',36),
      (3,2,8,'07:50:00','13:50:00','08:20:00',1,'PR','198801292015041000',36),
      (4,1,2,'07:00:00','08:40:00','07:30:00',2,'TE','196009281994031000',10),
      (5,3,6,'08:40:00','11:30:00','09:10:00',2,'PR','196904041998031000',10),
      (6,3,6,'08:40:00','11:30:00','09:10:00',2,'PR','199209092019031000',10),
      (7,7,9,'13:00:00','14:40:00','13:30:00',2,'TE','197201061999031000',9),
      (8,9,12,'14:40:00','17:30:00','15:10:00',2,'PR','197201061999031000',9),
      (9,9,12,'14:40:00','17:30:00','15:10:00',2,'PR','197912242008121000',9),
      (10,7,10,'13:00:00','15:30:00','13:30:00',3,'PR','198906102019032000',11),
      (11,7,10,'13:00:00','15:30:00','13:30:00',3,'PR','196810141993032000',11),
      (12,1,4,'07:00:00','09:30:00','07:30:00',4,'TE','196111091993032000',37),
      (13,4,6,'09:50:00','11:30:00','10:20:00',4,'TE','196810141993032000',11),
      (14,3,4,'08:40:00','09:30:00','09:10:00',5,'TE','198903252019032000',12),
      (15,3,4,'08:40:00','09:30:00','09:10:00',5,'TE','196610181995121000',12),
      (16,3,4,'08:40:00','09:30:00','09:10:00',5,'TE','199112182019032000',12),
      (17,4,11,'09:50:00','16:40:00','09:10:00',5,'PR','198903252019032000',12),
      (18,4,11,'09:50:00','16:40:00','09:10:00',5,'PR','196610181995121000',12),
      (19,4,11,'09:50:00','16:40:00','09:10:00',5,'PR','199112182019032000',12);      
      ;`
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
