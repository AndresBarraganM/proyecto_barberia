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
import LoginView from '../views/auth/LoginView.vue'
import RegistroView from '../views/auth/RegistroView.vue'

// CLIENTE
import RecuperacionView from '../views/auth/RecuperacionView.vue'
import PrincipalView from '../views/cliente/PrincipalView.vue'
import CitasView from '../views/cliente/CitasView.vue'
import HistorialView from '../views/cliente/HistorialView.vue'
import ServiciosView from '../views/cliente/ServiciosView.vue'
import AgendarView from '../views/cliente/AgendarView.vue'
import PagarView from '../views/cliente/PagarView.vue'
import ConfiguracionView from '../views/cliente/ConfiguracionView.vue'
import ClientePerfil from '../views/cliente/ClientePerfil.vue'
//
//
//
//
//
//

// RECEPCIONISTA
import PrincipalRecepcionista from '../views/Recepcionista/PrincipalRecepcionista.vue'
import CitasRecepcionista from '../views/Recepcionista/CitasRecepcionista.vue'
import HistorialRecepcionista from '../views/Recepcionista/HistorialRecepcionista.vue'
import ServicioRecepcionista from '../views/Recepcionista/ServicioRecepcionista.vue'
import AgendarRecepcionista from '../views/Recepcionista/AgendarRecepcionista.vue'
import PagoRecepcionista from '../views/Recepcionista/PagoRecepcionista.vue'
import ConfiguracionRecepcionista from '../views/Recepcionista/ConfiguracionRecepcionista.vue'
import RecepcionistaPerfil from '../views/Recepcionista/RecepcionistaPerfil.vue'
//
//
//
//
//
//
//

// ESTILISTA
import PrincipalEstilista from '../views/estilista/PrincipalEstilista.vue'
import ConfiguracionEstilista from '../views/estilista/ConfiguracionEstilista.vue'
import EstilistaPerfil from '../views/estilista/EstilistaPerfil.vue'
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

  { path: '/login', component: LoginView },
  { path: '/registro', component: RegistroView },
  { path: '/recuperar', component: RecuperacionView },
 

  // CLIENTE
  { path: '/cliente/inicio', component: PrincipalView },
  { path: '/cliente/citas', component: CitasView},
  { path: '/cliente/historial', component: HistorialView},
  { path: '/cliente/servicios', component: ServiciosView},
  { path: '/cliente/agendar', component: AgendarView},
  { path: '/cliente/pagar', component: PagarView},
  { path: '/cliente/configuracion', component: ConfiguracionView},
  { path: '/cliente/perfil', component: ClientePerfil},
  //
  //
  //
  //

  // RECEPCIONISTA
  { path: '/recepcionista/inicio', component: PrincipalRecepcionista},
  { path: '/recepcionista/citas', component: CitasRecepcionista},
  { path: '/recepcionista/historial', component: HistorialRecepcionista},
  { path: '/recepcionista/servicios', component: ServicioRecepcionista},
  { path: '/recepcionista/agendar', component: AgendarRecepcionista},
  { path: '/recepcionista/pago-tarjeta', component: PagoRecepcionista},
  { path: '/recepcionista/configuracion', component: ConfiguracionRecepcionista},
  { path: '/recepcionista/perfil', component: RecepcionistaPerfil},
  //
  //
  //
  //
  //
  //
  //
  
  // ESTILISTA
  { path: '/estilista/inicio', component: PrincipalEstilista},
  { path: '/estilista/configuracion', component: ConfiguracionEstilista},
  { path: '/estilista/perfil', component: EstilistaPerfil},
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
  { path: '/admin/inicio', component: AdminDashboard },
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