import { Router } from 'express'
import authRoutes from './auth.routes'
import recepcionistaRoutes from './recepcionista.routes'
import userRoutes from './user.routes'
import clienteRoutes from './cliente.routes'

const router = Router()

// Salud de la API
router.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/cliente', clienteRoutes)
router.use('/recepcionista', recepcionistaRoutes)

export default router
