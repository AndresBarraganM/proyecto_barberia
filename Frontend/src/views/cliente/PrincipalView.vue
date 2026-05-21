<template>

  <div class="dashboard-container">

    <!-- CONTENIDO -->
    <main class="content">

      <!-- HEADER -->
      <div class="header">

        <div>

          <h1>
            Bienvenido,
            {{ usuario.nombre }}
          </h1>

          <p class="subtitle">
            Gestiona tus citas y servicios
          </p>

        </div>

        <!-- PERFIL -->
        <div
          class="profile"
          @click="goPerfil"
        >

          <div class="avatar">

            {{
              usuario.nombre
                ?.charAt(0)
                ?.toUpperCase()
            }}

          </div>

        </div>

      </div>

      <!-- ERROR -->
      <div
        v-if="errorMessage"
        class="error-box"
      >
        {{ errorMessage }}
      </div>

      <!-- BIENVENIDA -->
      <div class="welcome-card">

        <h2>
          Hola,
          {{ usuario.nombre }}
          👋
        </h2>

        <p>
          Bienvenido al sistema de barbería.
          Desde aquí podrás gestionar tus
          citas, revisar tu historial y
          consultar los servicios disponibles.
        </p>

      </div>

      <!-- TARJETAS -->
      <div class="dashboard-grid">

        <!-- CITAS -->
        <div
          class="dashboard-card"
          @click="goTo('/cliente/citas')"
        >

          <div class="card-icon">
            📅
          </div>

          <h3>Mis citas</h3>

          <p>
            Consulta y administra
            tus citas agendadas.
          </p>

        </div>

        <!-- HISTORIAL -->
        <div
          class="dashboard-card"
          @click="goTo('/cliente/historial')"
        >

          <div class="card-icon">
            🕘
          </div>

          <h3>Historial</h3>

          <p>
            Consulta tus servicios
            anteriores.
          </p>

        </div>

        <!-- SERVICIOS -->
        <div
          class="dashboard-card"
          @click="goTo('/cliente/servicios')"
        >

          <div class="card-icon">
            ✂️
          </div>

          <h3>Servicios</h3>

          <p>
            Explora todos los
            servicios disponibles.
          </p>

        </div>

        <!-- CONFIG -->
        <div
          class="dashboard-card"
          @click="goTo('/cliente/configuracion')"
        >

          <div class="card-icon">
            ⚙️
          </div>

          <h3>Configuración</h3>

          <p>
            Administra tu cuenta
            y preferencias.
          </p>

        </div>

      </div>

    </main>

  </div>

</template>

<script setup>

import {

  ref,

  onMounted

} from 'vue'

import {

  useRouter

} from 'vue-router'

const router = useRouter()

/*
|--------------------------------------------------------------------------
| ERROR
|--------------------------------------------------------------------------
*/

const errorMessage = ref('')

/*
|--------------------------------------------------------------------------
| USUARIO
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

  try {

    /*
      TOKEN
    */

    const token =
      localStorage.getItem('token')

    /*
      VALIDAR TOKEN
    */

    if (!token) {

      logout()

      return

    }

    /*
      USUARIO STORAGE
    */

    const usuarioGuardado =
      localStorage.getItem('usuario')

    /*
      SI EXISTE
    */

    if (usuarioGuardado) {

      usuario.value =
        JSON.parse(usuarioGuardado)

    }

    /*
      DEMO
    */

    else {

      usuario.value = {

        nombre: 'Cliente Demo',

        email: 'cliente@demo.com',

        telefono: '6861234567'

      }

    }

  }

  catch (error) {

    console.error(error)

    errorMessage.value =
      'Error al obtener usuario'

  }

}

/*
|--------------------------------------------------------------------------
| PERFIL
|--------------------------------------------------------------------------
*/

const goPerfil = () => {

  router.push('/cliente/perfil')

}

/*
|--------------------------------------------------------------------------
| NAVEGAR
|--------------------------------------------------------------------------
*/

const goTo = (route) => {

  router.push(route)

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

  /*
    DEMO TEMPORAL
  */

  if (!localStorage.getItem('token')) {

    localStorage.setItem(
      'token',
      'demo-token'
    )

    localStorage.setItem(
      'rol',
      'cliente'
    )

    localStorage.setItem(
      'usuario',
      JSON.stringify({

        nombre:
          'Cliente Demo',

        email:
          'cliente@demo.com',

        telefono:
          '6861234567'

      })

    )

  }

  /*
    VALIDAR ROL
  */

  const rol =
    localStorage.getItem('rol')

  if (rol !== 'cliente') {

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

/* CONTENT */

.content {

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

  font-size: 30px;

}

.subtitle {

  color: #777;

  margin-top: 5px;

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

  font-size: 22px;

  font-weight: bold;

  transition: 0.3s;

}

.avatar:hover {

  transform: scale(1.08);

}

/* BIENVENIDA */

.welcome-card {

  background: white;

  padding: 25px;

  border-radius: 20px;

  margin-bottom: 25px;

  box-shadow:
    0 5px 15px
    rgba(0,0,0,0.08);

}

.welcome-card h2 {

  margin-bottom: 10px;

}

/* GRID */

.dashboard-grid {

  display: grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(250px, 1fr)
    );

  gap: 20px;

}

/* CARDS */

.dashboard-card {

  background: white;

  padding: 25px;

  border-radius: 20px;

  cursor: pointer;

  transition: 0.3s;

  box-shadow:
    0 5px 15px
    rgba(0,0,0,0.08);

}

.dashboard-card:hover {

  transform: translateY(-5px);

  box-shadow:
    0 10px 25px
    rgba(0,0,0,0.15);

}

.card-icon {

  font-size: 35px;

  margin-bottom: 15px;

}

.dashboard-card h3 {

  margin-bottom: 10px;

}

.dashboard-card p {

  color: #666;

  line-height: 1.5;

}

/* ERROR */

.error-box {

  background: #fee2e2;

  color: #dc2626;

  padding: 15px;

  border-radius: 12px;

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

}

</style>