import { Request, Response } from 'express'
import { UserModel } from '../models/user.model'
import { TokenModel } from '../models/token.model'
import { signToken } from '../utils/jwt'
import { sendSuccess, sendError } from '../utils/response'
import { AuthRequest } from '../types'
import { createHash } from 'crypto';

// ── POST /api/auth/register ───────────────────────────────────────────────────
export const register = async (req: Request, res: Response): Promise<void> => {
  const { Nombre, Apellido, Email, contrasena, role } = req.body
  console.log(role)

  const existing = await UserModel.findByEmail(Email)
  if (existing) {
    res.status(401).json({ message: 'Correo o teléfono ya registrados' })
    return
  }

  // Buscar UUID del rol por nombre
  const rolId = await UserModel.findRolByNombre(role)
  if (!rolId) {
    res.status(400).json({ message: 'Formato inválido' })
    return
  }

  try {
    await UserModel.create({
      Nombre: Nombre,
      Apellido: Apellido,
      Email: Email,
      Password: contrasena,
      Rol: rolId,
    })
    res.status(201).json({ message: 'Cuenta creada correctamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error del servidor' })
  }
}

// ── POST /api/auth/login ──────────────────────────────────────────────────────
export const login = async (req: Request, res: Response): Promise<void> => {
  const { Email, contrasena } = req.body

  // Son correctos los datos?
  let user
  try {
    user = await UserModel.findByEmail(Email)
    if (!user) {
      sendError(res, 'Credenciales inválidas', 401)
      return
    }
    const isValid = await UserModel.verifyPassword(contrasena, user.Password)
    if (!isValid) {
      sendError(res, 'Credenciales inválidas', 401)
      return
    }
  } catch (error) {
    console.error('Error al buscar usuario:', error)
    sendError(res, 'Error interno', 500)
    return
  }

  // Generar token JWT
  const token = signToken({ 
    sub: user.Id_usuario, 
    email: user.Email, 
    role: 'cliente', 
    iat: Math.floor(Date.now() / 1000), 
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 
  })

  // Hashear token
  const hashedToken = createHash('sha256').update(token).digest('hex')

  // Guardar token en DB
  try {
    await TokenModel.create({ 
      id_usuario: user.Id_usuario, 
      token: hashedToken, 
      expired_at: new Date(Math.floor(Date.now() / 1000) + 60 * 60 * 24), 
      user_agent: req.get('User-Agent') || '', 
      ip_adress: req.ip || '' 
    })
  } catch (error) {
    console.error('Error al guardar token:', error)
    sendError(res, 'Error interno', 500)
    return
  }

  res.status(200).json({
    token,
    rol: user.Rol_Usuario_RolToRol?.Rol.toLowerCase() ?? 'cliente',
    usuario: {
      Id_usuario: user.Id_usuario,
      Nombre: user.Nombre,
      Apellido: user.Apellido,
      Email: user.Email,
      Rol: user.Rol_Usuario_RolToRol?.Rol.toLowerCase() ?? 'cliente',
    }
  })
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