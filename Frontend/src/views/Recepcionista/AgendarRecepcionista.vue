<template>
  <div class="page-container">

    <MenuRecepcionista />

    <main class="content">

      <div class="header">
        <div>
          <h1>Agendar cita (Recepción)</h1>
          <p class="subtitle">Selecciona datos del servicio</p>
        </div>
      </div>

      <!-- ERROR -->
      <div v-if="errorMessage" class="error-box">
        {{ errorMessage }}
      </div>

      <!-- SERVICIO -->
      <div class="service-detail-card">
        <h3>Servicio</h3>
        <p>{{ servicio.descripcion }}</p>
      </div>

      <div class="agendar-grid">

        <!-- FECHA -->
        <div class="card">
          <h3>Fecha</h3>

          <input v-model="fecha" type="date" class="input" :min="fechaMinima" />
        </div>

        <!-- HORA -->
        <div class="card">
          <h3>Hora</h3>

          <div v-for="hora in horas" :key="hora"
            :class="['hour-item', { active: horaSeleccionada === hora }]"
            @click="horaSeleccionada = hora">

            {{ hora }}

          </div>
        </div>

        <!-- ESTILISTA -->
        <div class="card">
          <h3>Estilista</h3>

          <div v-for="e in estilistas" :key="e.id"
            :class="['stylist-item', { active: estilistaSeleccionado?.id === e.id }]"
            @click="estilistaSeleccionado = e">

            <div class="stylist-avatar">👤</div>

            <div>
              <strong>{{ e.nombre }}</strong>
              <p>{{ e.especialidad }}</p>
            </div>

          </div>
        </div>

      </div>

      <!-- BOTÓN -->
      <div class="button-container">
        <button class="btn-primary" @click="abrirConfirmacion">
          Agendar cita
        </button>
      </div>

    </main>

    <!-- MODAL CONFIRMACIÓN -->
    <div v-if="mostrarModal" class="modal-overlay">
      <div class="modal">
        <h2>Confirmar cita</h2>
        <p>¿Deseas continuar?</p>

        <div class="modal-buttons">
          <button class="btn-cancel" @click="mostrarModal = false">Cancelar</button>
          <button class="btn-confirm" @click="confirmarCita">Sí</button>
        </div>
      </div>
    </div>

    <!-- MODAL PAGO -->
    <div v-if="mostrarPago" class="modal-overlay">
      <div class="modal">

        <h2>Método de pago</h2>

        <p>Selecciona cómo se pagará la cita</p>

        <div class="payment-options">

          <button class="btn-option" @click="pagoEfectivo">
            💵 Efectivo
          </button>

          <button class="btn-option" @click="pagoTarjeta">
            💳 Tarjeta
          </button>

        </div>

      </div>
    </div>

    <!-- MODAL EFECTIVO -->
    <div v-if="mostrarEfectivo" class="modal-overlay">
      <div class="modal">

        <h2>Pago en efectivo</h2>
        <p>Marca la cita como pagada cuando recibas el dinero.</p>

        <button class="btn-confirm" @click="confirmarEfectivo">
          Marcar como pagado
        </button>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MenuRecepcionista from '../../components/MenuRecepcionista.vue'

const router = useRouter()

const errorMessage = ref('')
const mostrarModal = ref(false)
const mostrarPago = ref(false)
const mostrarEfectivo = ref(false)

const fecha = ref('')
const horaSeleccionada = ref('')
const estilistaSeleccionado = ref(null)

const servicio = ref({
  id: 1,
  nombre: 'Corte clásico',
  descripcion: 'Corte profesional con acabado premium'
})

const horas = ref(['09:00 AM','10:00 AM','11:00 AM','12:00 PM'])

const estilistas = ref([
  { id: 1, nombre: 'Carlos', especialidad: 'Cortes' },
  { id: 2, nombre: 'María', especialidad: 'Color' }
])

const fechaMinima = new Date().toISOString().split('T')[0]

const validar = () => {
  errorMessage.value = ''

  if (!fecha.value) return errorMessage.value = 'Selecciona fecha', false
  if (!horaSeleccionada.value) return errorMessage.value = 'Selecciona hora', false
  if (!estilistaSeleccionado.value) return errorMessage.value = 'Selecciona estilista', false

  return true
}

/*
  FLUJO
*/
const abrirConfirmacion = () => {
  if (!validar()) return
  mostrarModal.value = true
}

const confirmarCita = () => {
  mostrarModal.value = false
  mostrarPago.value = true
}

/*
  PAGO EFECTIVO
*/
const pagoEfectivo = () => {
  mostrarPago.value = false
  mostrarEfectivo.value = true
}

const confirmarEfectivo = () => {

  const cita = {
    id: Date.now(),
    servicio: servicio.value.nombre,
    fecha: fecha.value,
    hora: horaSeleccionada.value,
    estilista: estilistaSeleccionado.value.nombre,
    pago: 'efectivo',
    estado: 'Pagado'
  }

  localStorage.setItem('citaRecepcion', JSON.stringify(cita))

  router.push('/recepcionista/citas')
}

