<template>
  <div class="layout">

    <!-- SIDEBAR -->
    <MenuRecepcionista class="sidebar" />

    <!-- CONTENT -->
    <div class="content">

      <div class="payment-card">

        <div class="payment-icon">💳</div>

        <h1>Pago de cita (Recepción)</h1>

        <p class="subtitle">
          Registrar pago con tarjeta del cliente
        </p>

        <!-- ERROR -->
        <div v-if="errorMessage" class="error-box">
          {{ errorMessage }}
        </div>

        <!-- INFO CITA -->
        <div class="demo-box" v-if="cita">
          <strong>Resumen de cita</strong>

          <p>Servicio: {{ cita.servicio }}</p>
          <p>Fecha: {{ cita.fecha }}</p>
          <p>Hora: {{ cita.hora }}</p>
          <p>Estilista: {{ cita.estilista }}</p>
        </div>

        <!-- NOMBRE -->
        <div class="input-group">
          <label>Nombre en tarjeta</label>
          <input v-model="nombre" type="text" class="input" placeholder="JUAN PEREZ" />
        </div>

        <!-- TARJETA -->
        <div class="input-group">
          <label>Número de tarjeta</label>
          <input
            v-model="tarjeta"
            type="text"
            maxlength="19"
            class="input"
            placeholder="4242 4242 4242 4242"
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
              class="input"
              placeholder="MM/AA"
              @input="formatearFecha"
            />
          </div>

          <div class="input-group small-input">
            <label>CVV</label>
            <input v-model="cvv" type="password" maxlength="3" class="input" />
          </div>

        </div>

        <!-- SEGURIDAD -->
        <div class="secure-box">
          🔒 Pago registrado por recepción
        </div>

        <!-- BOTÓN -->
        <button class="btn-pay" @click="pagar" :disabled="loading">
          {{ loading ? 'Procesando...' : 'Registrar pago' }}
        </button>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import MenuRecepcionista from '../../components/MenuRecepcionista.vue'

const router = useRouter()

/* -----------------------------
   STATE
----------------------------- */
const nombre = ref('')
const tarjeta = ref('')
const fecha = ref('')
const cvv = ref('')
const loading = ref(false)
const errorMessage = ref('')
const cita = ref(null)

/* -----------------------------
   LOAD CITA
----------------------------- */
onMounted(() => {
  cita.value = JSON.parse(localStorage.getItem('citaRecepcion'))

  if (!cita.value) {
    errorMessage.value = 'No hay cita seleccionada'
  }
})

/* -----------------------------
   FORMATO
----------------------------- */
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

/* -----------------------------
   VALIDACIÓN
----------------------------- */
const validar = () => {
  errorMessage.value = ''

  if (!nombre.value)
    return (errorMessage.value = 'Nombre requerido', false)

  if (tarjeta.value.replace(/\s/g, '').length !== 16)
    return (errorMessage.value = 'Tarjeta inválida', false)

  if (!/^\d{2}\/\d{2}$/.test(fecha.value))
    return (errorMessage.value = 'Fecha inválida', false)

  if (!/^\d{3}$/.test(cvv.value))
    return (errorMessage.value = 'CVV inválido', false)

  return true
}

/* -----------------------------
   PAGAR
----------------------------- */
const pagar = async () => {
  if (!validar()) return

  loading.value = true

  try {
    const citas = JSON.parse(localStorage.getItem('citasRecepcion') || '[]')

    const nueva = {
      ...cita.value,
      pago: 'tarjeta',
      estado: 'Pagado',
      pagoConfirmadoPor: 'recepcion'
    }

    citas.push(nueva)

    localStorage.setItem('citasRecepcion', JSON.stringify(citas))
    localStorage.removeItem('citaRecepcion')

    alert('Pago registrado correctamente')

    router.push('/recepcionista/citas')

  } catch (e) {
    errorMessage.value = 'Error al registrar pago'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* -----------------------------
   LAYOUT GENERAL
----------------------------- */
.layout {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f7edf7, #eef2ff);
}

/* SIDEBAR */
.sidebar {
  width: 260px;
  flex-shrink: 0;
}

/* CONTENT */
.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

/* -----------------------------
   CARD
----------------------------- */
.payment-card {
  width: 420px;
  background: white;
  border-radius: 25px;
  padding: 35px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

/* ICON */
.payment-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 20px;
  background: linear-gradient(to right, #7b2ff7, #f107a3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 35px;
}

/* TEXTOS */
h1 {
  text-align: center;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  color: #777;
  margin-bottom: 25px;
}

/* DEMO BOX */
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
}

.small-input {
  flex: 1;
}

/* SECURITY */
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
  background: linear-gradient(to right, #7b2ff7, #f107a3);
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

/* -----------------------------
   RESPONSIVE
----------------------------- */
@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .content {
    align-items: flex-start;
    padding-top: 20px;
  }

  .payment-card {
    width: 100%;
    border-radius: 18px;
  }

  .row {
    flex-direction: column;
    gap: 10px;
  }
}
</style>