import express from 'express'
import * as BapController from '../controller/Bap'

const router = express.Router()

router.get('/data-bap', BapController.getDataBAP)
router.post('/upload', BapController.uploadBAP)
router.get('/find-bap', BapController.findBap)

// New Method From '19

router.get('/get/:id_bap', BapController.getBap)
// http://localhost:5001/api/bap/get/1

router.put('/update/:id_bap', BapController.updateBap)
// http://localhost:5001/api/bap/update/1

router.post('/new', BapController.createBap)
// http://localhost:5001/api/bap/new

router.delete('/delete/:id_bap', BapController.deleteBap)
// http://localhost:5001/api/bap/delete/1

// End of Line New Method From '19

export default router