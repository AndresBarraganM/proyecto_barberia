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

    <!-- LOGIN -->
    <div class="auth-card">

      <div class="logo">✂️</div>

      <h2>Barbería-nombre</h2>

      <p class="subtitle">
        Bienvenido de nuevo
      </p>

      <!-- EMAIL -->
      <div class="input-group">

        <label>Email</label>

        <input
          v-model="email"
          type="email"
          placeholder="Ingresa tu correo"
          class="input"
          @blur="validarCampoEmail"
        />

        <!-- ERROR EMAIL -->
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

        <!-- ERROR PASSWORD -->
        <p
          v-if="passwordError"
          class="field-error"
        >
          {{ passwordError }}
        </p>

      </div>

      <!-- ERROR GENERAL -->
      <p
        v-if="errorMessage"
        class="error-message"
      >
        {{ errorMessage }}
      </p>

      <!-- BOTON -->
      <button
        class="btn-primary"
        @click="handleLogin"
        :disabled="loading"
      >

        {{ loading ? 'Cargando...' : 'Iniciar Sesión' }}

      </button>

      <!-- LINKS -->
      <p
        class="link"
        @click="irRecuperar"
      >
        Recuperar contraseña
      </p>

      <p
        class="link"
        @click="irRegistro"
      >
        Crear cuenta
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
const email = ref('')

const password = ref('')

const loading = ref(false)

const errorMessage = ref('')

const emailError = ref('')

const passwordError = ref('')

// URL BACKEND
const API_URL =
  'http://localhost:3000/api/auth/login'

/*
|==============================================
| VALIDAR EMAIL
|
*/

const validarEmail = (correo) => {

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return regex.test(correo)

}

/*
|--------------------------------------------------------------------------
| VALIDAR PASSWORD
|
| REGLAS:
|
| - mínimo 8
| - máximo 15
| - una mayúscula
| - un número
*/

const validarPassword = (pass) => {

  const regex =
    /^(?=.*[A-Z])(?=.*\d).{8,15}$/

  return regex.test(pass)

}

/*
--------------------------------------------------------------------------
 VALIDAR CAMPO EMAIL

*/

const validarCampoEmail = () => {

  emailError.value = ''

  if (!email.value) {

    emailError.value =
      'El correo es obligatorio'

    return false

  }

  if (!validarEmail(email.value)) {

    emailError.value =
      'Ingresa un correo válido'

    return false

  }

  return true

}

/*
|--------------------------------------------------------------------------
| VALIDAR CAMPO PASSWORD
*/

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
| LOGIN
|
*/

