import { Request, Response, NextFunction } from 'express'
import { sendError } from '../utils/response'
import { env } from '../config/env'

// Manejador global de errores — debe ir al final de todos los middlewares
export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('[Error]', err.message)

  const message =
    env.NODE_ENV === 'production' ? 'Error interno del servidor' : err.message

  sendError(res, message, 500)
}

// Manejador para rutas no encontradas
export const notFound = (_req: Request, res: Response): void => {
  sendError(res, 'Ruta no encontrada', 404)
}
