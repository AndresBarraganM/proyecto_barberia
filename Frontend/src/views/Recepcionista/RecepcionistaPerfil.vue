<template>

  <div class="perfil-container">

    <!-- HEADER -->
    <div class="perfil-header">

      <div class="avatar-big">
        {{ usuario.nombre?.charAt(0)?.toUpperCase() }}
      </div>

      <div>

        <h1>
          {{ usuario.nombre }}
        </h1>

        <p>
          Recepcionista del salón ✂️
        </p>

      </div>

    </div>

    <!-- CARD INFO -->
    <div class="perfil-card">

      <h2>
        Información personal
      </h2>

      <!-- NOMBRE -->
      <div class="info-item">

        <span class="label">
          Nombre
        </span>

        <span class="value">
          {{ usuario.nombre }}
        </span>

      </div>

      <!-- EMAIL -->
      <div class="info-item">

        <span class="label">
          Email
        </span>

        <span class="value">
          {{ usuario.email }}
        </span>

      </div>

      <!-- TELÉFONO -->
      <div class="info-item">

        <span class="label">
          Teléfono
        </span>

        <span class="value">
          {{ usuario.telefono }}
        </span>

      </div>

      <!-- ROL -->
      <div class="info-item">

        <span class="label">
          Rol
        </span>

        <span class="badge">
          Recepcionista
        </span>

      </div>

      <!-- BOTONES -->
      <div class="actions">

        <button
          class="btn-edit"
          @click="editarPerfil"
        >
          Editar perfil
        </button>

        <button
          class="btn-logout"
          @click="logout"
        >
          Cerrar sesión
        </button>

      </div>

    </div>

    <!-- ESTADÍSTICAS -->
    <div class="stats-grid">

      <div class="stat-card">

        <h2>125</h2>

        <p>
          Citas gestionadas
        </p>

      </div>

      <div class="stat-card">

        <h2>32</h2>

        <p>
          Clientes atendidos
        </p>

      </div>

      <div class="stat-card">

        <h2>5 ⭐</h2>

        <p>
          Rendimiento
        </p>

      </div>

    </div>

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

const usuario = ref({
  nombre: '',
  email: '',
  telefono: ''
})

/*
|--------------------------------------------------------------------------
| OBTENER USUARIO
|--------------------------------------------------------------------------
*/

const obtenerUsuario = () => {

  const user = localStorage.getItem('usuario')

  if (user) {

    usuario.value = JSON.parse(user)

  } else {

    usuario.value = {
      nombre: 'Recepcionista Demo',
      email: 'recepcion@demo.com',
      telefono: '6861234567'
    }

  }

}

/*
|--------------------------------------------------------------------------
| EDITAR PERFIL
|--------------------------------------------------------------------------
*/

const editarPerfil = () => {

  router.push('/recepcionista/configuracion')

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

  obtenerUsuario()

})

</script>

<style scoped>

/* =========================
   CONTAINER
========================= */

.perfil-container {
  min-height: 100vh;
  background: #f5f5f7;
  padding: 40px;
}

/* =========================
   HEADER
========================= */

.perfil-header {
  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

  padding: 35px;
  border-radius: 25px;
  color: white;

  display: flex;
  align-items: center;
  gap: 25px;

  margin-bottom: 30px;
}

.avatar-big {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 40px;
  font-weight: bold;
}

.perfil-header h1 {
  font-size: 34px;
  margin-bottom: 8px;
}

/* =========================
   CARD
========================= */

.perfil-card {
  background: white;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);

  margin-bottom: 30px;
}

.perfil-card h2 {
  margin-bottom: 25px;
}

/* =========================
   INFO
========================= */

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 0;

  border-bottom: 1px solid #eee;
}

.label {
  font-weight: bold;
  color: #555;
}

.value {
  color: #111;
}

.badge {
  background: #ede9fe;
  color: #7b2ff7;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
}

/* =========================
   BUTTONS
========================= */

.actions {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}

.btn-edit,
.btn-logout {
  border: none;
  padding: 14px 20px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.btn-edit {
  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

  color: white;
}

.btn-logout {
  background: #ef4444;
  color: white;
}

.btn-edit:hover,
.btn-logout:hover {
  transform: translateY(-2px);
}

/* =========================
   STATS
========================= */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(220px, 1fr)
  );

  gap: 20px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;

  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.stat-card h2 {
  font-size: 40px;
  color: #7b2ff7;
  margin-bottom: 10px;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 768px) {

  .perfil-container {
    padding: 20px;
  }

  .perfil-header {
    flex-direction: column;
    text-align: center;
  }

  .info-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .actions {
    flex-direction: column;
  }

}

</style>