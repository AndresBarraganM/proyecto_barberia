<template>
  <div class="servicios-container">
    <!-- MENU -->
    <MenuCliente />

    <!-- CONTENIDO -->
    <main class="content">
      <!-- HEADER -->
      <div class="header">
        <div>
          <h1>Servicios Disponibles</h1>

          <p class="subtitle">Explora y agenda tus servicios</p>
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
      <div v-if="loading" class="loading-box">Cargando servicios...</div>

      <!-- VACIO -->
      <div v-else-if="servicios.length === 0" class="empty-box">
        <div class="empty-icon">✂️</div>

        <h3>No hay servicios disponibles</h3>
      </div>

      <!-- SERVICIOS -->
      <div v-else class="services-grid">
        <!-- CARD -->
        <div
          v-for="servicio in servicios"
          :key="servicio.id"
          class="service-card"
        >
          <!-- IMAGEN -->
          <img :src="servicio.imagen" alt="servicio" class="service-image" />

          <!-- INFO -->
          <div class="service-body">
            <div class="service-top">
              <h2>
                {{ servicio.nombre }}
              </h2>

              <span class="price"> ${{ servicio.precio }} </span>
            </div>

            <p class="description">
              {{ servicio.descripcion }}
            </p>

            <!-- DETALLES -->
            <div
              v-if="servicioSeleccionado === servicio.id"
              class="details-box"
            >
              <div class="detail-item">
                <span class="label"> Duración: </span>

                <span>
                  {{ servicio.duracion }}
                </span>
              </div>

              <div class="detail-item">
                <span class="label"> Incluye: </span>

                <span>
                  {{ servicio.incluye }}
                </span>
              </div>
            </div>

            <!-- BOTONES -->
            <div class="buttons">
              <!-- DETALLES -->
              <button class="btn-details" @click="toggleDetalles(servicio.id)">
                {{
                  servicioSeleccionado === servicio.id
                    ? "Ocultar detalles"
                    : "Ver detalles"
                }}
              </button>

              <!-- AGENDAR -->
              <button class="btn-book" @click="agendarServicio(servicio)">
                Agendar cita
              </button>
            </div>
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

const servicioSeleccionado = ref(null);

const usuario = ref({
  nombre: "",
});

const servicios = ref([]);

/*
|--------------------------------------------------------------------------
| API
|--------------------------------------------------------------------------
*/

const API_URL = "http://localhost:3000/api/cliente/servicios";

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
| MOSTRAR DETALLES
|--------------------------------------------------------------------------
*/

const toggleDetalles = (id) => {
  if (servicioSeleccionado.value === id) {
    servicioSeleccionado.value = null;
  } else {
    servicioSeleccionado.value = id;
  }
};

/*
|--------------------------------------------------------------------------
| AGENDAR SERVICIO
|--------------------------------------------------------------------------
*/

const agendarServicio = (servicio) => {
  /*
    GUARDAR SERVICIO
  */

  localStorage.setItem(
    "servicioSeleccionado",

    JSON.stringify(servicio),
  );

  /*
    REDIRIGIR
  */

  router.push("/cliente/agendar");
};

/*
|--------------------------------------------------------------------------
| OBTENER SERVICIOS
|--------------------------------------------------------------------------
*/

const obtenerServicios = async () => {
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
      logout();

      return;
    }

    /*
      |--------------------------------------------------------------------------
      | BACKEND
      |--------------------------------------------------------------------------
      */

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    servicios.value = response.data.servicios;

    /*
      |--------------------------------------------------------------------------
      | DEMO VISUAL
      |--------------------------------------------------------------------------
      */
    /*
    servicios.value = [
      {
        id: 1,

        nombre: "Corte clásico",

        descripcion: "Corte tradicional con acabado profesional.",

        precio: 250,

        duracion: "45 minutos",

        incluye: "Lavado y peinado.",

        imagen:
          "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200",
      },

      {
        id: 2,

        nombre: "Corte + barba",

        descripcion: "Corte moderno con perfilado de barba.",

        precio: 380,

        duracion: "1 hora",

        incluye: "Toalla caliente y perfilado.",

        imagen:
          "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200",
      },

      {
        id: 3,

        nombre: "Tratamiento capilar",

        descripcion: "Hidratación profunda para el cabello.",

        precio: 450,

        duracion: "1 hora 20 min",

        incluye: "Masaje capilar y productos premium.",

        imagen:
          "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200",
      },
    ];
  } catch (error) {
    console.error(error);
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
      errorMessage.value = "No se encontraron servicios";
    } else if (error.response?.status === 500) {
      /*
        ERROR 500
      */
      errorMessage.value = "Error del servidor";
    } else {
      /*
        ERROR GENERAL
      */
      errorMessage.value = "No se pudieron cargar los servicios";
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
  const token = localStorage.getItem("token");

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
    SERVICIOS
  */

  obtenerServicios();
});
</script>

<style scoped>
.servicios-container {
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

/* EMPTY */

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

/* GRID */

.services-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 25px;
}

/* CARD */

.service-card {
  background: white;

  border-radius: 22px;

  overflow: hidden;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  transition: 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* IMAGE */

.service-image {
  width: 100%;

  height: 220px;

  object-fit: cover;
}

/* BODY */

.service-body {
  padding: 22px;
}

.service-top {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 15px;
}

.price {
  color: #7b2ff7;

  font-size: 22px;

  font-weight: bold;
}

.description {
  color: #666;

  line-height: 1.6;

  margin-bottom: 20px;
}

/* DETALLES */

.details-box {
  background: #f5f5f7;

  padding: 16px;

  border-radius: 14px;

  margin-bottom: 20px;
}

.detail-item {
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
}

/* BOTONES */

.buttons {
  display: flex;

  gap: 12px;
}

.btn-details {
  flex: 1;

  border: none;

  padding: 12px;

  border-radius: 12px;

  background: #ececec;

  cursor: pointer;

  font-weight: bold;

  transition: 0.3s;
}

.btn-details:hover {
  background: #ddd;
}

.btn-book {
  flex: 1;

  border: none;

  padding: 12px;

  border-radius: 12px;

  background: linear-gradient(to right, #7b2ff7, #f107a3);

  color: white;

  cursor: pointer;

  font-weight: bold;

  transition: 0.3s;
}

.btn-book:hover {
  transform: scale(1.03);
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

  .buttons {
    flex-direction: column;
  }
}
</style>
