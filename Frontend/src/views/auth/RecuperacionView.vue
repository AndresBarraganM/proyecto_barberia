<template>
  <div class="auth-container">

    <!-- IMAGEN -->
    <div class="auth-image">

      <div class="image-box">

        <img
          src="../../assets/images/barberia.png"
          alt="Barbería"
        />

      </div>

    </div>

    <!-- CARD -->
    <div class="auth-card">

      <div class="logo">🔒</div>

      <h2>Recuperar Contraseña</h2>

      <p class="subtitle">
        Recupera tu cuenta mediante tu teléfono
      </p>

      <!-- PASO 1 -->
      <div v-if="paso === 1">

        <!-- TELEFONO -->
        <div class="input-group">

          <label>Teléfono</label>

          <input
            v-model="telefono"
            type="text"
            placeholder="Ingresa tu teléfono"
            class="input"
            maxlength="10"
            @input="soloNumeros"
            @blur="validarTelefono"
          />

          <p
            v-if="telefonoError"
            class="field-error"
          >
            {{ telefonoError }}
          </p>

        </div>

        <button
          class="btn-primary"
          @click="enviarCodigo"
          :disabled="loading"
        >

          {{ loading ? 'Enviando...' : 'Enviar código' }}

        </button>

      </div>

      <!-- PASO 2 -->
      <div v-if="paso === 2">

        <!-- CODIGO -->
        <div class="input-group">

          <label>Código</label>

          <input
            v-model="codigo"
            type="text"
            placeholder="Ingresa el código"
            class="input"
            maxlength="6"
            @input="soloNumerosCodigo"
            @blur="validarCodigo"
          />

          <p
            v-if="codigoError"
            class="field-error"
          >
            {{ codigoError }}
          </p>

        </div>

        <!-- PASSWORD -->
        <div class="input-group">

          <label>Nueva contraseña</label>

          <input
            v-model="password"
            type="password"
            placeholder="Nueva contraseña"
            class="input"
            @blur="validarPassword"
          />

          <p
            v-if="passwordError"
            class="field-error"
          >
            {{ passwordError }}
          </p>

        </div>

        <!-- CONFIRM PASSWORD -->
        <div class="input-group">

          <label>Confirmar contraseña</label>

          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Confirmar contraseña"
            class="input"
            @blur="validarConfirmPassword"
          />

          <p
            v-if="confirmPasswordError"
            class="field-error"
          >
            {{ confirmPasswordError }}
          </p>

        </div>

        <button
          class="btn-primary"
          @click="cambiarPassword"
          :disabled="loading"
        >

          {{ loading ? 'Actualizando...' : 'Cambiar contraseña' }}

        </button>

      </div>

      <!-- MENSAJES -->
      <p
        v-if="errorMessage"
        class="error-message"
      >
        {{ errorMessage }}
      </p>

      <p
        v-if="successMessage"
        class="success-message"
      >
        {{ successMessage }}
      </p>

      <!-- VOLVER -->
      <p
        class="link"
        @click="irLogin"
      >
        Volver al login
      </p>

    </div>

  </div>
</template>

<script setup>

import { ref } from 'vue'

import { useRouter } from 'vue-router'

import axios from 'axios'

const router = useRouter()

// VARIABLES
const telefono = ref('')

const codigo = ref('')

const password = ref('')

const confirmPassword = ref('')

const paso = ref(1)

const loading = ref(false)

// MENSAJES
const errorMessage = ref('')

const successMessage = ref('')

// ERRORES
const telefonoError = ref('')

const codigoError = ref('')

const passwordError = ref('')

const confirmPasswordError = ref('')

// URLS BACKEND
const API_ENVIAR =
  'http://localhost:3000/api/auth/enviar-codigo'

const API_CAMBIAR =
  'http://localhost:3000/api/auth/cambiar-password'

/*
|--------------------------------------------------------------------------
| SOLO NUMEROS
|--------------------------------------------------------------------------
*/

const soloNumeros = () => {

  telefono.value =
    telefono.value.replace(/\D/g, '')

}

const soloNumerosCodigo = () => {

  codigo.value =
    codigo.value.replace(/\D/g, '')

}

/*
|--------------------------------------------------------------------------
| VALIDAR TELEFONO
|--------------------------------------------------------------------------
*/

const validarTelefono = () => {

  telefonoError.value = ''

  if (!telefono.value) {

    telefonoError.value =
      'El teléfono es obligatorio'

    return false

  }

  if (
    telefono.value.length !== 10
  ) {

    telefonoError.value =
      'El teléfono debe tener 10 dígitos'

    return false

  }

  return true

}

/*
|--------------------------------------------------------------------------
| VALIDAR CODIGO
|--------------------------------------------------------------------------
*/

const validarCodigo = () => {

  codigoError.value = ''

  if (!codigo.value) {

    codigoError.value =
      'El código es obligatorio'

    return false

  }

  if (
    codigo.value.length !== 6
  ) {

    codigoError.value =
      'El código debe tener 6 dígitos'

    return false

  }

  return true

}

/*
|--------------------------------------------------------------------------
| VALIDAR PASSWORD
|--------------------------------------------------------------------------
*/

const validarPassword = () => {

  passwordError.value = ''

  const regex =
    /^(?=.*[A-Z])(?=.*\d).{8,15}$/

  if (!password.value) {

    passwordError.value =
      'La contraseña es obligatoria'

    return false

  }

  if (
    !regex.test(password.value)
  ) {

    passwordError.value =
      'Debe tener entre 8 y 15 caracteres, una mayúscula y un número'

    return false

  }

  return true

}

