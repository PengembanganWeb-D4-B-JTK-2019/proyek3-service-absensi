import db from '../db'

export const insertOne = async (materi, kegiatan, minggu, bukti, jumlahMhsHadir, jumlahMhsTdkHadir, tanggal, nip, idPerkuliahan) => {
  try {
    const result = await db.query(`
    INSERT INTO "Bap" (materi, kegiatan, minggu, bukti, jumlah_mhs_hadir, jumlah_mhs_tidak_hadir, tanggal, nip, id_jadwal) VALUES ('${materi}', '${kegiatan}', ${minggu}, '${bukti}', ${jumlahMhsHadir}, ${jumlahMhsTdkHadir}, '${tanggal}', '${nip}', ${idPerkuliahan}) RETURNING *
    `)
    const rows = result[0]
    return rows
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findOne = async (idJadwal, tanggal) => {
  try {
    const result = await db.query(
      `SELECT * FROM "Bap" bap
      INNER JOIN "Jadwal" j ON j.id_jadwal = bap.id_jadwal
      WHERE j.id_jadwal = ${idJadwal} AND bap.tanggal = '${tanggal}';`
    )
    const row = result[0]
    return row
  } catch (error) {
    return Promise.reject(error)
  }
}

// New Method From '19

export const getBAPOne = async (id_bap) => {
  try {
    const result = await db.query(
      `SELECT * FROM "Bap" WHERE "id_BAP" = ${id_bap};`
    )
    const row = result[0]
    return row
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateBAPOne = async (id_bap, materi, kegiatan, bukti) => {
  try {
    const result = await db.query(
      `
      UPDATE "Bap" 
      SET "materi" = '${materi}', "kegiatan" = '${kegiatan}', "bukti" = '${bukti}'
      WHERE "id_BAP" = ${id_bap}; 
      `
    )
    const row = result[0]
    return row
  } catch (error) {
    return Promise.reject(error)
  }
}

export const delBAPOne = async (id_bap) => {
  try {
    const result = await db.query(
      `DELETE FROM "Bap" WHERE "id_BAP" = ${id_bap};`
    )
    const row = result[0]
    return row
  } catch (error) {
    return Promise.reject(error)
  }
}

// End of Line New Method From '19