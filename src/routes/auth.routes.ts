import { Router } from 'express'
import { register, login, me } from '../controllers/auth.controller'
import { validate } from '../middlewares/validate.middleware'
import { authenticate } from '../middlewares/auth.middleware'
import { registerSchema, loginSchema } from '../validators/auth.validator'

const router = Router()

// POST /api/auth/register
router.post('/register', validate(registerSchema), register)

// POST /api/auth/login
router.post('/login', validate(loginSchema), login)

// GET /api/auth/me  — requiere autenticación
router.get('/me', authenticate, me)

export default router
