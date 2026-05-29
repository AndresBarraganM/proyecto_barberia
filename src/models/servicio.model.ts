import { prisma } from '../config/database'

export const ServicioModel = {
  findAll: () =>
    prisma.servicio.findMany({
      select: {
        Id_Servicio: true,
        Nombre_Servicio: true,
        Descripcion: true,
        Precio: true,
        Duracion: true,
      }
    })
}