/*
  PAGO TARJETA
*/
const pagoTarjeta = () => {

  const cita = {
    id: Date.now(),
    servicio: servicio.value.nombre,
    fecha: fecha.value,
    hora: horaSeleccionada.value,
    estilista: estilistaSeleccionado.value.nombre,
    pago: 'tarjeta',
    estado: 'Pendiente pago'
  }

  localStorage.setItem('citaRecepcion', JSON.stringify(cita))

  router.push('/recepcionista/pago-tarjeta')
}
</script>

<style scoped>

.page-container {

  display: flex;

  min-height: 100vh;

  background: #f6f1f7;

}

.content {

  flex: 1;

  padding: 30px;

  overflow-x: hidden;

}

.header {

  margin-bottom: 20px;

}

.header h1 {

  margin: 0;

  font-size: 34px;

}

.subtitle {

  color: #666;

}

/* ERROR */

.error-box {

  background: #fee2e2;

  color: #dc2626;

  padding: 14px;

  border-radius: 12px;

  margin-bottom: 20px;

}

/* SERVICIO */

.service-detail-card {

  background: white;

  border-radius: 20px;

  padding: 25px;

  margin-bottom: 25px;

  box-shadow:
    0 5px 15px
    rgba(0,0,0,0.08);

}

.service-detail-box {

  background: #f8f8f8;

  border-radius: 12px;

  padding: 20px;

  margin-top: 15px;

  overflow-wrap: break-word;

  word-break: break-word;

}

.service-detail-box p {

  margin: 0;

  line-height: 1.7;

  color: #555;

}

/* GRID */

.agendar-grid {

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 30px;

}

.card {

  background: white;

  border-radius: 20px;

  padding: 20px;

  min-height: 420px;

  box-shadow:
    0 5px 15px
    rgba(0,0,0,0.08);

  overflow: hidden;

}

.input {

  width: 100%;

  padding: 12px;

  border-radius: 10px;

  border: 1px solid #ddd;

  margin-top: 15px;

  box-sizing: border-box;

}

.selected-info {

  margin-top: 20px;

  background: #f5ebff;

  padding: 18px;

  border-radius: 12px;

  color: #7b2ff7;

  width: 100%;

  box-sizing: border-box;

  overflow-wrap: break-word;

  word-break: break-word;

}

.selected-info p {

  margin-top: 10px;

  line-height: 1.6;

}

/* HORAS */

.hours-container {

  margin-top: 20px;

  max-height: 320px;

  overflow-y: auto;

  padding-right: 5px;

}

.hour-item {

  background: #f7f7f7;

  padding: 16px;

  border-radius: 12px;

  margin-bottom: 10px;

  text-align: center;

  cursor: pointer;

  transition: 0.3s;

}

.hour-item:hover {

  transform: scale(1.02);

}

.hour-item.active {

  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

  color: white;

}

/* ESTILISTAS */

.stylists-container {

  margin-top: 20px;

}

.stylist-item {

  display: flex;

  gap: 15px;

  align-items: center;

  background: #f7f7f7;

  padding: 15px;

  border-radius: 12px;

  margin-bottom: 12px;

  cursor: pointer;

  transition: 0.3s;

}

.stylist-item.active {

  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

  color: white;

}

.stylist-avatar {

  width: 45px;

  height: 45px;

  border-radius: 50%;

  background: #f3e8ff;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

}

.stylist-info {

  overflow: hidden;

}

.stylist-info p {

  margin: 5px 0 0;

  overflow-wrap: break-word;

  word-break: break-word;

}

/* BUTTON */

.button-container {

  margin-top: 30px;

  display: flex;

  justify-content: flex-end;

}

.btn-primary {

  border: none;

  padding: 16px 35px;

  border-radius: 12px;

  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

  color: white;

  font-size: 16px;

  cursor: pointer;

  transition: 0.3s;

}

.btn-primary:hover {

  transform: translateY(-2px);

}

.btn-primary:disabled {

  opacity: 0.6;

  cursor: not-allowed;

}

/* MODAL */

.modal-overlay {

  position: fixed;

  inset: 0;

  background: rgba(0,0,0,0.4);

  display: flex;

  justify-content: center;

  align-items: center;

  z-index: 999;

}

.modal {

  background: white;

  padding: 30px;

  border-radius: 20px;

  width: 350px;

  text-align: center;

  box-shadow:
    0 10px 25px
    rgba(0,0,0,0.2);

}

.modal-buttons {

  display: flex;

  justify-content: center;

  gap: 15px;

  margin-top: 25px;

}

.btn-cancel {

  border: none;

  padding: 12px 20px;

  border-radius: 10px;

  background: #e5e7eb;

  cursor: pointer;

}

.btn-confirm {

  border: none;

  padding: 12px 20px;

  border-radius: 10px;

  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

  color: white;

  cursor: pointer;

}

/* RESPONSIVE */

@media (max-width: 1000px) {

  .agendar-grid {

    grid-template-columns: 1fr;

  }

}

@media (max-width: 768px) {

  .content {

    padding: 20px;

  }

  .header h1 {

    font-size: 28px;

  }

  .modal {

    width: 90%;

  }

}
</style>