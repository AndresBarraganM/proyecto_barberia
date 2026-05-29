import { prisma } from '../config/database'
import bcrypt from 'bcryptjs'

export interface CreateUserData {
  Nombre: string
  Apellido: string
  Email: string
  telefono?:string
  Password: string
  Rol?: string
}

export interface UpdateUserData {
  Nombre?: string
  Email?: string
  telefono?: string
  Password?: string
}


export const UserModel = {
  findByEmail: (email: string) =>
    prisma.usuario.findUnique({ where: { Email: email },
    include:{Rol_Usuario_RolToRol: true} }),

  findById: (id: string) =>
    prisma.usuario.findUnique({
      where: { Id_usuario: id },
      select: { Id_usuario: true, Nombre: true, Apellido: true, Email: true,telefono: true, Rol: true, Fecha_de_registro: true },
    }),

  findAll: () =>
    (() => { throw new Error('Not implemented') })(),

  create: async (data: CreateUserData) => {
    const hashedPassword = await bcrypt.hash(data.Password, 12)
    return prisma.usuario.create({
      data: { ...data, Password: hashedPassword },
      select: { Id_usuario: true, Nombre: true, Apellido: true, Email: true, Rol: true },
    })
  },
  
  findRolByNombre: async (nombre: string): Promise<string | null> => {
  const rol = await prisma.rol.findFirst({
    where: { Rol: { equals: nombre, mode: 'insensitive' } },
    select: { id_rol: true }
  })
  return rol?.id_rol ?? null
},

  updateById: async (id: string, data: UpdateUserData) =>
  prisma.usuario.update({
    where: { Id_usuario: id },
    data,
    select: { Nombre: true, Email: true, telefono: true },
  }),

  delete: (id: string) =>
    (() => { throw new Error('Not implemented') })(),

  verifyPassword: (plain: string, hashed: string) =>
    bcrypt.compare(plain, hashed),

}