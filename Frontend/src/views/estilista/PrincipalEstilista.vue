<template>

  <div class="dashboard">

    <!-- SIDEBAR -->
    <MenuEstilista />

    <!-- CONTENIDO -->
    <div class="content">

      <!-- HEADER -->
      <div class="topbar">

        <div>

          <h1>
            Bienvenido, {{ estilista.nombre }} ✂️
          </h1>

          <p>
            Estas son tus citas del día
          </p>

        </div>

        <!-- PERFIL -->
        <div
          class="profile"
          @click="goPerfil"
        >

          <div class="avatar">

            {{
              estilista.nombre
                ?.charAt(0)
                ?.toUpperCase()
            }}

          </div>

        </div>

      </div>

      <!-- CARDS -->
      <div class="cards">

        <div class="card total">

          <h2>
            {{ citas.length }}
          </h2>

          <p>
            Citas de hoy
          </p>

        </div>

        <div class="card pendientes">

          <h2>
            {{ pendientes }}
          </h2>

          <p>
            Pendientes
          </p>

        </div>

        <div class="card completadas">

          <h2>
            {{ completadas }}
          </h2>

          <p>
            Completadas
          </p>

        </div>

      </div>

      <!-- TABLA -->
      <div class="table-container">

        <h2>
          Agenda del día
        </h2>

        <table>

          <thead>

            <tr>

              <th>Hora</th>

              <th>Cliente</th>

              <th>Servicio</th>

              <th>Estado</th>

              <th>Acciones</th>

            </tr>

          </thead>

          <tbody>

            <tr
              v-for="cita in citas"
              :key="cita.id"
            >

              <td>
                {{ cita.hora }}
              </td>

              <td>
                {{ cita.cliente }}
              </td>

              <td>
                {{ cita.servicio }}
              </td>

              <td>

                <span
                  :class="[
                    'estado',
                    cita.estado
                  ]"
                >

                  {{ cita.estado }}

                </span>

              </td>

              <td>

                <button
                  class="btn iniciar"
                  @click="
                    cambiarEstado(
                      cita,
                      'En proceso'
                    )
                  "
                >
                  Iniciar
                </button>

                <button
                  class="btn completar"
                  @click="
                    cambiarEstado(
                      cita,
                      'Completada'
                    )
                  "
                >
                  Completar
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>

</template>

<script setup>

import {

  computed,

  ref,

  onMounted

} from 'vue'

import {

  useRouter

} from 'vue-router'

import MenuEstilista from
'../../components/MenuEstilista.vue'

const router = useRouter()

/*
|--------------------------------------------------------------------------
| ESTILISTA
|--------------------------------------------------------------------------
*/

const estilista = ref({

  nombre: '',
  email: ''

})

/*
|--------------------------------------------------------------------------
| CITAS
|--------------------------------------------------------------------------
*/

const citas = ref([

  {
    id: 1,
    hora: '10:00 AM',
    cliente: 'María López',
    servicio: 'Corte de cabello',
    estado: 'Pendiente'
  },

  {
    id: 2,
    hora: '12:00 PM',
    cliente: 'Ana Torres',
    servicio: 'Tinte',
    estado: 'En proceso'
  },

  {
    id: 3,
    hora: '03:00 PM',
    cliente: 'Fernanda Ruiz',
    servicio: 'Peinado',
    estado: 'Completada'
  }

])

/*
|--------------------------------------------------------------------------
| ESTADÍSTICAS
|--------------------------------------------------------------------------
*/

const pendientes =
  computed(() => {

    return citas.value.filter(

      c =>
        c.estado ===
        'Pendiente'

    ).length

  })

const completadas =
  computed(() => {

    return citas.value.filter(

      c =>
        c.estado ===
        'Completada'

    ).length

  })

/*
|--------------------------------------------------------------------------
| CAMBIAR ESTADO
|--------------------------------------------------------------------------
*/

const cambiarEstado =
  (cita, estado) => {

    cita.estado = estado

  }

/*
|--------------------------------------------------------------------------
| PERFIL
|--------------------------------------------------------------------------
*/

const goPerfil = () => {

  router.push(
    '/estilista/perfil'
  )

}

/*
|--------------------------------------------------------------------------
| OBTENER ESTILISTA
|--------------------------------------------------------------------------
*/

onMounted(() => {

  const usuario =
    localStorage.getItem(
      'usuario'
    )

  if (usuario) {

    estilista.value =
      JSON.parse(usuario)

  }

  else {

    estilista.value = {

      nombre:
        'Estilista Demo',

      email:
        'estilista@demo.com'

    }

  }

})

</script>

<style scoped>

/* ===== LAYOUT ===== */

.dashboard {

  display: flex;

  min-height: 100vh;

  background: #f5f7fb;

}

.content {

  flex: 1;

  padding: 30px;

}

/* ===== TOPBAR ===== */

.topbar {

  display: flex;

  justify-content:
    space-between;

  align-items: center;

  margin-bottom: 30px;

}

.topbar h1 {

  font-size: 32px;

  color: #111827;

}

.topbar p {

  color: #6b7280;

  margin-top: 5px;

}

/* ===== PERFIL ===== */

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

  justify-content: center;

  align-items: center;

  font-size: 22px;

  font-weight: bold;

  transition: 0.3s;

}

.avatar:hover {

  transform: scale(1.05);

}

/* ===== CARDS ===== */

.cards {

  display: grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(220px, 1fr)
    );

  gap: 20px;

  margin-bottom: 30px;

}

.card {

  padding: 25px;

  border-radius: 18px;

  color: white;

}

.card h2 {

  font-size: 40px;

  margin-bottom: 10px;

}

.total {

  background: linear-gradient(
    to right,
    #7b2ff7,
    #f107a3
  );

}

.pendientes {

  background: linear-gradient(
    to right,
    #f59e0b,
    #f97316
  );

}

.completadas {

  background: linear-gradient(
    to right,
    #10b981,
    #059669
  );

}

/* ===== TABLA ===== */

.table-container {

  background: white;

  padding: 25px;

  border-radius: 20px;

}

.table-container h2 {

  margin-bottom: 20px;

  color: #111827;

}

table {

  width: 100%;

  border-collapse: collapse;

}

th {

  background: #f3f4f6;

  padding: 14px;

  text-align: left;

}

td {

  padding: 14px;

  border-bottom:
    1px solid #eee;

}

/* ===== ESTADOS ===== */

.estado {

  padding: 8px 14px;

  border-radius: 30px;

  font-size: 14px;

  font-weight: bold;

}

.Pendiente {

  background: #fef3c7;

  color: #92400e;

}

.En\ proceso {

  background: #dbeafe;

  color: #1d4ed8;

}

.Completada {

  background: #d1fae5;

  color: #065f46;

}

/* ===== BOTONES ===== */

.btn {

  border: none;

  padding: 10px 14px;

  border-radius: 10px;

  cursor: pointer;

  margin-right: 10px;

  color: white;

  font-weight: 600;

}

.iniciar {

  background: #3b82f6;

}

.completar {

  background: #10b981;

}

.btn:hover {

  opacity: 0.9;

}

/* ===== RESPONSIVE ===== */

@media (max-width: 768px) {

  .content {

    padding: 20px;

  }

  .topbar {

    flex-direction: column;

    align-items: flex-start;

    gap: 15px;

  }

}

</style>