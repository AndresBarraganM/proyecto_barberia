import { Request, Response, NextFunction } from 'express'
import { ZodSchema, ZodError } from 'zod'
import { sendError } from '../utils/response'

// Middleware genérico que valida req.body contra cualquier schema de Zod
export const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      // si se recibio un body pero no es un objeto, lanzar error de validacion
      if (!req.body || typeof req.body !== 'object') {
        throw new Error('El cuerpo de la solicitud debe ser un objeto JSON')
      }
      console.log(req.body)
      req.body = schema.parse(req.body)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const messages = error.issues.map((e) => `${e.path.join('.')}: ${e.message}`)
        sendError(res, 'Error de validación', 400, messages)
        return
      }
      if (error instanceof Error) {
        sendError(res, 'Error de validación', 400, [error.message])
        return
      }
      next(error)
    }
  }
