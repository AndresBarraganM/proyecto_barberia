import { prisma } from '../config/database'

export const CitaModel = {
  findProximasByCliente: (id_cliente: string) =>
    prisma.citas.findMany({
      where: {
        Id_cliente: id_cliente,
        Estado_cita: 1,
      },
      select: {
        Id_cita: true,
        Fecha_cita: true,
        Hora_inicio: true,
        Servicio: {
          select: { Nombre_Servicio: true }
        },
        Usuario_Citas_Id_estilistaToUsuario: {
          select: { Nombre: true, Apellido: true }
        }
      },
      orderBy: { Fecha_cita: 'asc' }
    }),

  findHistorialByCliente: (id_cliente: string) =>
    prisma.citas.findMany({
      where: {
        Id_cliente: id_cliente,
        Estado_cita: 2,
      },
      select: {
        Id_cita: true,
        Fecha_cita: true,
        Hora_inicio: true,
        Servicio: {
          select: { Nombre_Servicio: true, Precio: true, Descripcion: true }
        },
        Usuario_Citas_Id_estilistaToUsuario: {
          select: { Nombre: true, Apellido: true }
        }
      },
      orderBy: { Fecha_cita: 'desc' }
    }),
  findById: (id_cita: number, id_cliente: string) =>
    prisma.citas.findFirst({
      where: { Id_cita: id_cita, Id_cliente: id_cliente }
    }),
  findByFecha: (fecha: string) =>
    prisma.citas.findMany({
      where: {
        Fecha_cita: new Date(fecha),
        Estado_cita: 1 // Pendiente
      },
      select: { Hora_inicio: true }
    }),

  cancelar: (id_cita: number) =>
    prisma.citas.update({
      where: { Id_cita: id_cita },
      data: { Estado_cita: 3 } // Cancelada
    }),
}