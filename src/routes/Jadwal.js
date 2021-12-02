import express from 'express'
import * as JadwalController from '../controller/Jadwal'

const router = express.Router()

router.get('/dosen', JadwalController.getJadwalDosenHrTertentuHandler)
router.get('/mahasiswa', JadwalController.getJadwalMhsHrTertentuHandler)
router.get('/all', JadwalController.getAllJadwal)
// new router from 19
router.get('/get/:NIP/:hari', JadwalController.getJadwalDosenHariTertentu)
//
router.post('', JadwalController.postNewJadwal)

export default router
