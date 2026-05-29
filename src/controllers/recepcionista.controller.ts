import { Request, Response } from 'express'
import { CitaModel } from '../models/cita.model'
import { AuthRequest } from '../types'
import { EstilistaModel } from '../models/estilista.model'


const generarSlots = (): string[] => {
  const slots = []
  let hora = 9
  let minutos = 0

  while (hora < 16) {
    const h = hora % 12 === 0 ? 12 : hora % 12
    const m = minutos === 0 ? '00' : '30'
    const periodo = hora < 12 ? 'AM' : 'PM'
    slots.push(`${String(h).padStart(2, '0')}:${m} ${periodo}`)
    minutos += 30
    if (minutos === 60) {
      minutos = 0
      hora++
    }
  }

  return slots
}
// -- GET api/recepcionista/horarios
export const getHorarios = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { fecha } = req.query

    if (!fecha) {
      res.status(400).json({ message: 'Fecha requerida' })
      return
    }

    const citas = await CitaModel.findByFecha(fecha as string)

    const ocupadas = new Set(
      citas.map(c => {
        const d = new Date(c.Hora_inicio)
        const h = d.getUTCHours() % 12 === 0 ? 12 : d.getUTCHours() % 12
        const m = d.getUTCMinutes() === 0 ? '00' : '30'
        const periodo = d.getUTCHours() < 12 ? 'AM' : 'PM'
        return `${String(h).padStart(2, '0')}:${m} ${periodo}`
      })
    )

    const horas = generarSlots().filter(slot => !ocupadas.has(slot))

    res.status(200).json({ horas })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error del servidor' })
  }
}

// -- GET api/recepcionista/estilistas
