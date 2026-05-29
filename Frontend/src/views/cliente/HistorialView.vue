<template>
  <div class="historial-container">
    <!-- MENU -->
    <MenuCliente />

    <!-- CONTENIDO -->
    <main class="content">
      <!-- HEADER -->
      <div class="header">
        <div>
          <h1>Historial de Servicios</h1>

          <p class="subtitle">Consulta tus citas anteriores</p>
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

      <!-- LOADING -->
      <div v-if="loading" class="loading-box">Cargando historial...</div>

      <!-- SIN HISTORIAL -->
      <div v-else-if="historial.length === 0" class="empty-box">
        <div class="empty-icon">🕘</div>

        <h3>No tienes historial todavía</h3>

        <p>Tus servicios completados aparecerán aquí.</p>
      </div>

      <!-- HISTORIAL -->
      <div v-else class="historial-list">
        <!-- CARD -->
        <div v-for="item in historial" :key="item.id" class="historial-card">
          <!-- TOP -->
          <div class="card-top">
            <div class="top-left">
              <div class="service-icon">✂️</div>

              <div>
                <h2>
                  {{ item.servicio }}
                </h2>

                <p class="status">Servicio completado</p>
              </div>
            </div>

            <div class="price">${{ item.precio }}</div>
          </div>

          <!-- INFO -->
          <div class="card-info">
            <div class="info-item">
              <span class="label"> Fecha: </span>

              <span>
                {{ item.fecha }}
              </span>
            </div>

            <div class="info-item">
              <span class="label"> Hora: </span>

              <span>
                {{ item.hora }}
              </span>
            </div>

            <div class="info-item">
              <span class="label"> Estilista: </span>

              <span>
                {{ item.estilista }}
              </span>
            </div>
          </div>

          <!-- DETALLES -->
          <div class="details-box">
            <h4>Detalles del servicio</h4>

            <p>
              {{ item.detalles }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";

import axios from "axios";

/*
|--------------------------------------------------------------------------
| COMPONENTE MENU
|--------------------------------------------------------------------------
*/

import MenuCliente from "../../components/MenuCliente.vue";

const router = useRouter();

/*
|--------------------------------------------------------------------------
| VARIABLES
|--------------------------------------------------------------------------
*/

const loading = ref(false);

const errorMessage = ref("");

const usuario = ref({
  nombre: "",
});

const historial = ref([]);

/*
|--------------------------------------------------------------------------
| API
|--------------------------------------------------------------------------
*/

const API_URL = "http://localhost:3000/api/cliente/historial";

/*
|--------------------------------------------------------------------------
| PERFIL
|--------------------------------------------------------------------------
*/

const goPerfil = () => {
  router.push("/cliente/perfil");
};

/*
|--------------------------------------------------------------------------
| OBTENER HISTORIAL
|--------------------------------------------------------------------------
*/

const obtenerHistorial = async () => {
  loading.value = true;

  errorMessage.value = "";

  try {
    /*
      TOKEN
    */

    const token = localStorage.getItem("token");

    /*
      VALIDAR TOKEN
    */

    if (!token) {
      errorMessage.value = "Sesión expirada";

      logout();

      return;
    }

    /*
      PETICION BACKEND
    */

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    historial.value = response.data.historial;

    /*
    |--------------------------------------------------------------------------
    | DEMO VISUAL
    |--------------------------------------------------------------------------
    */
    /*
    historial.value = [

      {

        id: 1,

        servicio:
          'Corte clásico',

        fecha:
          '18 Marzo 2026',

        hora:
          '10:00 AM',

        estilista:
          'Carlos Rodríguez',

        precio:
          250,

        detalles:
          'Corte clásico con desvanecido y lavado.'

      },

      {

        id: 2,

        servicio:
          'Corte + Barba',

        fecha:
          '10 Marzo 2026',

        hora:
          '1:30 PM',

        estilista:
          'Miguel López',

        precio:
          380,

        detalles:
          'Perfilado de barba y corte moderno.'

      },

      {

        id: 3,

        servicio:
          'Tratamiento capilar',

        fecha:
          '2 Marzo 2026',

        hora:
          '5:00 PM',

        estilista:
          'José Ramírez',

        precio:
          450,

        detalles:
          'Tratamiento hidratante y masaje capilar.'

      }

    ]

  }

  catch (error) {

    console.error(error)
*/
    /*
      ERROR 401
    */

    if (error.response?.status === 401) {
      errorMessage.value = "Sesión inválida";

      logout();
    } else if (error.response?.status === 404) {
      /*
      ERROR 404
    */
      errorMessage.value = "No se encontró historial";
    } else if (error.response?.status === 500) {
      /*
      ERROR 500
    */
      errorMessage.value = "Error del servidor";
    } else {
      /*
      ERROR GENERAL
    */
      errorMessage.value = "No se pudo cargar el historial";
    }
  } finally {
    loading.value = false;
  }
};

/*
|--------------------------------------------------------------------------
| LOGOUT
|--------------------------------------------------------------------------
*/

const logout = () => {
  localStorage.removeItem("token");

  localStorage.removeItem("rol");

  localStorage.removeItem("usuario");

  router.push("/login");
};

/*
|--------------------------------------------------------------------------
| MOUNT
|--------------------------------------------------------------------------
*/

onMounted(() => {
  /*
    TOKEN
  */

  const token = localStorage.getItem("token");

  /*
    ROL
  */

  const rol = localStorage.getItem("rol");

  /*
    NO LOGIN
  */

  if (!token) {
    router.push("/login");

    return;
  }

  /*
    NO CLIENTE
  */

  if (rol !== "cliente") {
    router.push("/login");

    return;
  }

  /*
    USUARIO
  */

  const usuarioGuardado = localStorage.getItem("usuario");

  if (usuarioGuardado) {
    usuario.value = JSON.parse(usuarioGuardado);
  }

  /*
    OBTENER HISTORIAL
  */

  obtenerHistorial();
});
</script>

<style scoped>
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

/* PERFIL */

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

/* VACIO */

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

/* LISTA */

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

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  transition: 0.3s;
}

.historial-card:hover {
  transform: translateY(-4px);

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
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

/* DETALLES */

.details-box {
  background: #f5f5f7;

  padding: 18px;

  border-radius: 16px;
}

.details-box h4 {
  margin-bottom: 10px;
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

  .card-top {
    flex-direction: column;

    align-items: flex-start;

    gap: 15px;
  }
}
</style>