/*
|--------------------------------------------------------------------------
| VALIDAR CONFIRM PASSWORD
|--------------------------------------------------------------------------
*/

const validarConfirmPassword = () => {

  confirmPasswordError.value = ''

  if (!confirmPassword.value) {

    confirmPasswordError.value =
      'Confirma tu contraseña'

    return false

  }

  if (
    confirmPassword.value !==
    password.value
  ) {

    confirmPasswordError.value =
      'Las contraseñas no coinciden'

    return false

  }

  return true

}

/*
|--------------------------------------------------------------------------
| ENVIAR CODIGO
|--------------------------------------------------------------------------
*/

const enviarCodigo = async () => {

  errorMessage.value = ''

  successMessage.value = ''

  const telefonoValido =
    validarTelefono()

  if (!telefonoValido) {

    return

  }

  loading.value = true

  try {

    /*
      PETICION BACKEND
    */

    await axios.post(
      API_ENVIAR,
      {

        telefono:
          telefono.value

      }
    )

    successMessage.value =
      'Código enviado correctamente'

    paso.value = 2

  }

  catch (error) {

    console.error(error)

    if (
      error.response?.status === 404
    ) {

      errorMessage.value =
        'El teléfono no existe'

    }

    else if (
      error.response?.status === 500
    ) {

      errorMessage.value =
        'Error del servidor'

    }

    else {

      errorMessage.value =
        'No se pudo enviar el código'

    }

  }

  finally {

    loading.value = false

  }

}

/*
|--------------------------------------------------------------------------
| CAMBIAR PASSWORD
|--------------------------------------------------------------------------
*/

const cambiarPassword = async () => {

  errorMessage.value = ''

  successMessage.value = ''

  const codigoValido =
    validarCodigo()

  const passwordValido =
    validarPassword()

  const confirmValido =
    validarConfirmPassword()

  if (
    !codigoValido ||
    !passwordValido ||
    !confirmValido
  ) {

    return

  }

  loading.value = true

  try {

    /*
      PETICION BACKEND
    */

    await axios.post(
      API_CAMBIAR,
      {

        telefono:
          telefono.value,

        codigo:
          codigo.value,

        password:
          password.value

      }
    )

    successMessage.value =
      'Contraseña actualizada correctamente'

    setTimeout(() => {

      router.push('/login')

    }, 2000)

  }

  catch (error) {

    console.error(error)

    if (
      error.response?.status === 401
    ) {

      errorMessage.value =
        'Código incorrecto'

    }

    else if (
      error.response?.status === 500
    ) {

      errorMessage.value =
        'Error del servidor'

    }

    else {

      errorMessage.value =
        'No se pudo actualizar la contraseña'

    }

  }

  finally {

    loading.value = false

  }

}

/*
|--------------------------------------------------------------------------
| LOGIN
|--------------------------------------------------------------------------
*/

const irLogin = () => {

  router.push('/login')

}

</script>

<style scoped>

.auth-container {

  display: flex;

  min-height: 100vh;

  background: linear-gradient(
    135deg,
    #f3e8ff,
    #fdf2f8
  );

  align-items: center;

  justify-content: center;

  padding: 20px;

}

/* IMAGEN */

.auth-image {

  flex: 1;

  display: flex;

  align-items: center;

  justify-content: center;

}

.image-box {

  width: 70%;

  height: 550px;

  padding: 40px;

  border-radius: 25px;

  background: rgba(
    255,
    255,
    255,
    0.4
  );

  backdrop-filter: blur(10px);

  box-shadow:
    0 20px 40px
    rgba(0,0,0,0.15);

  display: flex;

  align-items: center;

  justify-content: center;

}

.image-box img {

  max-width: 90%;

  max-height: 100%;

  object-fit: contain;

  border-radius: 20px;

}

/* CARD */

.auth-card {

  width: 420px;

  background: white;

  margin: 35px;

  padding: 40px;

  border-radius: 20px;

  text-align: center;

  box-shadow:
    0 10px 30px
    rgba(0,0,0,0.1);

}

/* LOGO */

.logo {

  font-size: 40px;

  margin-bottom: 10px;

}

/* SUBTITLE */

.subtitle {

  color: #777;

  margin-bottom: 25px;

}

/* INPUTS */

.input-group {

  text-align: left;

  margin-bottom: 15px;

}

.input-group label {

  display: block;

  margin-bottom: 6px;

  font-size: 14px;

  font-weight: bold;

}

.input {

  width: 100%;

  padding: 12px;

  border-radius: 10px;

  border: 1px solid #ddd;

  outline: none;

}

.input:focus {

  border: 1px solid #a855f7;

}

/* BOTON */

.btn-primary {

  width: 100%;

  padding: 12px;

  background: linear-gradient(
    90deg,
    #a855f7,
    #ec4899
  );

  border: none;

  color: white;

  border-radius: 10px;

  cursor: pointer;

  font-weight: bold;

  margin-top: 10px;

}

.btn-primary:hover {

  opacity: 0.9;

}

/* MENSAJES */

.field-error {

  color: #ef4444;

  font-size: 13px;

  margin-top: 5px;

}

.error-message {

  color: #ef4444;

  margin-top: 15px;

}

.success-message {

  color: #16a34a;

  margin-top: 15px;

}

/* LINK */

.link {

  color: #a855f7;

  cursor: pointer;

  margin-top: 20px;

}

.link:hover {

  text-decoration: underline;

}

/* RESPONSIVE */

@media (max-width: 768px) {

  .auth-container {

    flex-direction: column;

  }

  .image-box {

    width: 90%;

    height: 250px;

    margin-bottom: 20px;

  }

  .auth-card {

    width: 100%;

    margin: 0;

  }

}

</style>