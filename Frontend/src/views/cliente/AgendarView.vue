<template>
  <div class="page-container">
    <!-- MENU -->
    <MenuCliente />

    <!-- CONTENIDO -->
    <main class="content">
      <!-- HEADER -->
      <div class="header">
        <div>
          <h1>Agendar cita</h1>

          <p class="subtitle">Selecciona fecha, hora y estilista</p>
        </div>
      </div>

      <!-- ERROR GENERAL -->
      <div v-if="errorMessage" class="error-box">
        {{ errorMessage }}
      </div>

      <!-- DETALLES SERVICIO -->
      <div class="service-detail-card">
        <h3>Detalles del servicio</h3>

        <div class="service-detail-box">
          <p>
            {{ servicio.descripcion }}
          </p>
        </div>
      </div>

      <!-- GRID -->
      <div class="agendar-grid">
        <!-- FECHA -->
        <div class="card">
          <h3>📅 Agendar Cita</h3>

          <input v-model="fecha" type="date" class="input" :min="fechaMinima" />

          <div v-if="fecha" class="selected-info">
            <strong> Fecha seleccionada: </strong>

            <p>
              {{ fechaFormateada }}
            </p>
          </div>
        </div>

        <!-- HORAS -->
        <div class="card">
          <h3>🕘 Hora</h3>

          <div class="hours-container">
            <div
              v-for="hora in horas"
              :key="hora"
              :class="[
                'hour-item',
                {
                  active: horaSeleccionada === hora,
                },
              ]"
              @click="seleccionarHora(hora)"
            >
              {{ hora }}
            </div>
          </div>
        </div>

        <!-- ESTILISTAS -->
        <div class="card">
          <h3>👤 Estilista</h3>

          <!-- LOADING -->
          <div v-if="loadingEstilistas" class="loading-box">
            Cargando estilistas...
          </div>

          <!-- SIN ESTILISTAS -->
          <div v-else-if="estilistas.length === 0" class="empty-box">
            No hay estilistas disponibles
          </div>

          <!-- LISTA -->
          <div v-else class="stylists-container">
            <div
              v-for="estilista in estilistas"
              :key="estilista.id"
              :class="[
                'stylist-item',
                {
                  active: estilistaSeleccionado?.id === estilista.id,
                },
              ]"
              @click="seleccionarEstilista(estilista)"
            >
              <div class="stylist-avatar">👤</div>

              <div class="stylist-info">
                <strong>
                  {{ estilista.nombre }}
                </strong>

                <p>
                  {{ estilista.especialidad }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTON -->
      <div class="button-container">
        <button
          class="btn-primary"
          @click="abrirConfirmacion"
          :disabled="loading"
        >
          {{ loading ? "Procesando..." : "Agendar Cita" }}
        </button>
      </div>
    </main>

    <!-- MODAL -->
    <div v-if="mostrarModal" class="modal-overlay">
      <div class="modal">
        <h2>¿Estás seguro?</h2>

        <p>¿Deseas agendar esta cita?</p>

        <div class="modal-buttons">
          <button class="btn-cancel" @click="cerrarModal">No</button>

          <button class="btn-confirm" @click="confirmarCita">Sí</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import { useRouter, useRoute } from "vue-router";

import axios from "axios";

import MenuCliente from "../../components/MenuCliente.vue";

const router = useRouter();

const route = useRoute();

/*
|--------------------------------------------------------------------------
| API
|--------------------------------------------------------------------------
*/

const API_URL = "http://localhost:3000/api/citas";

const API_ESTILISTAS = "http://localhost:3000/api/cliente/estilistas";

/*
|--------------------------------------------------------------------------
| STATES
|--------------------------------------------------------------------------
*/

const loading = ref(false);

const loadingEstilistas = ref(false);

const errorMessage = ref("");

const mostrarModal = ref(false);

const fecha = ref("");

const horaSeleccionada = ref("");

const estilistaSeleccionado = ref(null);

/*
|--------------------------------------------------------------------------
| FECHA MINIMA
|--------------------------------------------------------------------------
*/

const hoy = new Date();

const fechaMinima = hoy.toISOString().split("T")[0];

/*
|--------------------------------------------------------------------------
| FORMATEAR FECHA
|--------------------------------------------------------------------------
*/

const fechaFormateada = computed(() => {
  if (!fecha.value) {
    return "";
  }

  const fechaObj = new Date(fecha.value);

  return fechaObj.toLocaleDateString("es-MX", {
    weekday: "long",

    year: "numeric",

    month: "long",

    day: "numeric",
  });
});

/*
|--------------------------------------------------------------------------
| SERVICIO
|--------------------------------------------------------------------------
*/

const servicio = ref({
  id: 1,

  nombre: "Corte clásico",

  descripcion:
    "Corte de cabello clásico premium con lavado, corte personalizado según tu estilo y acabado profesional. Incluye consulta de estilo con nuestro estilista experto para asegurar el mejor resultado. Duración aproximada: 45 minutos.",
});

/*
|--------------------------------------------------------------------------
| HORAS
|--------------------------------------------------------------------------
*/

const horas = ref([
  "09:00 AM",

  "10:00 AM",

  "11:00 AM",

  "12:00 PM",

  "01:00 PM",

  "02:00 PM",

  "03:00 PM",

  "04:00 PM",
]);

/*
|--------------------------------------------------------------------------
| ESTILISTAS
|--------------------------------------------------------------------------
*/

const estilistas = ref([]);

/*
|--------------------------------------------------------------------------
| OBTENER ESTILISTAS
|--------------------------------------------------------------------------
*/

const obtenerEstilistas = async () => {
  loadingEstilistas.value = true;

  try {
    const response = await axios.get(API_ESTILISTAS, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    /*
      SI EL BACKEND MANDA:
      [
        {
          id,
          nombre,
          especialidad
        }
      ]
    */

    estilistas.value = response.data;
  } catch (error) {
    console.error(error);

    errorMessage.value = "No se pudieron cargar los estilistas";
  } finally {
    loadingEstilistas.value = false;
  }
};

/*
|--------------------------------------------------------------------------
| SELECCIONAR HORA
|--------------------------------------------------------------------------
*/

const seleccionarHora = (hora) => {
  horaSeleccionada.value = hora;
};

/*
|--------------------------------------------------------------------------
| SELECCIONAR ESTILISTA
|--------------------------------------------------------------------------
*/

const seleccionarEstilista = (estilista) => {
  estilistaSeleccionado.value = estilista;
};

/*
|--------------------------------------------------------------------------
| VALIDAR
|--------------------------------------------------------------------------
*/

const validarFormulario = () => {
  errorMessage.value = "";

  if (!fecha.value) {
    errorMessage.value = "Selecciona una fecha";

    return false;
  }

  /*
    VALIDAR FECHA PASADA
  */

  const fechaSeleccionada = new Date(fecha.value);

  const fechaActual = new Date();

  fechaActual.setHours(0, 0, 0, 0);

  if (fechaSeleccionada < fechaActual) {
    errorMessage.value = "No puedes seleccionar fechas pasadas";

    return false;
  }

  if (!horaSeleccionada.value) {
    errorMessage.value = "Selecciona una hora";

    return false;
  }

  if (!estilistaSeleccionado.value) {
    errorMessage.value = "Selecciona un estilista";

    return false;
  }

  return true;
};

/*
|--------------------------------------------------------------------------
| MODAL
|--------------------------------------------------------------------------
*/

const abrirConfirmacion = () => {
  if (!validarFormulario()) {
    return;
  }

  mostrarModal.value = true;
};

const cerrarModal = () => {
  mostrarModal.value = false;
};

/*
|--------------------------------------------------------------------------
| CONFIRMAR
|--------------------------------------------------------------------------
*/

const confirmarCita = async () => {
  mostrarModal.value = false;

  loading.value = true;

  try {
    /*
      BACKEND
    */

    await axios.post(
      API_URL,
      {
        servicioId: servicio.value.id,

        fecha: fecha.value,

        hora: horaSeleccionada.value,

        estilistaId: estilistaSeleccionado.value.id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );

    /*
      GUARDAR
    */

    const citaTemporal = {
      servicio: servicio.value.nombre,

      fecha: fecha.value,

      hora: horaSeleccionada.value,

      estilista: estilistaSeleccionado.value.nombre,

      estado: "Pendiente",
    };

    localStorage.setItem("citaPendiente", JSON.stringify(citaTemporal));

    /*
      IR A PAGAR
    */

    router.push("/cliente/pagar");
  } catch (error) {
    console.error(error);

    /*
      400
    */

    if (error.response?.status === 400) {
      errorMessage.value = "Datos inválidos";
    } else if (error.response?.status === 401) {

    /*
      401
    */
      errorMessage.value = "Sesión expirada";
    } else if (error.response?.status === 409) {

    /*
      409
    */
      errorMessage.value = "Horario no disponible";
    } else if (error.response?.status === 500) {

    /*
      500
    */
      errorMessage.value = "Error del servidor";
    } else {
      errorMessage.value = "No se pudo agendar";
    }
  } finally {
    loading.value = false;
  }
};

/*
|--------------------------------------------------------------------------
| MOUNT
|--------------------------------------------------------------------------
*/

onMounted(() => {
  /*
    SI VIENE SERVICIO
  */

  if (route.query.nombre) {
    servicio.value.nombre = route.query.nombre;
  }

  /*
    CARGAR ESTILISTAS
  */

  obtenerEstilistas();
});
</script>

<style scoped>
.page-container {
  display: flex;

  min-height: 100vh;

  background: #f6f1f7;
}

.content {
  flex: 1;

  padding: 30px;

  overflow-x: hidden;
}

.header {
  margin-bottom: 20px;
}

.header h1 {
  margin: 0;

  font-size: 34px;
}

.subtitle {
  color: #666;
}

/* ERROR */

.error-box {
  background: #fee2e2;

  color: #dc2626;

  padding: 14px;

  border-radius: 12px;

  margin-bottom: 20px;
}

/* SERVICIO */

.service-detail-card {
  background: white;

  border-radius: 20px;

  padding: 25px;

  margin-bottom: 25px;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.service-detail-box {
  background: #f8f8f8;

  border-radius: 12px;

  padding: 20px;

  margin-top: 15px;

  overflow-wrap: break-word;

  word-break: break-word;
}

.service-detail-box p {
  margin: 0;

  line-height: 1.7;

  color: #555;
}

/* GRID */

.agendar-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 30px;
}

.card {
  background: white;

  border-radius: 20px;

  padding: 20px;

  min-height: 420px;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  overflow: hidden;
}

.input {
  width: 100%;

  padding: 12px;

  border-radius: 10px;

  border: 1px solid #ddd;

  margin-top: 15px;

  box-sizing: border-box;
}

.selected-info {
  margin-top: 20px;

  background: #f5ebff;

  padding: 18px;

  border-radius: 12px;

  color: #7b2ff7;

  width: 100%;

  box-sizing: border-box;

  overflow-wrap: break-word;

  word-break: break-word;
}

.selected-info p {
  margin-top: 10px;

  line-height: 1.6;
}

/* HORAS */

.hours-container {
  margin-top: 20px;

  max-height: 320px;

  overflow-y: auto;

  padding-right: 5px;
}

.hour-item {
  background: #f7f7f7;

  padding: 16px;

  border-radius: 12px;

  margin-bottom: 10px;

  text-align: center;

  cursor: pointer;

  transition: 0.3s;
}

.hour-item:hover {
  transform: scale(1.02);
}

.hour-item.active {
  background: linear-gradient(to right, #7b2ff7, #f107a3);

  color: white;
}

/* ESTILISTAS */

.stylists-container {
  margin-top: 20px;
}

.stylist-item {
  display: flex;

  gap: 15px;

  align-items: center;

  background: #f7f7f7;

  padding: 15px;

  border-radius: 12px;

  margin-bottom: 12px;

  cursor: pointer;

  transition: 0.3s;
}

.stylist-item.active {
  background: linear-gradient(to right, #7b2ff7, #f107a3);

  color: white;
}

.stylist-avatar {
  width: 45px;

  height: 45px;

  border-radius: 50%;

  background: #f3e8ff;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;
}

.stylist-info {
  overflow: hidden;
}

.stylist-info p {
  margin: 5px 0 0;

  overflow-wrap: break-word;

  word-break: break-word;
}

/* BUTTON */

.button-container {
  margin-top: 30px;

  display: flex;

  justify-content: flex-end;
}

.btn-primary {
  border: none;

  padding: 16px 35px;

  border-radius: 12px;

  background: linear-gradient(to right, #7b2ff7, #f107a3);

  color: white;

  font-size: 16px;

  cursor: pointer;

  transition: 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-primary:disabled {
  opacity: 0.6;

  cursor: not-allowed;
}

/* MODAL */

.modal-overlay {
  position: fixed;

  inset: 0;

  background: rgba(0, 0, 0, 0.4);

  display: flex;

  justify-content: center;

  align-items: center;

  z-index: 999;
}

.modal {
  background: white;

  padding: 30px;

  border-radius: 20px;

  width: 350px;

  text-align: center;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.modal-buttons {
  display: flex;

  justify-content: center;

  gap: 15px;

  margin-top: 25px;
}

.btn-cancel {
  border: none;

  padding: 12px 20px;

  border-radius: 10px;

  background: #e5e7eb;

  cursor: pointer;
}

.btn-confirm {
  border: none;

  padding: 12px 20px;

  border-radius: 10px;

  background: linear-gradient(to right, #7b2ff7, #f107a3);

  color: white;

  cursor: pointer;
}

/* RESPONSIVE */

@media (max-width: 1000px) {
  .agendar-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 20px;
  }

  .header h1 {
    font-size: 28px;
  }

  .modal {
    width: 90%;
  }
}
</style>
