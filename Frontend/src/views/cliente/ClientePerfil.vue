<template>

  <div class="perfil-container">

    <!-- MENU -->
    <MenuCliente />

    <!-- CONTENIDO -->
    <main class="content">

      <!-- HEADER -->
      <div class="header">

        <div>

          <h1>
            Mi Perfil
          </h1>

          <p class="subtitle">
            Administra tu información personal
          </p>

        </div>

      </div>

      <!-- CARD PERFIL -->
      <div class="perfil-card">

        <!-- FOTO / AVATAR -->
        <div class="perfil-top">

          <div class="avatar-big">

            {{
              usuario.nombre
                ?.charAt(0)
                ?.toUpperCase()
            }}

          </div>

          <div>

            <h2>
              {{ usuario.nombre }}
            </h2>

            <p class="email">
              {{ usuario.email }}
            </p>

          </div>

        </div>

        <!-- ERROR -->
        <div
          v-if="errorMessage"
          class="error-box"
        >
          {{ errorMessage }}
        </div>

        <!-- SUCCESS -->
        <div
          v-if="successMessage"
          class="success-box"
        >
          {{ successMessage }}
        </div>

        <!-- FORM -->
        <div class="form-grid">

          <!-- NOMBRE -->
          <div class="input-group">

            <label>
              Nombre completo
            </label>

            <input
              v-model="usuario.nombre"
              type="text"
              class="input"
            />

          </div>

          <!-- EMAIL -->
          <div class="input-group">

            <label>
              Correo electrónico
            </label>

            <input
              v-model="usuario.email"
              type="email"
              class="input"
            />

          </div>

          <!-- TELÉFONO -->
          <div class="input-group">

            <label>
              Teléfono
            </label>

            <input
              v-model="usuario.telefono"
              type="text"
              class="input"
            />

          </div>

          <!-- PASSWORD -->
          <div class="input-group">

            <label>
              Nueva contraseña
            </label>

            <input
              v-model="password"
              type="password"
              class="input"
              placeholder="••••••••"
            />

          </div>

        </div>

        <!-- BOTONES -->
        <div class="buttons">

          <button
            class="btn-save"
            @click="guardarPerfil"
            :disabled="loading"
          >

            {{
              loading
                ? 'Guardando...'
                : 'Guardar cambios'
            }}

          </button>

          <button
            class="btn-logout"
            @click="logout"
          >
            Cerrar sesión
          </button>

        </div>

      </div>

      <!-- CARD EXTRA -->
      <div class="stats-card">

        <h3>
          Información de cuenta
        </h3>

        <div class="stats-grid">

          <div class="stat-item">

            <span class="stat-label">
              Rol
            </span>

            <span class="stat-value">
              Cliente
            </span>

          </div>

          <div class="stat-item">

            <span class="stat-label">
              Estado
            </span>

            <span class="status active">
              Activo
            </span>

          </div>

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

import MenuCliente from
'../../components/MenuCliente.vue'

const router = useRouter()

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const loading = ref(false)

const errorMessage = ref('')

const successMessage = ref('')

const password = ref('')

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

    const usuarioGuardado =
      localStorage.getItem(
        'usuario'
      )

    if (usuarioGuardado) {

      usuario.value =
        JSON.parse(usuarioGuardado)

    }

  }

  catch (error) {

    errorMessage.value =
      'No se pudo cargar el perfil'

  }

}

/*
|--------------------------------------------------------------------------
| GUARDAR PERFIL
|--------------------------------------------------------------------------
*/

const guardarPerfil = async () => {

  errorMessage.value = ''

  successMessage.value = ''

  /*
    VALIDACIONES
  */

  if (
    !usuario.value.nombre
      .trim()
  ) {

    errorMessage.value =
      'El nombre es obligatorio'

    return

  }

  if (
    !usuario.value.email
      .includes('@')
  ) {

    errorMessage.value =
      'Correo inválido'

    return

  }

  loading.value = true

  try {

    /*
      BACKEND
    */

    /*
    await axios.put(...)
    */

    /*
      DEMO
    */

    localStorage.setItem(

      'usuario',

      JSON.stringify({

        ...usuario.value

      })

    )

    successMessage.value =
      'Perfil actualizado correctamente'

    password.value = ''

  }

  catch (error) {

    errorMessage.value =
      'Error al actualizar perfil'

  }

  finally {

    loading.value = false

  }

}

