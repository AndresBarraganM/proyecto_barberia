<template>
  <div class="payment-container">
    <div class="payment-card">

      <div class="payment-icon">💳</div>

      <h1>Pagar Cita</h1>

      <p class="subtitle">
        Ingresa los datos de tu tarjeta
      </p>

      <!-- ERROR -->
      <div v-if="errorMessage" class="error-box">
        {{ errorMessage }}
      </div>

      <!-- DEMO INFO -->
      <div class="demo-box">
        <strong>Datos para simular pago:</strong>

        <p>Tarjeta: 4242 4242 4242 4242</p>
        <p>Fecha: 12/30</p>
        <p>CVV: 123</p>
      </div>

      <!-- NOMBRE -->
      <div class="input-group">
        <label>Nombre en tarjeta</label>
        <input v-model="nombre" type="text" placeholder="JUAN PEREZ" class="input" />
      </div>

      <!-- TARJETA -->
      <div class="input-group">
        <label>Número de tarjeta</label>
        <input
          v-model="tarjeta"
          type="text"
          maxlength="19"
          placeholder="1234 5678 9012 3456"
          class="input"
          @input="formatearTarjeta"
        />
      </div>

      <!-- FECHA + CVV -->
      <div class="row">
        <div class="input-group small-input">
          <label>Fecha</label>
          <input
            v-model="fecha"
            type="text"
            maxlength="5"
            placeholder="MM/AA"
            class="input"
            @input="formatearFecha"
          />
        </div>

        <div class="input-group small-input">
          <label>CVV</label>
          <input v-model="cvv" type="password" maxlength="3" placeholder="123" class="input" />
        </div>
      </div>

      <div class="secure-box">
        🔒 Tus datos están protegidos y encriptados
      </div>

      <button class="btn-pay" @click="pagar" :disabled="loading">
        {{ loading ? 'Procesando...' : 'Pagar' }}
      </button>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

/*
|--------------------------------------------------------------------------
| CONFIG
|--------------------------------------------------------------------------
*/
const API_URL = 'http://localhost:3000/api/pagos'

// CAMBIA ESTO cuando tengan backend listo
const USE_BACKEND = false

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/
const nombre = ref('')
const tarjeta = ref('')
const fecha = ref('')
const cvv = ref('')
const loading = ref(false)
const errorMessage = ref('')

/*
|--------------------------------------------------------------------------
| FORMATO
|--------------------------------------------------------------------------
*/
const formatearTarjeta = () => {
  tarjeta.value = tarjeta.value
    .replace(/\D/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim()
}

const formatearFecha = () => {
  fecha.value = fecha.value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d{0,2})/, '$1/$2')
}

/*
|--------------------------------------------------------------------------
| VALIDACIÓN
|--------------------------------------------------------------------------
*/
const validarFormulario = () => {
  errorMessage.value = ''

  if (!nombre.value.trim()) {
    errorMessage.value = 'Ingresa el nombre'
    return false
  }

  const tarjetaLimpia = tarjeta.value.replace(/\s/g, '')

  if (tarjetaLimpia.length !== 16) {
    errorMessage.value = 'Tarjeta inválida'
    return false
  }

  if (!/^\d{2}\/\d{2}$/.test(fecha.value)) {
    errorMessage.value = 'Fecha inválida'
    return false
  }

  if (!/^\d{3}$/.test(cvv.value)) {
    errorMessage.value = 'CVV inválido'
    return false
  }

  return true
}

