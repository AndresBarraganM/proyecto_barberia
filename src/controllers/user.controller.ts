import { Response } from 'express'
import { UserModel } from '../models/user.model'
import { sendSuccess, sendError } from '../utils/response'
import { AuthRequest } from '../types'

// ── GET /api/users  (Admin) ───────────────────────────────────────────────────
export const getAll = async (_req: AuthRequest, res: Response): Promise<void> => {
  const users = await UserModel.findAll()
  sendSuccess(res, users, `${users.length} usuarios encontrados`)
}

// ── GET /api/users/:id ────────────────────────────────────────────────────────
export const getById = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params

  // Un usuario solo puede ver su propio perfil, un admin puede ver cualquiera
  if (req.user?.role !== 'ADMIN' && req.user?.userId !== id) {
    sendError(res, 'No tienes permisos para ver este usuario', 403)
    return
  }

  const user = await UserModel.findById(id)
  if (!user) {
    sendError(res, 'Usuario no encontrado', 404)
    return
  }

  sendSuccess(res, user, 'Usuario obtenido')
}

// ── PATCH /api/users/:id ──────────────────────────────────────────────────────
export const update = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params

  if (req.user?.role !== 'ADMIN' && req.user?.userId !== id) {
    sendError(res, 'No tienes permisos para editar este usuario', 403)
    return
  }

  const user = await UserModel.update(id, req.body)
  sendSuccess(res, user, 'Usuario actualizado')
}

// ── DELETE /api/users/:id  (Admin) ────────────────────────────────────────────
export const remove = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params
  await UserModel.delete(id)
  sendSuccess(res, null, 'Usuario eliminado')
}
