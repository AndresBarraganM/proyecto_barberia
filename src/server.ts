import { env } from './config/env'
import app from './app'
import { prisma } from './config/database'

const start = async (): Promise<void> => {
  try {
    // Verifica conexión con la base de datos
    await prisma.$connect()
    console.log('✅ Base de datos conectada')

    app.listen(env.PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${env.PORT}`)
      console.log(`📋 Entorno: ${env.NODE_ENV}`)
    })
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error)
    await prisma.$disconnect()
    process.exit(1)
  }
}

// Cierre limpio
process.on('SIGINT', async () => {
  await prisma.$disconnect()
  console.log('🛑 Servidor detenido')
  process.exit(0)
})

start()
