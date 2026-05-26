import { z } from 'zod'

// roles aceptados para usuarios
const roles = ['cliente', 'estilista', 'recepcionista', 'admin'] as const

export const userSchema = z.object({
  Nombre: z
    .string()
    .trim()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede superar los 50 caracteres'),

  Apellido: z
    .string()
    .trim()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede superar los 50 caracteres'),

  Email: z
    .email('Email inválido'),

  contrasena: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(50, 'La contraseña no puede superar los 50 caracteres')
    // un caracter especial, una mayúscula, una minúscula y un número
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*i\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
    ),

    role: z.enum(roles, {
      message: `El rol debe ser uno de los siguientes: ${roles.join(', ')}`,
    }),

  telefono: z
    .string()
    .trim()
    .min(10, 'El teléfono debe tener al menos 10 caracteres')
    .max(15, 'El teléfono no puede superar los 15 caracteres'),
})