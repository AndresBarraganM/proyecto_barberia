import { Response } from 'express'
import { UserModel } from '../models/user.model'
import { ServicioModel } from '../models/servicio.model'
import { AuthRequest } from '../types'
import { sendSuccess, sendError } from '../utils/response'

// -- GET api/cliente/servicios
export const getServicios = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const servicios = await ServicioModel.findAll()

    if (!servicios.length) {
      res.status(404).json({ message: 'No se encontraron servicios' })
      return
    }

    res.status(200).json({
      servicios: servicios.map(s => ({
        id: s.Id_Servicio,
        nombre: s.Nombre_Servicio,
        descripcion: s.Descripcion ?? '',
        precio: Number(s.Precio),
        duracion: s.Duracion ? new Date(s.Duracion).toISOString().substring(11, 16) : '',
        // no se guardan en la BD
        incluye: '',
        imagen: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200'
      }))
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error del servidor' })
  }
}

// -- GET api/cliente/me
export const me = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = await UserModel.findById(req.user!.sub)
    if (!user) {
      res.status(401).json({ message: 'Token inválido' })
      return
    }

    res.status(200).json({
      id: user.Id_usuario,
      nombre: `${user.Nombre} ${user.Apellido}`,
      email: user.Email,
      telefono: user.telefono ?? '',
      rol: 'cliente'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error del servidor' })
  }
}

//--POST api/client/me
export const updateMe = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { nombre, email, telefono, password } = req.body

    // Validaciones
    if (!nombre || nombre.trim().length < 3) {
      res.status(400).json({ message: 'Datos inválidos' })
      return
    }
    if (!email || !email.includes('@')) {
      res.status(400).json({ message: 'Datos inválidos' })
      return
    }
    if (!telefono || !/^\d{10}$/.test(telefono)) {
      res.status(400).json({ message: 'Datos inválidos' })
      return
    }
    if (password) {
      if (password.length < 8 || password.length > 15 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        res.status(400).json({ message: 'Datos inválidos' })
        return
      }
    }

    // email duplicado
    const existing = await UserModel.findByEmail(email)
    if (existing && existing.Id_usuario !== req.user!.sub) {
      res.status(409).json({ message: 'Correo ya registrado' })
      return
    }

    const updateData: any = {
      Nombre: nombre,
      Email: email,
      telefono,
    }

    if (password) {
      const bcrypt = await import('bcryptjs')
      updateData.Password = await bcrypt.hash(password, 12)
    }

    const updated = await UserModel.updateById(req.user!.sub, updateData)

    res.status(200).json({
      message: 'Perfil actualizado correctamente',
      usuario: {
        nombre: updated.Nombre,
        email: updated.Email,
        telefono: updated.telefono ?? '',
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error del servidor' })
  }
}