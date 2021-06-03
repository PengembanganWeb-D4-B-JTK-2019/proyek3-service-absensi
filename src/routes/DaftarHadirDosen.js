import express from 'express'
import * as DaftarHadirDosenController from '../controller/DaftarHadirDosen'

const router = express.Router()

router.put('/presensi-dosen', DaftarHadirDosenController.presensiDosenHandler)
// router.post('/buat-presensi-dosen', DaftarHadirDosenController.bikinDaftarHadirDosenHandler)
router.get('/nip-jadwal-tgl', DaftarHadirDosenController.getDaftarHadirNipJadwalTgl)

export default router
