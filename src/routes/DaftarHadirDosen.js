import express from 'express'
import * as DaftarHadirDosenController from '../controller/DaftarHadirDosen'

const router = express.Router()

router.put('/presensi-dosen', DaftarHadirDosenController.presensiDosenHandler)
// router.post('/buat-presensi-dosen', DaftarHadirDosenController.bikinDaftarHadirDosenHandler)
router.get('/nip-jadwal-tgl', DaftarHadirDosenController.getDaftarHadirNipJadwalTgl)
router.get('/persentase-mengajar-dosen', DaftarHadirDosenController.persentaseMengajarDosenHandler)
// New Method From 19
router.get('/presensi-dosen/:NIP', DaftarHadirDosenController.getRekapPresensiDosenTertentu)
router.put('/presensi-dosen/:NIP', DaftarHadirDosenController.updatePresensiDosenTertentu)
//
export default router
