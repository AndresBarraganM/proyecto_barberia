
import { Router } from 'express'
//import { getAll, getById, update, remove } from '../controllers/user.controller'
import { authenticate, authorize } from '../middlewares/auth.middleware'
import { validate } from '../middlewares/validate.middleware'
import { updateUserSchema } from '../validators/user.validator'

const router = Router()
/* 
// Todas las rutas de usuarios requieren autenticación
router.use(authenticate)

// GET /api/users  — solo Admin
router.get('/', authorize('ADMIN'), getAll)

// GET /api/users/:id
router.get('/:id', getById)

// PATCH /api/users/:id
router.patch('/:id', validate(updateUserSchema), update)

// DELETE /api/users/:id  — solo Admin
router.delete('/:id', authorize('ADMIN'), remove)
 */
export default router

