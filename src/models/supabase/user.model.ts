import { prisma } from '../../config/database'
import bcrypt from 'bcryptjs'

/*

// CODIGO DE EJEMPLO
// ELIMINAR Y ALTERAR POR UNO QUE FUNCIONE EN CONJUNTO CON UNA BASE DE DATOS
// EN SUPABASE, YA QUE ESTE CODIGO ESTA DISEÑADO PARA POSTGRESQL CON PRISMA

*/

// ── Tipos ────────────────────────────────────────────────────────────────────

export interface CreateUserData {
  name: string
  email: string
  password: string
}

export interface UpdateUserData {
  name?: string
  email?: string
}

// ── Modelo ───────────────────────────────────────────────────────────────────

export const UserModel = {
  // Busca un usuario por email (para login)
  findByEmail: (email: string) =>
    prisma.user.findUnique({ where: { email } }),

  // Busca un usuario por ID (sin exponer la contraseña)
  findById: (id: string) =>
    prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    }),

  // Lista todos los usuarios (solo para admins)
  findAll: () =>
    prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    }),

  // Crea un usuario hasheando la contraseña
  create: async (data: CreateUserData) => {
    const hashedPassword = await bcrypt.hash(data.password, 12)
    return prisma.user.create({
      data: { ...data, password: hashedPassword },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    })
  },

  // Actualiza un usuario
  update: (id: string, data: UpdateUserData) =>
    prisma.user.update({
      where: { id },
      data,
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    }),

  // Elimina un usuario
  delete: (id: string) => prisma.user.delete({ where: { id } }),

  // Verifica si la contraseña es correcta
  verifyPassword: (plain: string, hashed: string) =>
    bcrypt.compare(plain, hashed),
}
