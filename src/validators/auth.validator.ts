import { z } from 'zod'
import { userSchema } from './schemas/user.schema'

export const registerSchema = userSchema.pick({
  name: true,
  email: true,
  contrasena: true,
  role: true,
})

export const loginSchema = userSchema.pick({
  email: true,
  contrasena: true,
})

export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>