import { Request, Response } from 'express'
import { UserModel } from '../models/user.model'
import { signToken } from '../utils/jwt'
import { sendSuccess, sendError } from '../utils/response'
import { AuthRequest } from '../types'

// ── POST /api/auth/register ───────────────────────────────────────────────────
export const register = async (req: Request, res: Response): Promise<void> => {
  const { Nombre, Apellido, Email, contrasena, Rol } = req.body

  const existing = await UserModel.findByEmail(Email)
  if (existing) {
    sendError(res, 'El email ya está registrado', 409)
    return
  }

  const user = await UserModel.create({ Nombre, Apellido, Email, Password: contrasena, Rol })
  const token = signToken({ sub: user.Id_usuario, email: user.Email, role: 'cliente' })
  sendSuccess(res, { user, token }, 'Usuario registrado correctamente', 201)
}

// ── POST /api/auth/login ──────────────────────────────────────────────────────
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, contrasena } = req.body

  const user = await UserModel.findByEmail(email)
  if (!user) {
    sendError(res, 'Credenciales inválidas', 401)
    return
  }

  const isValid = await UserModel.verifyPassword(contrasena, user.Password)
  if (!isValid) {
    sendError(res, 'Credenciales inválidas', 401)
    return
  }

  const token = signToken({ sub: user.Id_usuario, email: user.Email, role: 'cliente' })
  const { Password: _, ...safeUser } = user
  sendSuccess(res, { user: safeUser, token }, 'Login exitoso')
}

// ── GET /api/auth/me ──────────────────────────────────────────────────────────
export const me = async (req: AuthRequest, res: Response): Promise<void> => {
  const user = await UserModel.findById(req.user!.sub)
  if (!user) {
    sendError(res, 'Usuario no encontrado', 404)
    return
  }
  sendSuccess(res, user, 'Perfil obtenido')
}