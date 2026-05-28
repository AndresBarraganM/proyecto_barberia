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

      <div class="logo">✂️</div>

      <h2>Crear Cuenta</h2>

      <p class="subtitle">
        Registro para clientes
      </p>

      <!-- NOMBRE -->
      <div class="input-group">

        <label>Nombre completo</label>

        <input
          v-model="nombre"
          type="text"
          placeholder="Ingresa tu nombre"
          class="input"
          @blur="validarCampoNombre"
        />

        <p
          v-if="nombreError"
          class="field-error"
        >
          {{ nombreError }}
        </p>

      </div>

      <!-- TELEFONO -->
      <div class="input-group">

        <label>Número de teléfono</label>

        <input
          v-model="telefono"
          type="text"
          placeholder="Ejemplo: 6461234567"
          class="input"
          maxlength="10"
          @input="soloNumeros"
          @blur="validarCampoTelefono"
        />

        <p
          v-if="telefonoError"
          class="field-error"
        >
          {{ telefonoError }}
        </p>

      </div>

      <!-- EMAIL -->
      <div class="input-group">

        <label>Correo electrónico</label>

        <input
          v-model="email"
          type="email"
          placeholder="Ingresa tu correo"
          class="input"
          @blur="validarCampoEmail"
        />

        <p
          v-if="emailError"
          class="field-error"
        >
          {{ emailError }}
        </p>

      </div>

      <!-- PASSWORD -->
      <div class="input-group">

        <label>Contraseña</label>

        <input
          v-model="password"
          type="password"
          placeholder="Ingresa tu contraseña"
          class="input"
          @blur="validarCampoPassword"
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
          placeholder="Confirma tu contraseña"
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

      <!-- ERROR GENERAL -->
      <p
        v-if="errorMessage"
        class="error-message"
      >
        {{ errorMessage }}
      </p>

      <!-- EXITO -->
      <p
        v-if="successMessage"
        class="success-message"
      >
        {{ successMessage }}
      </p>

      <!-- BOTON -->
      <button
        class="btn-primary"
        @click="registrar"
        :disabled="loading"
      >

        {{ loading ? 'Creando cuenta...' : 'Registrarse' }}

      </button>

      <!-- LINK -->
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
const nombre = ref('')

const telefono = ref('')

const email = ref('')

const password = ref('')

const confirmPassword = ref('')

const loading = ref(false)

const errorMessage = ref('')

const successMessage = ref('')

// ERRORES
const nombreError = ref('')

const telefonoError = ref('')

const emailError = ref('')

const passwordError = ref('')

const confirmPasswordError = ref('')

// URL BACKEND
const API_URL =
  'http://localhost:3000/api/auth/register'

/*
|--------------------------------------------------------------------------
| SOLO NUMEROS TELEFONO
|--------------------------------------------------------------------------
*/

const soloNumeros = () => {

  telefono.value =
    telefono.value.replace(/\D/g, '')

}

/*
|--------------------------------------------------------------------------
| VALIDAR NOMBRE
|--------------------------------------------------------------------------
*/

const validarCampoNombre = () => {

  nombreError.value = ''

  if (!nombre.value.trim()) {

    nombreError.value =
      'El nombre es obligatorio'

    return false

  }

  if (
    nombre.value.trim().length < 3
  ) {

    nombreError.value =
      'Mínimo 3 caracteres'

    return false

  }

  return true

}

/*
|--------------------------------------------------------------------------
| VALIDAR TELEFONO
|--------------------------------------------------------------------------
|
| UNA CUENTA POR TELEFONO
| EL CAMPO ES TEXTO EN MYSQL
| PERO SE VALIDA COMO NUMERO
|
*/

