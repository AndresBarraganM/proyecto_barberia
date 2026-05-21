<template>
  <div class="layout">

    <!-- SIDEBAR -->
    <MenuRecepcionista class="sidebar" />

    <!-- CONTENT -->
    <div class="content">

      <div class="config-card">

        <h1>Configuración recepcionista</h1>

        <p class="subtitle">
          Actualiza tu información de trabajo
        </p>

        <!-- ERROR -->
        <div v-if="errorMessage" class="error-box">
          {{ errorMessage }}
        </div>

        <!-- SUCCESS -->
        <div v-if="successMessage" class="success-box">
          {{ successMessage }}
        </div>

        <!-- NOMBRE -->
        <div class="input-group">
          <label>Nombre</label>
          <input v-model="nombre" type="text" class="input" placeholder="Nombre completo" />
        </div>

        <!-- EMAIL -->
        <div class="input-group">
          <label>Email corporativo</label>
          <input v-model="email" type="email" class="input" placeholder="recepcion@salon.com" />
        </div>

        <!-- TELÉFONO -->
        <div class="input-group">
          <label>Teléfono</label>
          <input v-model="telefono" type="text" class="input" placeholder="6671234567" />
        </div>

        <!-- PASSWORD -->
        <div class="input-group">
          <label>Nueva contraseña (opcional)</label>
          <input v-model="password" type="password" class="input" placeholder="••••••••" />
        </div>

        <!-- BUTTON -->
        <button class="btn-save" @click="guardar" :disabled="loading">
          {{ loading ? 'Guardando...' : 'Guardar cambios' }}
        </button>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import MenuRecepcionista from '../../components/MenuRecepcionista.vue'

/* =========================
   CONFIG
========================= */
const API_URL = 'http://localhost:3000/api/recepcionistas'
const USE_BACKEND = false

/* =========================
   STATE
========================= */
const nombre = ref('')
const email = ref('')
const telefono = ref('')
const password = ref('')

const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

/* =========================
   CARGA DATOS
========================= */
const cargarBackend = async () => {
  const res = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  return res.data
}

const cargarLocal = async () => {
  const user = JSON.parse(localStorage.getItem('recepcionista') || '{}')

  return {
    nombre: user.nombre || 'Recepcionista demo',
    email: user.email || 'recepcion@demo.com',
    telefono: user.telefono || '0000000000'
  }
}

onMounted(async () => {
  try {
    const data = USE_BACKEND ? await cargarBackend() : await cargarLocal()

    nombre.value = data.nombre
    email.value = data.email
    telefono.value = data.telefono

  } catch (error) {
    errorMessage.value = 'No se pudieron cargar los datos'
  }
})

/* =========================
   VALIDACIÓN
========================= */
const validar = () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!nombre.value.trim()) {
    errorMessage.value = 'El nombre es obligatorio'
    return false
  }

  if (!email.value.includes('@')) {
    errorMessage.value = 'Email inválido'
    return false
  }

  if (telefono.value.length < 10) {
    errorMessage.value = 'Teléfono inválido'
    return false
  }

  return true
}

/* =========================
   GUARDAR BACKEND
========================= */
const guardarBackend = async (payload) => {
  return await axios.put(API_URL, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

/* =========================
   GUARDAR LOCAL
========================= */
const guardarLocal = async (payload) => {
  const user = JSON.parse(localStorage.getItem('recepcionista') || '{}')

  const updated = {
    ...user,
    ...payload
  }

  localStorage.setItem('recepcionista', JSON.stringify(updated))

  return { data: { message: 'Guardado localmente' } }
}

/* =========================
   SELECTOR
========================= */
const guardarServicio = (payload) => {
  return USE_BACKEND ? guardarBackend(payload) : guardarLocal(payload)
}

/* =========================
   GUARDAR
========================= */
const guardar = async () => {
  if (!validar()) return

  loading.value = true

  try {
    await guardarServicio({
      nombre: nombre.value,
      email: email.value,
      telefono: telefono.value,
      ...(password.value ? { password: password.value } : {})
    })

    successMessage.value = 'Datos actualizados correctamente'
    password.value = ''

  } catch (error) {
    errorMessage.value =
      error.response?.data?.message ||
      error.message ||
      'Error al guardar cambios'

  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* =========================
   LAYOUT
========================= */
.layout {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #eef2ff, #f7edf7);
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

/* =========================
   CARD
========================= */
.config-card {
  width: 420px;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

/* TITLES */
h1 {
  text-align: center;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  color: #777;
  margin-bottom: 20px;
}

/* =========================
   INPUTS
========================= */
.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 14px;
}

.input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
  outline: none;
  box-sizing: border-box;
  transition: 0.3s;
}

.input:focus {
  border-color: #7b2ff7;
}

/* =========================
   BUTTON
========================= */
.btn-save {
  width: 100%;
  margin-top: 15px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(to right, #7b2ff7, #f107a3);
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.btn-save:hover {
  transform: translateY(-2px);
}

.btn-save:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* =========================
   ALERTAS
========================= */
.error-box {
  background: #fee2e2;
  color: #dc2626;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.success-box {
  background: #dcfce7;
  color: #16a34a;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

/* =========================
   RESPONSIVE
========================= */
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

  .config-card {
    width: 100%;
    border-radius: 16px;
  }
}
</style>