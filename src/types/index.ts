import { Request } from 'express'

// Payload que se codifica dentro del JWT
export interface JwtPayload {
  sub: string
  email: string
  role: 'cliente'| 'estilista'| 'recepcionista'| 'admin'
  iat: number
  exp: number
}

// Extiende Request de Express para incluir el usuario autenticado
export interface AuthRequest extends Request {
  user?: JwtPayload
}

// Respuesta estándar de la API
export interface ApiResponse<T = unknown> {
  success: boolean
  message: string
  data?: T
  errors?: string[]
}

// Estructura de un token recuperado de la base de datos
export interface DatabaseToken {
  user_id: string
  ip_address: string
  user_agent: string
  revoked_at: number
}