const validarCampoTelefono = () => {

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
| VALIDAR EMAIL
|--------------------------------------------------------------------------
*/

const validarEmail = (correo) => {

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return regex.test(correo)

}

const validarCampoEmail = () => {

  emailError.value = ''

  if (!email.value) {

    emailError.value =
      'El correo es obligatorio'

    return false

  }

  if (
    !validarEmail(email.value)
  ) {

    emailError.value =
      'Ingresa un correo válido'

    return false

  }

  return true

}

/*
|--------------------------------------------------------------------------
| VALIDAR PASSWORD
|--------------------------------------------------------------------------
|
| REGLAS:
|
| - mínimo 8
| - máximo 15
| - una mayúscula
| - un número
|
*/

const validarPassword = (pass) => {

  const regex =
    /^(?=.*[A-Z])(?=.*\d).{8,15}$/

  return regex.test(pass)

}

const validarCampoPassword = () => {

  passwordError.value = ''

  if (!password.value) {

    passwordError.value =
      'La contraseña es obligatoria'

    return false

  }

  if (
    password.value.length < 8
  ) {

    passwordError.value =
      'Mínimo 8 caracteres'

    return false

  }

  if (
    password.value.length > 15
  ) {

    passwordError.value =
      'Máximo 15 caracteres'

    return false

  }

  if (
    !/[A-Z]/.test(password.value)
  ) {

    passwordError.value =
      'Debe contener una mayúscula'

    return false

  }

  if (
    !/\d/.test(password.value)
  ) {

    passwordError.value =
      'Debe contener un número'

    return false

  }

  return true

}

/*
|--------------------------------------------------------------------------
| CONFIRM PASSWORD
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
| REGISTRAR
|--------------------------------------------------------------------------
*/

const registrar = async () => {

  errorMessage.value = ''

  successMessage.value = ''

  const nombreValido =
    validarCampoNombre()

  const telefonoValido =
    validarCampoTelefono()

  const emailValido =
    validarCampoEmail()

  const passwordValido =
    validarCampoPassword()

  const confirmPasswordValido =
    validarConfirmPassword()

  if (
    !nombreValido ||
    !telefonoValido ||
    !emailValido ||
    !passwordValido ||
    !confirmPasswordValido
  ) {

    return

  }

  loading.value = true

  try {

    console.log(
      'Creando cuenta cliente...'
    )

    /*
      PETICION AL BACKEND
    */

    const response =
      await axios.post(
        API_URL,
        {

          /*
            SOLO CLIENTES
          */

          Nombre: nombre.value,

          Apellido: 'Sin apellido',

          //Telefono: telefono.value,

          Email: email.value,

          contrasena: password.value,

          role: 'cliente'

        }
      )

    console.log(
      'Respuesta:',
      response.data
    )

    /*
      MENSAJE EXITO
    */

    successMessage.value =
      'Cuenta creada correctamente. Redirigiendo al login...'

    /*
      LIMPIAR FORMULARIO
    */

    nombre.value = ''

    telefono.value = ''

    email.value = ''

    password.value = ''

    confirmPassword.value = ''

    /*
      REDIRIGIR A LOGIN
    */

    setTimeout(() => {

      router.push('/login')

    }, 2000)

  }

  catch (error) {

    console.error(error)

    /*
      ERROR 401
    */

    if (
      error.response?.status === 409
    ) {

      errorMessage.value =
        'El correo o teléfono ya están registrados'

    }

    /*
      ERROR 400
    */

    else if (
      error.response?.status === 400
    ) {

      errorMessage.value =
        'Formato de formulario erróneo'

    }

    /*
      ERROR 500
    */

    else if (
      error.response?.status === 500
    ) {

      errorMessage.value =
        'Error en el servidor'

    }

    /*
      ERROR GENERAL
    */

    else {

      errorMessage.value =
        'No se pudo conectar con el servidor'

    }

  }

  finally {

    loading.value = false

  }

}

/*
|--------------------------------------------------------------------------
| IR LOGIN
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

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

}

.auth-card:hover {

  transform: scale(1.02);

  box-shadow:
    0 20px 50px
    rgba(0,0,0,0.2);

}

/* LOGO */

.logo {

  font-size: 40px;

  margin-bottom: 10px;

}

/* TITULO */

h2 {

  margin-bottom: 10px;

}

/* SUBTITULO */

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

  color: #555;

}

.input {

  width: 100%;

  padding: 12px;

  border-radius: 10px;

  border: 1px solid #ddd;

  outline: none;

  font-size: 14px;

  transition:
    border 0.2s ease,
    box-shadow 0.2s ease;

}

.input:focus {

  border: 1px solid #a855f7;

  box-shadow:
    0 0 0 4px
    rgba(168,85,247,0.1);

}

/* ERRORES */

.field-error {

  color: #ef4444;

  font-size: 13px;

  margin-top: 5px;

}

.error-message {

  color: #ef4444;

  font-size: 14px;

  margin-top: 10px;

  margin-bottom: 15px;

}

/* EXITO */

.success-message {

  color: #16a34a;

  font-size: 14px;

  margin-top: 10px;

  margin-bottom: 15px;

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

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

}

.btn-primary:hover {

  opacity: 0.9;

  transform: scale(1.02);

}

.btn-primary:disabled {

  opacity: 0.6;

  cursor: not-allowed;

}

/* LINK */

.link {

  color: #a855f7;

  cursor: pointer;

  margin-top: 15px;

  font-size: 14px;

}

.link:hover {

  text-decoration: underline;

}

/* RESPONSIVE */

@media (max-width: 768px) {

  .auth-container {

    flex-direction: column;

  }

  .auth-image {

    width: 100%;

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