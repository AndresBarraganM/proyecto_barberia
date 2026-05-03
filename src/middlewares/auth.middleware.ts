import { Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'
import { sendError } from '../utils/response'
import { AuthRequest } from '../types'

// Verifica el JWT del header Authorization: Bearer <token>
export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization

  if (!authHeader?.startsWith('Bearer ')) {
    sendError(res, 'Token no proporcionado', 401)
    return
  }

  const token = authHeader.split(' ')[1]

  try {
    req.user = verifyToken(token)
    next()
  } catch {
    sendError(res, 'Token inválido o expirado', 401)
  }
}

// Middleware de autorización por rol
export const authorize =
  (...roles: Array<'USER' | 'ADMIN'>) =>
  (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      sendError(res, 'No tienes permisos para esta acción', 403)
      return
    }
    next()
  }
