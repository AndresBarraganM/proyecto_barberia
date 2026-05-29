import { Router } from 'express'
import { getServicios, me, updateMe, getHistorial} from '../controllers/cliente.controller'
import { authenticate } from '../middlewares/auth.middleware'

const router = Router()

router.use(authenticate)
// GET /api/cliente/servicios
router.get('/servicios', getServicios)
// GET /api/cliente/me  
router.get('/me', authenticate, me)
// POST /api/cliente/me
router.put('/me', updateMe)
//POST /api/cliente/historial
router.get('/historial', getHistorial)
export default router