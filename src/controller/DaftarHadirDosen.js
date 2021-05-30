import * as DosenService from '../services/Dosen'

export const presensiMhsHandler = async (req, res, next) => {
  const { nip, idStudi } = req.query
  try {
    const result = await DosenService.melakukanAbsensi(nip, idStudi)
    res.json({
      message: `Mengisi presensi dengan NIP ${nip} dan idStudi ${idStudi}`,
      data: {
        presensi: result
      }
    })
  } catch (error) {
    next(error)
  }
}