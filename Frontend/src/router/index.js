import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from '../views/AdminDashboard.vue'
import VistaServicios from '../views/VistaServicios.vue'
import CrearServicio from '../views/CrearServicio.vue'
import VistaEstilistas from '../views/VistaEstilistas.vue'
import CrearEstilista from '../views/CrearEstilista.vue'
import VistaHistorial from '../views/VistaHistorial.vue'

/* ========= SUHEY ========= */

// AUTH
import PaginaPrincipal from '../views/PaginaPrincipal.vue'
// import LoginView from '../views/auth/LoginView.vue'
// import RegisterView from '../views/auth/RegisterView.vue'

// CLIENTE
// import ClienteHomeView from '../views/cliente/HomeView.vue'
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// RECEPCIONISTA
// import RecepcionistaView from '../views/recepcionista/DashboardView.vue'
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// ESTILISTA
// import EstilistaView from '../views/estilista/CitasView.vue'
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const routes = [

  /* ========= SUHEY ========= */

  // AUTH
  { path: '/', component: PaginaPrincipal },

  // { path: '/login', component: LoginView },
  // { path: '/registro', component: RegisterView },
  // { path: '/recuperar', component: RecoverView },

  // CLIENTE
  // { path: '/cliente/inicio', component: ClienteHomeView },
  // 
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  // RECEPCIONISTA
  // { path: '/recepcionista', component: RecepcionistaView },
  // 
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  // ESTILISTA
  // { path: '/estilista', component: EstilistaView },
  // 
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  /* ========= ALEXIA ========= */

  // ADMIN
  { path: '/admin', component: AdminDashboard },
  { path: '/admin/servicios', component: VistaServicios },
  { path: '/admin/servicios/crear', component: CrearServicio },
  { path: '/admin/estilistas', component: VistaEstilistas },
  { path: '/admin/estilistas/crear', component: CrearEstilista },
  { path: '/admin/historial', component: VistaHistorial },

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  //Puse muchos comentarios porque no se cuanto se ocupe para lo que vamos a hacer, pero mejor que sobre a que falte, 
  // ya despues borramos lo que no se ocupo, por mientras no puse el login ni el registrar para que no te ocasionara conflictos,
  //recuerda que siempre antes de subir cambios debes de extraer cambios con pull, por si yo hice un cambio antes de que tu subieras algo 
  // si se te olvida me dices y vemos como solucionarlo.

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router