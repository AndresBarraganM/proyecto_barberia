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
  findByEmail: (Email: string) =>
    prisma.usuario.findUnique({ where: { Email } }),

  // Busca un usuario por ID (sin exponer la contraseña)
  findById: (id: string) =>
    prisma.usuario.findUnique({
      where: { Id_usuario: id },
      select: { Id_usuario: true, Nombre: true, Apellido: true, Email: true, Rol: true, Fecha_de_registro: true },
    }),

  // Lista todos los usuarios (solo para admins)
  findAll: () =>
    prisma.usuario.findMany({
      select: { id: true, name: true, email: true, role: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    }),

  // Crea un usuario hasheando la contraseña
  create: async (data: CreateUserData) => {
    const hashedPassword = await bcrypt.hash(data.password, 12)
    return prisma.usuario.create({
      data: { ...data, password: hashedPassword },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    })
  },

  // Actualiza un usuario
  update: (id: string, data: UpdateUserData) =>
    prisma.usuario.update({
      where: { id },
      data,
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    }),

  // Elimina un usuario
  delete: (id: string) => prisma.usuario.delete({ where: { id } }),

  // Verifica si la contraseña es correcta
  verifyPassword: (plain: string, hashed: string) =>
    bcrypt.compare(plain, hashed),
}
