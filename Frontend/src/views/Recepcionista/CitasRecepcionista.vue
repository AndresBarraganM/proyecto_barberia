<template>

  <div class="citas-page">

    <!-- MENU (cambia a recepcionista) -->
    <MenuRecepcionista />

    <!-- CONTENIDO -->
    <main class="content">

      <!-- HEADER -->
      <div class="header">

        <div>
          <h1>Citas del sistema</h1>
          <p class="subtitle">Gestión de citas de clientes</p>
        </div>

        <div class="profile" @click="goPerfil">
          <div class="avatar">
            {{ usuario.nombre?.charAt(0)?.toUpperCase() }}
          </div>
        </div>

      </div>

      <!-- ERROR -->
      <div v-if="errorMessage" class="error-box">
        {{ errorMessage }}
      </div>

      <!-- LOADING -->
      <div v-if="loading" class="loading-box">
        Cargando citas...
      </div>

      <!-- EMPTY -->
      <div v-if="!loading && citas.length === 0" class="empty-box">
        <h3>No hay citas</h3>
        <p>No existen citas registradas actualmente.</p>
      </div>

      <!-- LISTA -->
      <div v-for="cita in citas" :key="cita.id" class="cita-card">

        <div class="card-top">
          <div class="icon-circle">📅</div>

          <div>
            <h2>{{ cita.cliente || 'Cliente' }}</h2>
            <p class="estado">
              Estado: {{ cita.estado || 'Pendiente' }}
            </p>
          </div>
        </div>

        <div class="info-box">

          <div class="fecha-row">
            <span>🕒 {{ cita.hora }}</span>
            <span>📅 {{ cita.fecha }}</span>
          </div>

          <div class="info-item">
            <strong>Servicio:</strong>
            <p>{{ cita.servicio }}</p>
          </div>

          <div class="info-item">
            <strong>Estilista:</strong>
            <p>{{ cita.estilista }}</p>
          </div>

        </div>

        <!-- BOTONES RECEPCIÓN -->
        <div class="actions">

          <!-- CONFIRMAR (NUEVO) -->
          <button
            class="btn-confirmar"
            @click="confirmarCita(cita)"
            v-if="cita.estado !== 'Confirmada'"
          >
            Confirmar
          </button>

          <!-- REPROGRAMAR -->
          <button
            class="btn-reprogramar"
            @click="abrirModalReprogramar(cita)"
          >
            Reprogramar
          </button>

          <!-- CANCELAR -->
          <button
            class="btn-cancelar"
            @click="cancelarCita(cita.id)"
          >
            Cancelar
          </button>

        </div>

      </div>

    </main>

    <!-- MODAL -->
    <div v-if="mostrarModal" class="modal-overlay">

      <div class="modal">

        <h2>Reprogramar cita</h2>

        <label>Nueva fecha</label>
        <input v-model="nuevaFecha" type="date" class="input" />

        <label>Nueva hora</label>
        <input v-model="nuevaHora" type="time" class="input" />

        <p v-if="modalError" class="modal-error">
          {{ modalError }}
        </p>

        <div class="modal-actions">

          <button class="btn-guardar" @click="guardarReprogramacion">
            Guardar
          </button>

          <button class="btn-close" @click="cerrarModal">
            Cancelar
          </button>

        </div>

      </div>

    </div>

  </div>

</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import MenuRecepcionista from '../../components/MenuRecepcionista.vue'

const router = useRouter()

/*
|--------------------------------------------------------------------------
| BACKEND
|--------------------------------------------------------------------------
*/
const API_URL = 'http://localhost:3000/api/recepcionista/citas'
const CANCELAR_URL = 'http://localhost:3000/api/recepcionista/citas/cancelar'
const REPROGRAMAR_URL = 'http://localhost:3000/api/recepcionista/citas/reprogramar'
const CONFIRMAR_URL = 'http://localhost:3000/api/recepcionista/citas/confirmar'

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/
const loading = ref(false)
const errorMessage = ref('')

const citas = ref([])

const usuario = ref({
  nombre: 'Recepcionista'
})

const mostrarModal = ref(false)
const modalError = ref('')
const nuevaFecha = ref('')
const nuevaHora = ref('')
const citaSeleccionada = ref(null)

/*
|--------------------------------------------------------------------------
| OBTENER CITAS
|--------------------------------------------------------------------------
*/
const obtenerCitas = async () => {

  loading.value = true
  errorMessage.value = ''

  try {

    /*
    const res = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    citas.value = res.data.citas
    */

    // DEMO
    citas.value = [
      {
        id: 1,
        cliente: 'Juan Pérez',
        fecha: '18 Marzo 2026',
        hora: '10:00 AM',
        servicio: 'Corte clásico',
        estilista: 'Carlos',
        estado: 'Pendiente'
      },
      {
        id: 2,
        cliente: 'Ana López',
        fecha: '20 Marzo 2026',
        hora: '1:30 PM',
        servicio: 'Barba',
        estilista: 'Luis',
        estado: 'Pendiente'
      }
    ]

  } catch (error) {
    errorMessage.value = 'Error al cargar citas'
  } finally {
    loading.value = false
  }
}

/*
|--------------------------------------------------------------------------
| CONFIRMAR (NUEVO)
|--------------------------------------------------------------------------
*/
const confirmarCita = async (cita) => {

  try {

    /*
    await axios.put(`${CONFIRMAR_URL}/${cita.id}`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    */

    cita.estado = 'En proceso'

    alert('Cita confirmada')

  } catch (error) {
    errorMessage.value = 'No se pudo confirmar'
  }
}

