import { Router } from 'express'
import { getServicios, me, updateMe } from '../controllers/cliente.controller'
import { authenticate } from '../middlewares/auth.middleware'

const router = Router()

router.use(authenticate)
// GET /api/cliente/servicios
router.get('/servicios', getServicios)
// GET /api/cliente/me  
router.get('/me', authenticate, me)
// POST /api/cliente/me
router.put('/me', updateMe)
export default router