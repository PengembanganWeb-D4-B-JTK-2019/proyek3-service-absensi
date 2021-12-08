import Dosen from '../models/Dosen.js'
import sequelize from '../db.js'

// new Method From 19
export const getPresensiDosenTertentuWithMatkul = async (NIP) => {
  try {
    const result = await sequelize.query(`
    SELECT pengajar.nip,h_dosen."tanggal", h_dosen."isHadir",
    perkuliahan.id_mata_kuliah, matkul.nama_mata_kuliah 
    FROM "Pengajar" pengajar
    INNER JOIN "daftar_hadir_dosen" h_dosen ON pengajar.nip = h_dosen.nip
    INNER JOIN "Perkuliahan" perkuliahan ON pengajar.id_perkuliahan = perkuliahan.id
    INNER JOIN "Mata_Kuliah" matkul ON perkuliahan.id_mata_kuliah = matkul.id
    WHERE pengajar.nip = '${NIP}'
;
    `)
    return result[0]
  } catch (error) {
    return Promise.reject(error)
  }
}
/*
    CATATAN :
  1.File ini berisi seluruh function yang mengakses database
  untuk mendapatkan data yang berkaitan dengan dosen
*/

export const insertOneDosen = async (NIP, namaDosen, idJabatan) => {
  try {
    const dosen = await Dosen.create({
      nip: NIP,
      nama_dosen: namaDosen,
      id_jabatan: idJabatan
    })
    return dosen
  } catch (error) {
    console.log(error)
  }
}

export const findDosenByNIP = async (NIP) => {
  try {
    const dosen = await Dosen.findAll({
      where: {
        nip: NIP
      }
    })
    return dosen[0]
  } catch (error) {
    return Promise.reject(new Error('Find dosen by NIP gagal'))
  }
}

export const findAllDosen = async () => {
  try {
    const dosen = await Dosen.findAll()
    return dosen
  } catch (error) {
    return Promise.reject(new Error('Find all dosen gagal'))
  }
}

export const findDosenByJabatan = async (jabatanDosen) => {
  try {
    if (jabatanDosen === '') {
      jabatanDosen = null
      const dosenNoJabatan = await Dosen.findAll({
        where: {
          jabatan: null
        },
        order: [['nama_dosen', 'ASC']]
      })
      return dosenNoJabatan
    }
    const dosen = await Dosen.findAll({
      where: {
        jabatan: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('jabatan')),
          'LIKE',
          '%' + jabatanDosen.toLowerCase() + '%'
        )
      },
      order: [['nama_dosen', 'ASC']]
    })
    return dosen
  } catch (error) {
    return Promise.reject(new Error('Find dosen by jabatan gagal'))
  }
}

export const destroyDosenByNip = async (nip) => {
  try {
    const dosen = await Dosen.destroy({
      where: {
        nip
      }
    })
    return dosen
  } catch (error) {
    return Promise.reject(new Error('Delete dosen by NIP gagal'))
  }
}