/*
|--------------------------------------------------------------------------
| CANCELAR
|--------------------------------------------------------------------------
*/
const cancelarCita = async (id) => {

  if (!confirm('¿Cancelar cita?')) return

  /*
  await axios.put(`${CANCELAR_URL}/${id}`)
  */

  citas.value = citas.value.filter(c => c.id !== id)

  alert('Cita cancelada')
}

/*
|--------------------------------------------------------------------------
| REPROGRAMAR
|--------------------------------------------------------------------------
*/
const abrirModalReprogramar = (cita) => {
  citaSeleccionada.value = cita
  mostrarModal.value = true
}

const cerrarModal = () => {
  mostrarModal.value = false
  nuevaFecha.value = ''
  nuevaHora.value = ''
  modalError.value = ''
}

const guardarReprogramacion = async () => {

  if (!nuevaFecha.value || !nuevaHora.value) {
    modalError.value = 'Completa los campos'
    return
  }

  try {

    /*
    await axios.put(`${REPROGRAMAR_URL}/${citaSeleccionada.value.id}`, {
      fecha: nuevaFecha.value,
      hora: nuevaHora.value
    })
    */

    citaSeleccionada.value.fecha = nuevaFecha.value
    citaSeleccionada.value.hora = nuevaHora.value

    cerrarModal()

    alert('Reprogramada')

  } catch (error) {
    modalError.value = 'Error al reprogramar'
  }
}

/*
|--------------------------------------------------------------------------
| PERFIL
|--------------------------------------------------------------------------
*/
const goPerfil = () => {
  router.push('/recepcionista/perfil')
}

/*
|--------------------------------------------------------------------------
| MOUNT
|--------------------------------------------------------------------------
*/
onMounted(() => {
  obtenerCitas()
})

</script>

<style scoped>

.btn-confirmar {
  border: none;
  padding: 12px 18px;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  background: linear-gradient(to right, #22c55e, #16a34a);
}

.citas-page {

  display: flex;

  min-height: 100vh;

  background: #f5f5f7;

}

/* CONTENT */

.content {

  flex: 1;

  padding: 30px;

}

/* HEADER */

.header {

  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 30px;

}

.subtitle {

  color: #777;

}

/* PERFIL */

.profile {

  cursor: pointer;

}

.avatar {

  width: 55px;

  height: 55px;

  border-radius: 50%;

  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;

  font-weight: bold;

  font-size: 22px;

}

/* CARD */

.cita-card {

  background: white;

  padding: 25px;

  border-radius: 20px;

  margin-bottom: 25px;

  box-shadow:
    0 5px 15px
    rgba(0,0,0,0.08);

}

.card-top {

  display: flex;

  align-items: center;

  gap: 15px;

  margin-bottom: 20px;

}

.icon-circle {

  width: 50px;

  height: 50px;

  border-radius: 50%;

  background: #f3e8ff;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 24px;

}

/* INFO */

.info-box {

  background: #f9fafb;

  padding: 20px;

  border-radius: 15px;

}

.fecha-row {

  display: flex;

  gap: 20px;

  margin-bottom: 20px;

  color: #666;

}

.info-item {

  margin-bottom: 15px;

}

.info-item p {

  margin-top: 5px;

  color: #444;

}

/* BOTONES */

.actions {

  margin-top: 20px;

  display: flex;

  justify-content: flex-end;

  gap: 12px;

}

.btn-reprogramar {

  border: none;

  padding: 12px 18px;

  border-radius: 12px;

  cursor: pointer;

  color: white;

  font-weight: bold;

  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

}

.btn-cancelar {

  border: 1px solid #ddd;

  background: white;

  padding: 12px 18px;

  border-radius: 12px;

  cursor: pointer;

}

/* MODAL */

.modal-overlay {

  position: fixed;

  inset: 0;

  background: rgba(0,0,0,0.5);

  display: flex;

  align-items: center;

  justify-content: center;

}

.modal {

  background: white;

  padding: 30px;

  border-radius: 20px;

  width: 350px;

}

.input {

  width: 100%;

  padding: 12px;

  margin-top: 10px;

  margin-bottom: 20px;

  border-radius: 10px;

  border: 1px solid #ddd;

}

.modal-actions {

  display: flex;

  justify-content: flex-end;

  gap: 10px;

}

.btn-guardar {

  border: none;

  padding: 10px 15px;

  border-radius: 10px;

  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

  color: white;

  cursor: pointer;

}

.btn-close {

  border: none;

  padding: 10px 15px;

  border-radius: 10px;

  background: #eee;

  cursor: pointer;

}

/* ERROR */

.error-box {

  background: #fee2e2;

  color: #dc2626;

  padding: 15px;

  border-radius: 12px;

  margin-bottom: 20px;

}

.modal-error {

  color: #dc2626;

  margin-bottom: 15px;

}

.loading-box,

.empty-box {

  background: white;

  padding: 25px;

  border-radius: 20px;

  text-align: center;

  margin-bottom: 20px;

}

/* RESPONSIVE */

@media (max-width: 768px) {

  .content {

    padding: 20px;

  }

  .header {

    flex-direction: column;

    align-items: flex-start;

    gap: 15px;

  }

  .actions {

    flex-direction: column;

  }

}
</style>