/*
|--------------------------------------------------------------------------
| BACKEND REAL
|--------------------------------------------------------------------------
*/
const pagarBackend = async (payload) => {
  return await axios.post(API_URL, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

/*
|--------------------------------------------------------------------------
| LOCAL FALLBACK (sin backend)
|--------------------------------------------------------------------------
*/
const pagarLocal = async (payload) => {
  const tarjetaLimpia = payload.tarjeta.replace(/\s/g, '')

  if (tarjetaLimpia !== '4242424242424242') {
    const err = new Error('Tarjeta rechazada')
    err.status = 402
    throw err
  }

  return {
    data: {
      success: true,
      pagoId: Date.now(),
      message: 'Pago aprobado localmente'
    }
  }
}

/*
|--------------------------------------------------------------------------
| SELECTOR
|--------------------------------------------------------------------------
*/
const procesarPago = async (payload) => {
  if (USE_BACKEND) {
    return await pagarBackend(payload)
  }

  return await pagarLocal(payload)
}

/*
|--------------------------------------------------------------------------
| PAGAR
|--------------------------------------------------------------------------
*/
const pagar = async () => {
  if (!validarFormulario()) return

  loading.value = true

  try {
    const cita = JSON.parse(localStorage.getItem('citaPendiente'))

    if (!cita) {
      errorMessage.value = 'No hay cita pendiente'
      return
    }

    const response = await procesarPago({
      citaId: cita.id,
      nombre: nombre.value,
      tarjeta: tarjeta.value,
      fecha: fecha.value,
      cvv: cvv.value
    })

    const citasActuales = JSON.parse(localStorage.getItem('citas') || '[]')

    citasActuales.push({
      ...cita,
      estado: 'Confirmada',
      pagoId: response.data?.pagoId || null
    })

    localStorage.setItem('citas', JSON.stringify(citasActuales))
    localStorage.removeItem('citaPendiente')

    alert('Pago realizado correctamente')

    router.push('/cliente/citas')

  } catch (error) {
    if (error.status === 402) {
      errorMessage.value = 'Tarjeta rechazada'
    } else {
      errorMessage.value = error.message || 'Error al procesar pago'
    }
  } finally {
    loading.value = false
  }
}
</script>


<style scoped>

.payment-container {

  min-height: 100vh;

  display: flex;

  justify-content: center;

  align-items: center;

  background:
    linear-gradient(
      135deg,
      #f7edf7,
      #eef2ff
    );

  padding: 20px;

}

.payment-card {

  width: 420px;

  background: white;

  border-radius: 25px;

  padding: 35px;

  box-shadow:
    0 10px 30px
    rgba(0,0,0,0.08);

}

.payment-icon {

  width: 80px;

  height: 80px;

  border-radius: 50%;

  margin: auto;

  margin-bottom: 20px;

  background:
    linear-gradient(
      to right,
      #7b2ff7,
      #f107a3
    );

  display: flex;

  justify-content: center;

  align-items: center;

  color: white;

  font-size: 35px;

}

h1 {

  text-align: center;

  margin-bottom: 10px;

}

.subtitle {

  text-align: center;

  color: #777;

  margin-bottom: 25px;

}

/* DEMO */

.demo-box {

  background: #f5ebff;

  color: #7b2ff7;

  padding: 15px;

  border-radius: 12px;

  margin-bottom: 25px;

  font-size: 14px;

  line-height: 1.7;

}

/* INPUTS */

.input-group {

  margin-bottom: 20px;

}

label {

  display: block;

  margin-bottom: 8px;

  font-size: 14px;

  font-weight: bold;

}

.input {

  width: 100%;

  padding: 14px;

  border-radius: 12px;

  border: 1px solid #ddd;

  outline: none;

  transition: 0.3s;

  box-sizing: border-box;

}

.input:focus {

  border-color: #7b2ff7;

}

/* ROW */

.row {

  display: flex;

  gap: 20px;

  margin-top: 10px;

}

.small-input {

  flex: 1;

}

/* SECURE */

.secure-box {

  margin-top: 20px;

  background: #f3e8ff;

  padding: 15px;

  border-radius: 12px;

  color: #7b2ff7;

  text-align: center;

  font-size: 14px;

}

/* BUTTON */

.btn-pay {

  width: 100%;

  margin-top: 25px;

  border: none;

  padding: 16px;

  border-radius: 12px;

  background:
    linear-gradient(
      to right,
      #7b2ff7,
      #f107a3
    );

  color: white;

  font-size: 16px;

  cursor: pointer;

  transition: 0.3s;

}

.btn-pay:hover {

  transform: translateY(-2px);

}

.btn-pay:disabled {

  opacity: 0.7;

  cursor: not-allowed;

}

/* ERROR */

.error-box {

  background: #fee2e2;

  color: #dc2626;

  padding: 14px;

  border-radius: 12px;

  margin-bottom: 20px;

}

/* RESPONSIVE */

@media (max-width: 500px) {

  .payment-card {

    width: 100%;

    padding: 25px;

  }

  .row {

    flex-direction: column;

    gap: 5px;

  }

}

</style>