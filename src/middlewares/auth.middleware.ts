import { Response, NextFunction } from 'express'
import { verifyToken, decodeToken } from '../utils/jwt'
import { sendError } from '../utils/response'
import { AuthRequest, DatabaseToken } from '../types'
import { encryptsha256 } from '../utils/crypt'
import { TokenModel } from '../models/token.model'

// Verifica el JWT del header Authorization: Bearer <token>
export async function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization

  if (!authHeader?.startsWith('Bearer ')) {
    sendError(res, 'Token no proporcionado', 401)
    return
  }

  // Extrae el token del header
  const token = authHeader.split(' ')[1]

  // Verifica que el token sea válido y no haya expirado
  try {
    verifyToken(token)
  } catch {
    sendError(res, 'Token inválido o expirado', 401)
    return
  }

  // Ver si esta expirado
  const decoded = decodeToken(token)
  if (decoded.exp && Date.now() >= decoded.exp * 1000) {
    sendError(res, 'Token expirado', 401)
    return
  }
  
  // transformar a sha256 el token para comparar con la base de datos
  const token_sha256 = encryptsha256(token);

  // Verificar con base de datos
  try {
    const data = await TokenModel.findValidToken(token_sha256)

    // Ver que existe y no este revocado
    if (!data || data.expired_at.getTime() <= Date.now()) {
      sendError(res, 'Token revocado o inexistente', 401)
      return
    }
  } catch {
    sendError(res, 'Error interno', 500)
    return
  }

  // si no, agregar al request el usuario y continuar
  req.user = decoded
  next()
}

// Middleware de autorización por rol
export const authorize =
  (...roles: Array<'cliente'| 'estilista'| 'recepcionista'| 'admin'>) =>
  (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      sendError(res, 'No tienes permisos para esta acción', 403)
      return
    }
    next()
  }
