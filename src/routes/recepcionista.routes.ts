import { Router } from 'express'
import { getServicios } from '../controllers/cliente.controller'
import { getHorarios } from '../controllers/recepcionista.controller'
import { authenticate } from '../middlewares/auth.middleware'

const router = Router()

router.use(authenticate)

router.get('/servicios', getServicios)
router.get('/horarios', getHorarios)

export default router