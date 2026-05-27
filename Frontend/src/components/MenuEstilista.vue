<template>

  <aside :class="['sidebar', { collapsed }]">

    <!-- TOP -->
    <div>

      <div class="top-sidebar">

        <div v-if="!collapsed" class="logo">
          ✂️ Estilista
        </div>

        <button class="menu-btn" @click="toggleMenu">
          ☰
        </button>

      </div>

      <!-- MENU -->
      <nav class="menu">

        <div
          v-for="item in menu"
          :key="item.name"
          :class="['menu-item', { active: currentRoute === item.route }]"
          @click="goTo(item.route)"
        >

          <span class="icon">
            {{ item.icon }}
          </span>

          <span v-if="!collapsed">
            {{ item.name }}
          </span>

        </div>

      </nav>

    </div>

    <!-- LOGOUT -->
    <button class="logout-btn" @click="logout">

      <img
        :src="logoutIcon"
        alt="logout"
        class="logout-icon"
      />

      <span v-if="!collapsed">
        Cerrar sesión
      </span>

    </button>

  </aside>

</template>

<script setup>

import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import logoutIcon from '../assets/icons/logout.png'

const router = useRouter()
const route = useRoute()

/*
|--------------------------------------------------------------------------
| SIDEBAR STATE
|--------------------------------------------------------------------------
*/
const collapsed = ref(false)

/*
|--------------------------------------------------------------------------
| MENU ESTILISTA
|--------------------------------------------------------------------------
*/
const menu = [
  {
    name: 'Citas',
    icon: '📅',
    route: '/estilista/inicio'
  },
  {
    name: 'Configuración',
    icon: '⚙️',
    route: '/estilista/configuracion'
  }
]

/*
|--------------------------------------------------------------------------
| RUTA ACTUAL
|--------------------------------------------------------------------------
*/
const currentRoute = computed(() => route.path)

/*
|--------------------------------------------------------------------------
| TOGGLE
|--------------------------------------------------------------------------
*/
const toggleMenu = () => {
  collapsed.value = !collapsed.value
}

/*
|--------------------------------------------------------------------------
| NAVEGAR
|--------------------------------------------------------------------------
*/
const goTo = (ruta) => {
  router.push(ruta)
}

/*
|--------------------------------------------------------------------------
| LOGOUT
|--------------------------------------------------------------------------
*/
const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('rol')
  localStorage.removeItem('usuario')

  router.push('/login')
}

</script>

<style scoped>

/* ===== SIDEBAR ===== */

.sidebar {
  width: 250px;
  background: white;
  border-right: 1px solid #eee;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s;
  height: 100vh;
}

.sidebar.collapsed {
  width: 90px;
}

/* TOP */

.top-sidebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #7b2ff7;
}

.menu-btn {
  border: none;
  background: none;
  font-size: 22px;
  cursor: pointer;
}

/* MENU */

.menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;
}

.menu-item:hover {
  background: #f3f4f6;
  transform: translateX(5px);
}

.menu-item.active {
  background: linear-gradient(to right, #7b2ff7, #f107a3);
  color: white;
}

.icon {
  font-size: 20px;
}

/* LOGOUT */

.logout-btn {
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  transition: 0.3s;
}

.logout-btn:hover {
  background: #f3f4f6;
}

.logout-icon {
  width: 22px;
  height: 22px;
}

</style>