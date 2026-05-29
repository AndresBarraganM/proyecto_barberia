import { prisma } from '../config/database'

export const CitaModel = {
  findHistorialByCliente: (id_cliente: string) =>
    prisma.citas.findMany({
      where: {
        Id_cliente: id_cliente,
        Estado_cita: 2
      },
      select: {
        Id_cita: true,
        Fecha_cita: true,
        Hora_inicio: true,
        Servicio: true,
        Usuario_Citas_Id_estilistaToUsuario: {
          select: { Nombre: true, Apellido: true }
        }
      },
      orderBy: { Fecha_cita: 'desc' }
    })
}