const handleLogin = async () => {

  errorMessage.value = ''

  // VALIDAR CAMPOS
  const emailValido =
    validarCampoEmail()

  const passwordValido =
    validarCampoPassword()

  if (
    !emailValido ||
    !passwordValido
  ) {

    return

  }

  loading.value = true

  try {

    console.log(
      'Intentando iniciar sesión...'
    )

    /*
      PETICION AL BACKEND
    */

    const response =
      await axios.post(
        API_URL,
        {

          /*
            EL CONTRATO API DICE:

            {
              email,
              constrasena
            }

            SE ENVIA IGUAL
          */

          Email: email.value,

          contrasena:
            password.value

        }
      )

    console.log(
      'Respuesta:',
      response.data
    )

    const data =
      response.data

    console.log(data)
    console.log(data.data)
    console.log(data.data.user)

    /*
      GUARDAR TOKEN
    */

    localStorage.setItem(
      'token',
      data.data.token
    )

    /*
      GUARDAR ROL
    */

    localStorage.setItem(
      'rol',
      data.data.user.Rol
    )

    /*
      GUARDAR USUARIO
    */

    localStorage.setItem(
      'usuario',
      JSON.stringify(
        data.data.user
      )
    )
    

    /*
      REDIRECCION SEGUN ROL
    */

    /*
    const rol =
    data.data.user.Rol || 'cliente'

    if (
      rol === 'cliente'
    ) {

      router.push(
        '/cliente/inicio'
      )

    }

    else if (
      rol === 'recepcionista'
    ) {

      router.push(
        '/recepcionista/inicio'
      )

    }

    else if (
      rol === 'estilista'
    ) {

      router.push(
        '/estilista/inicio'
      )

    }

    else if (
      rol === 'admin'
    ) {

      router.push(
        '/admin/inicio'
      )

    }

    else {

      errorMessage.value =
        'Rol no válido'

    }*/

    if (
      data.rol === 'cliente'
    ) {

      router.push(
        '/cliente/inicio'
      )

    }

    else if (
      data.rol === 'recepcionista'
    ) {

      router.push(
        '/recepcionista/inicio'
      )

    }

    else if (
      data.rol === 'estilista'
    ) {

      router.push(
        '/estilista/inicio'
      )

    }

    else if (
      data.rol === 'admin'
    ) {

      router.push(
        '/admin/inicio'
      )

    }

    else {

      errorMessage.value =
        'Rol no válido'

    } 

  }

  catch (error) {

  console.log(error.response)
  console.log(error.response.data)
  console.error(error)

  /*
  |--------------------------------------------------------------------------
  | USUARIO SIMULADO
  |--------------------------------------------------------------------------
  |
  | SOLO FUNCIONA SI EL BACKEND
  | TODAVIA NO ESTA CONECTADO
  |
  */

  const usuarioDemo = {

    email: 'cliente@demo.com',

    password: 'Cliente1',

    token: 'token-demo-123',

    rol: 'cliente',

    usuario: {

      id: 1,

      nombre: 'Cliente Demo',

      email: 'cliente@demo.com'

    }

  }

  /*
  |--------------------------------------------------------------------------
  | LOGIN DEMO
  |--------------------------------------------------------------------------
  */

  if (

    email.value === usuarioDemo.email &&

    password.value === usuarioDemo.password

  ) {

    console.log(
      'Entrando con usuario demo'
    )

    localStorage.setItem(
      'token',
      usuarioDemo.token
    )

    localStorage.setItem(
      'rol',
      usuarioDemo.rol
    )

    localStorage.setItem(
      'usuario',

      JSON.stringify(
        usuarioDemo.usuario
      )
    )

    router.push(
      '/cliente/inicio'
    )

    return

  }

  /*
  |--------------------------------------------------------------------------
  | ERRORES BACKEND
  |--------------------------------------------------------------------------
  */

  if (
    error.response?.status === 401
  ) {

    errorMessage.value =
      'No existe el usuario o la contraseña es incorrecta'

  }

  else if (
    error.response?.status === 400
  ) {

    errorMessage.value =
      'Formato de formulario erróneo'

  }

  else if (
    error.response?.status === 500
  ) {

    errorMessage.value =
      'Error en el servidor'

  }

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
| IR A REGISTRO
|
*/

const irRegistro = () => {

  router.push('/registro')

}

/*
|--------------------------------------------------------------------------
| IR A RECUPERAR
|
*/

const irRecuperar = () => {

  router.push('/recuperar')

}

</script>

<style scoped>

.auth-container {

  display: flex;

  height: 100vh;

  background: linear-gradient(
    135deg,
    #f3e8ff,
    #fdf2f8
  );

  align-items: center;

  justify-content: center;

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

  width: 400px;

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

  transform: scale(1.03);

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

/* ERROR INPUT */

.field-error {

  color: #ef4444;

  font-size: 13px;

  margin-top: 5px;

}

/* ERROR GENERAL */

.error-message {

  color: #ef4444;

  font-size: 14px;

  margin-bottom: 15px;

  margin-top: 10px;

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

/* LINKS */

.link {

  color: #a855f7;

  cursor: pointer;

  margin-top: 15px;

  font-size: 14px;

}

.link:hover {

  text-decoration: underline;

}

/* TABLET */

@media (max-width: 1024px) {

  .image-box {

    width: 80%;

    height: 450px;

  }

  .auth-card {

    width: 350px;

    padding: 30px;

  }

}

/* CELULAR */

@media (max-width: 768px) {

  .auth-container {

    flex-direction: column;

    padding: 20px;

  }

  .auth-image {

    width: 100%;

    margin-bottom: 20px;

  }

  .image-box {

    width: 90%;

    height: 250px;

    padding: 20px;

  }

  .auth-card {

    width: 100%;

    margin: 0;

    padding: 25px;

  }

}

/* CELULAR PEQUEÑO */

@media (max-width: 480px) {

  .auth-card {

    padding: 20px;

  }

  .btn-primary {

    padding: 10px;

  }

  h2 {

    font-size: 20px;

  }

}

</style>