import { z } from 'zod'
import { userSchema } from './schemas/user.schema'

export const registerSchema = userSchema.pick({
  Nombre: true,
  Apellido: true,
  Email: true,
  contrasena: true,
  role: true,
})

export const loginSchema = userSchema.pick({
  Email: true,
  contrasena: true,
})

export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>