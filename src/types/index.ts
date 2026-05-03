import { Request } from 'express'

// Payload que se codifica dentro del JWT
export interface JwtPayload {
  userId: string
  email: string
  role: 'USER' | 'ADMIN'
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