/*
|--------------------------------------------------------------------------
| LOGOUT
|--------------------------------------------------------------------------
*/

const logout = () => {

  localStorage.removeItem(
    'token'
  )

  localStorage.removeItem(
    'rol'
  )

  localStorage.removeItem(
    'usuario'
  )

  router.push('/login')

}

/*
|--------------------------------------------------------------------------
| MOUNT
|--------------------------------------------------------------------------
*/

onMounted(() => {

  const token =
    localStorage.getItem(
      'token'
    )

  const rol =
    localStorage.getItem(
      'rol'
    )

  if (!token || rol !== 'cliente') {

    router.push('/login')

    return

  }

  obtenerUsuario()

})

</script>

<style scoped>

/* CONTAINER */

.perfil-container {

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

  margin-bottom: 25px;

}

.header h1 {

  font-size: 32px;

  margin: 0;

}

.subtitle {

  color: #777;

  margin-top: 5px;

}

/* CARD */

.perfil-card {

  background: white;

  border-radius: 24px;

  padding: 30px;

  box-shadow:
    0 5px 15px
    rgba(0,0,0,0.08);

  margin-bottom: 25px;

}

/* TOP */

.perfil-top {

  display: flex;

  align-items: center;

  gap: 20px;

  margin-bottom: 30px;

}

.avatar-big {

  width: 90px;

  height: 90px;

  border-radius: 50%;

  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

  color: white;

  display: flex;

  justify-content: center;

  align-items: center;

  font-size: 36px;

  font-weight: bold;

}

.email {

  color: #777;

  margin-top: 5px;

}

/* FORM */

.form-grid {

  display: grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(250px, 1fr)
    );

  gap: 20px;

}

/* INPUT */

.input-group {

  display: flex;

  flex-direction: column;

}

label {

  margin-bottom: 8px;

  font-weight: bold;

}

.input {

  padding: 14px;

  border-radius: 12px;

  border: 1px solid #ddd;

  outline: none;

  transition: 0.3s;

}

.input:focus {

  border-color: #7b2ff7;

}

/* BUTTONS */

.buttons {

  display: flex;

  gap: 15px;

  margin-top: 30px;

}

.btn-save {

  flex: 1;

  border: none;

  padding: 14px;

  border-radius: 14px;

  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

  color: white;

  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;

}

.btn-save:hover {

  transform: translateY(-2px);

}

.btn-logout {

  border: none;

  padding: 14px 20px;

  border-radius: 14px;

  background: #ef4444;

  color: white;

  font-weight: bold;

  cursor: pointer;

}

/* ALERTAS */

.error-box {

  background: #fee2e2;

  color: #dc2626;

  padding: 15px;

  border-radius: 12px;

  margin-bottom: 20px;

}

.success-box {

  background: #dcfce7;

  color: #16a34a;

  padding: 15px;

  border-radius: 12px;

  margin-bottom: 20px;

}

/* EXTRA CARD */

.stats-card {

  background: white;

  padding: 25px;

  border-radius: 24px;

  box-shadow:
    0 5px 15px
    rgba(0,0,0,0.08);

}

.stats-grid {

  display: grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(200px, 1fr)
    );

  gap: 20px;

  margin-top: 20px;

}

.stat-item {

  background: #f5f5f7;

  padding: 18px;

  border-radius: 16px;

}

.stat-label {

  display: block;

  color: #777;

  margin-bottom: 10px;

}

.stat-value {

  font-size: 20px;

  font-weight: bold;

}

.status {

  padding: 8px 14px;

  border-radius: 30px;

  font-size: 14px;

  font-weight: bold;

}

.active {

  background: #dcfce7;

  color: #16a34a;

}

/* RESPONSIVE */

@media (max-width: 768px) {

  .content {

    padding: 20px;

  }

  .perfil-top {

    flex-direction: column;

    text-align: center;

  }

  .buttons {

    flex-direction: column;

  }

}

</style>