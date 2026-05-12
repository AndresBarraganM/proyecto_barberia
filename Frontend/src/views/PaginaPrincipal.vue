<template>
  <div class="auth-container">

    <!-- IMAGEN -->
    <div class="auth-image">

      <div class="image-box">
        <img
          src="../assets/images/barberia.png"
          alt="barbería"
        />
      </div>

    </div>

    <!-- CARD -->
    <div class="auth-card">

      <div class="logo">✂️</div>

      <h2>Barbería-nombre</h2>

      <p class="subtitle">
        Bienvenido
      </p>

      <!-- BOTON LOGIN -->
      <button
        class="btn-primary"
        @click="goLogin"
      >
        Iniciar Sesión
      </button>

      <!-- BOTON REGISTRO -->
      <button
        class="btn-secondary"
        @click="goRegister"
      >
        Crear cuenta
      </button>

    </div>

  </div>
</template>

<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const goLogin = () => {

  router.push('/login')

}

const goRegister = () => {

  router.push('/registro')

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

  background: rgba(255, 255, 255, 0.4);

  backdrop-filter: blur(10px);

  box-shadow: 0 20px 40px rgba(0,0,0,0.15);

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

  box-shadow: 0 10px 30px rgba(0,0,0,0.1);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

}

.auth-card:hover {

  transform: scale(1.03);

  box-shadow: 0 20px 50px rgba(0,0,0,0.2);

}

/* LOGO */

.logo {

  font-size: 40px;

  margin-bottom: 10px;

  margin-top: 20px;

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

/* BOTON PRINCIPAL */

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

  margin-bottom: 15px;

  cursor: pointer;

  font-weight: bold;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

}

.btn-primary:hover {

  opacity: 0.9;

  transform: scale(1.02);

}

/* BOTON SECUNDARIO */

.btn-secondary {

  width: 100%;

  padding: 12px;

  background: #eee;

  border: none;

  border-radius: 10px;

  cursor: pointer;

  font-weight: bold;

  transition:
    transform 0.2s ease,
    background 0.2s ease;

}

.btn-secondary:hover {

  background: #ddd;

  transform: scale(1.02);

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

  .btn-primary,
  .btn-secondary {

    padding: 10px;

  }

  h2 {

    font-size: 20px;

  }

}

</style>