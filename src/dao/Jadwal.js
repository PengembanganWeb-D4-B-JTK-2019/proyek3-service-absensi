import Jadwal from '../models/Jadwal'
import db from '../db'

export const findJadwalById = async (idJadwal) => {
  try {
    const jadwal = await Jadwal.findAll({
      where: {
        id_jadwal: idJadwal
      }
    })
    return jadwal
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findJadwalByHariAndNIP = async (hari, NIP) => {
  try {
    const jadwal = await Jadwal.findAll({
      where: {
        hari: hari,
        nip: NIP
      }
    })
    return jadwal
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findJadwalByHari = async (hari) => {
  try {
    const jadwal = await Jadwal.findAll({
      where: {
        hari: hari
      }
    })
    return jadwal
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getJadwalMhsHrTertentu = async (nim, hari) => {
  // Input : nim
  // output : jadwal kuliah mahasiswa hari tertentu

  try {
    const result = await db.query(`
    SELECT j.*, mk.nama_mata_kuliah, s.id AS id_studi, d.nama_dosen FROM "Mahasiswa" m
    INNER JOIN "Studi" s ON m.nim = s.id_mahasiswa
    INNER JOIN "Perkuliahan" p ON p.id = s.id_perkuliahan
    INNER JOIN "Jadwal" j ON j.id_perkuliahan = p.id
    INNER JOIN "Dosen" d ON d.nip = j.nip
    INNER JOIN "Mata_Kuliah" mk ON mk.id = p.id_mata_kuliah
    WHERE j.hari=${hari} AND m.nim='${nim}';
    `)

    const jadwalMap = new Map()
    const jadwals = result[0]
    console.log(jadwals)
    jadwals.forEach(jadwal => {

      // jadwal dianggap sama jika id_studi, hari, ja, dan jb nya sama
      const jadwalIdentifier = `${jadwal.id_studi}${jadwal.hari}${jadwal.ja}${jadwal.jb}`
      
      if (jadwalMap.has(jadwalIdentifier)) {
        // jadwal sudah tersimpan di map
        // tambahkan dosen yang mengajar
        const prettyJadwalUpdated = jadwalMap.get(jadwalIdentifier)
        prettyJadwalUpdated.dosens.push({
          nip: jadwal.nip,
          nama: jadwal.nama_dosen
        })
        jadwalMap.set(jadwalIdentifier, prettyJadwalUpdated)
      } else {
        // jadwal belum tersimpan di map
        const prettyJadwal = {
          id_jadwal: jadwal.id_jadwal,
          nama_mata_kuliah: jadwal.nama_mata_kuliah,
          ja: jadwal.ja,
          jb: jadwal.jb,
          waktu_mulai: jadwal.waktu_mulai,
          waktu_selesai: jadwal.waktu_selesai,
          batas_terakhir_absen: jadwal.batas_terakhir_absen,
          hari: jadwal.hari,
          jenis: jadwal.jenis,
          dosens: [
            {
              nip: jadwal.nip,
              nama: jadwal.nama_dosen
            }
          ],
          id_perkuliahan: jadwal.id_perkuliahan,
          id_studi: jadwal.id_studi
        }
        jadwalMap.set(jadwalIdentifier, prettyJadwal)
      }
    })
    console.log("MAP JADWAL", jadwalMap)
    const prettyJadwals = []
    for (const value of jadwalMap.values()) {
      prettyJadwals.push(value)
    }

    return prettyJadwals
  } catch (error) {
    return Promise.reject(error)
  }
}
