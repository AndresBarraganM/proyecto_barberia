<template>

  <div class="historial-container">

    <!-- MENU -->
    <MenuRecepcionista />

    <!-- CONTENIDO -->
    <main class="content">

      <!-- HEADER -->
      <div class="header">

        <div>
          <h1>Historial general</h1>
          <p class="subtitle">
            Servicios completados de todos los clientes
          </p>
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
        Cargando historial...
      </div>

      <!-- EMPTY -->
      <div v-else-if="historial.length === 0" class="empty-box">
        <div class="empty-icon">🕘</div>
        <h3>No hay historial</h3>
        <p>No se han registrado servicios aún.</p>
      </div>

      <!-- LISTA -->
      <div v-else class="historial-list">

        <div
          v-for="item in historial"
          :key="item.id"
          class="historial-card"
        >

          <!-- TOP -->
          <div class="card-top">

            <div class="top-left">

              <div class="service-icon">✂️</div>

              <div>
                <h2>{{ item.cliente }}</h2>
                <p class="status">Servicio completado</p>
              </div>

            </div>

            <div class="price">
              ${{ item.precio }}
            </div>

          </div>

          <!-- INFO -->
          <div class="card-info">

            <div class="info-item">
              <span class="label">Servicio:</span>
              <span>{{ item.servicio }}</span>
            </div>

            <div class="info-item">
              <span class="label">Fecha:</span>
              <span>{{ item.fecha }}</span>
            </div>

            <div class="info-item">
              <span class="label">Hora:</span>
              <span>{{ item.hora }}</span>
            </div>

            <div class="info-item">
              <span class="label">Estilista:</span>
              <span>{{ item.estilista }}</span>
            </div>

          </div>

          <!-- DETALLES -->
          <div class="details-box">
            <h4>Detalles</h4>
            <p>{{ item.detalles }}</p>
          </div>

          <!-- ACCIONES -->
          <div class="actions">

            <button
              class="btn-delete"
              @click="eliminarHistorial(item.id)"
            >
              Eliminar
            </button>

          </div>

        </div>

      </div>

    </main>

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
| API
|--------------------------------------------------------------------------
*/
const API_URL = 'http://localhost:3000/api/recepcionista/historial'
const DELETE_URL = 'http://localhost:3000/api/recepcionista/historial/eliminar'

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/
const loading = ref(false)
const errorMessage = ref('')

const usuario = ref({
  nombre: 'Recepcionista'
})

const historial = ref([])

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
| OBTENER HISTORIAL
|--------------------------------------------------------------------------
*/
const obtenerHistorial = async () => {

  loading.value = true
  errorMessage.value = ''

  try {

    /*
    const res = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    historial.value = res.data.historial
    */

    // DEMO
    historial.value = [
      {
        id: 1,
        cliente: 'Juan Pérez',
        servicio: 'Corte clásico',
        fecha: '18 Marzo 2026',
        hora: '10:00 AM',
        estilista: 'Carlos Rodríguez',
        precio: 250,
        detalles: 'Corte clásico con desvanecido y lavado incluido'
      },
      {
        id: 2,
        cliente: 'Ana López',
        servicio: 'Corte + barba',
        fecha: '10 Marzo 2026',
        hora: '1:30 PM',
        estilista: 'Miguel López',
        precio: 380,
        detalles: 'Perfilado de barba y corte moderno'
      },
      {
        id: 3,
        cliente: 'Luis García',
        servicio: 'Fade moderno',
        fecha: '5 Marzo 2026',
        hora: '5:00 PM',
        estilista: 'José Ramírez',
        precio: 300,
        detalles: 'Corte fade con diseño personalizado'
      }
    ]

  } catch (error) {
    errorMessage.value = 'No se pudo cargar el historial'
  } finally {
    loading.value = false
  }
}

/*
|--------------------------------------------------------------------------
| ELIMINAR HISTORIAL
|--------------------------------------------------------------------------
*/
const eliminarHistorial = async (id) => {

  if (!confirm('¿Seguro que deseas eliminar este registro?')) return

  try {

    /*
    await axios.delete(`${DELETE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    */

    historial.value = historial.value.filter(item => item.id !== id)

    alert('Registro eliminado correctamente')

  } catch (error) {
    errorMessage.value = 'No se pudo eliminar el registro'
  }
}

/*
|--------------------------------------------------------------------------
| MOUNT
|--------------------------------------------------------------------------
*/
onMounted(() => {
  obtenerHistorial()
})

</script>

<style scoped>

/* ===== LAYOUT ===== */

.historial-container {
  display: flex;
  min-height: 100vh;
  background: #f5f5f7;
}

/* CONTENT */

.content {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}

/* HEADER */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.header h1 {
  margin: 0;
  font-size: 32px;
}

.subtitle {
  color: #777;
  margin-top: 5px;
}

/* PROFILE */

.profile {
  cursor: pointer;
}

.avatar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: linear-gradient(to right, #7b2ff7, #f107a3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  transition: 0.3s;
}

.avatar:hover {
  transform: scale(1.08);
}

/* ERROR */

.error-box {
  background: #fee2e2;
  color: #dc2626;
  padding: 15px;
  border-radius: 14px;
  margin-bottom: 20px;
}

/* LOADING */

.loading-box {
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
}

/* EMPTY */

.empty-box {
  background: white;
  padding: 50px;
  border-radius: 20px;
  text-align: center;
}

.empty-icon {
  font-size: 60px;
  margin-bottom: 20px;
}

/* LIST */

.historial-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* CARD */

.historial-card {
  background: white;
  border-radius: 22px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.historial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
}

/* TOP */

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.top-left {
  display: flex;
  gap: 15px;
  align-items: center;
}

.service-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: #f3e8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.status {
  color: #16a34a;
  font-size: 14px;
  margin-top: 5px;
}

.price {
  font-size: 22px;
  font-weight: bold;
  color: #7b2ff7;
}

/* INFO */

.card-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.info-item {
  background: #f9fafb;
  padding: 15px;
  border-radius: 14px;
}

.label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

/* DETAILS */

.details-box {
  background: #f5f5f7;
  padding: 18px;
  border-radius: 16px;
  margin-bottom: 15px;
}

/* ACTIONS */

.actions {
  display: flex;
  justify-content: flex-end;
}

.btn-delete {
  border: none;
  padding: 12px 18px;
  border-radius: 12px;
  cursor: pointer;
  background: #ef4444;
  color: white;
  font-weight: bold;
  transition: 0.3s;
}

.btn-delete:hover {
  background: #dc2626;
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
}

</style>