<template>
  <div class="dashboard-container">

    <main class="content">

      <!-- HEADER -->
      <div class="header">

        <div>
          <h1>
            Bienvenido, {{ usuario.nombre }}
          </h1>

          <p class="subtitle">
            Panel de recepción y gestión de citas
          </p>
        </div>

        <!-- PERFIL -->
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

      <!-- BIENVENIDA -->
      <div class="welcome-card">

        <h2>
          Hola, {{ usuario.nombre }} 👋
        </h2>

        <p>
          Desde este panel podrás gestionar todas las citas de los clientes,
          revisar historial de servicios, administrar servicios disponibles
          y configurar tu cuenta de recepcionista.
        </p>

      </div>

      <!-- GRID -->
      <div class="dashboard-grid">

        <!-- CITAS -->
        <div class="dashboard-card" @click="goTo('/recepcionista/citas')">
          <div class="card-icon">📅</div>
          <h3>Citas</h3>
          <p>Gestiona las citas programadas y nuevas solicitudes.</p>
        </div>

        <!-- HISTORIAL -->
        <div class="dashboard-card" @click="goTo('/recepcionista/historial')">
          <div class="card-icon">🕘</div>
          <h3>Historial</h3>
          <p>Revisa todas las citas atendidas y registros anteriores.</p>
        </div>

        <!-- SERVICIOS -->
        <div class="dashboard-card" @click="goTo('/recepcionista/servicios')">
          <div class="card-icon">✂️</div>
          <h3>Servicios</h3>
          <p>Consulta y administra los servicios disponibles.</p>
        </div>

        <!-- CONFIGURACIÓN -->
        <div class="dashboard-card" @click="goTo('/recepcionista/configuracion')">
          <div class="card-icon">⚙️</div>
          <h3>Configuración</h3>
          <p>Administra tu cuenta y preferencias del sistema.</p>
        </div>

      </div>

    </main>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/
const errorMessage = ref('')

const usuario = ref({
  nombre: '',
  email: '',
  telefono: ''
})

/*
|--------------------------------------------------------------------------
| OBTENER USUARIO (LISTO PARA BACKEND)
|--------------------------------------------------------------------------
*/
const obtenerUsuario = () => {
  try {

    const token = localStorage.getItem('token')

    if (!token) {
      logout()
      return
    }

    const usuarioGuardado = localStorage.getItem('usuario')

    if (usuarioGuardado) {
      usuario.value = JSON.parse(usuarioGuardado)
    } else {
      // fallback demo
      usuario.value = {
        nombre: 'Recepcionista Demo',
        email: 'recepcion@demo.com',
        telefono: '0000000000'
      }
    }

  } catch (error) {
    console.error(error)
    errorMessage.value = 'Error al obtener usuario'
  }
}

/*
|--------------------------------------------------------------------------
| NAVEGACIÓN
|--------------------------------------------------------------------------
*/
const goTo = (route) => {
  router.push(route)
}

const goPerfil = () => {
  router.push('/recepcionista/perfil')
}

/*
|--------------------------------------------------------------------------
| LOGOUT
|--------------------------------------------------------------------------
*/
const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('rol')
  localStorage.removeItem('usuario')
  router.push('/login')
}

/*
|--------------------------------------------------------------------------
| MOUNT
|--------------------------------------------------------------------------
*/
onMounted(() => {

  // demo temporal si no hay backend aún
  if (!localStorage.getItem('token')) {
    localStorage.setItem('token', 'demo-token')
    localStorage.setItem('rol', 'recepcionista')
    localStorage.setItem('usuario', JSON.stringify({
      nombre: 'Recepcionista Demo',
      email: 'recepcion@demo.com',
      telefono: '6861234567'
    }))
  }

  const rol = localStorage.getItem('rol')

  if (rol !== 'recepcionista') {
    router.push('/login')
    return
  }

  obtenerUsuario()
})
</script>



<style scoped>


.dashboard-container {
  min-height: 100vh;
  background: #f5f5f7;
}

.content {
  padding: 30px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 30px;
}

.subtitle {
  color: #777;
}

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
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 22px;
}

.welcome-card {
  background: white;
  padding: 25px;
  border-radius: 20px;
  margin-bottom: 25px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.dashboard-card {
  background: white;
  padding: 25px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.dashboard-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 35px;
  margin-bottom: 15px;
}

.error-box {
  background: #fee2e2;
  color: #dc2626;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .content {
    padding: 20px;
  }
}
</style>