import express from 'express'
import router from './routes'
import { errorHandler, notFound } from './middlewares/error.middleware'

const app = express()

// ── Middlewares globales ─────────────────────────────────────────────────────
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ── Rutas ────────────────────────────────────────────────────────────────────
app.use('/api', router)

// ── Manejo de errores ────────────────────────────────────────────────────────
app.use(notFound)
app.use(errorHandler)

export default app
