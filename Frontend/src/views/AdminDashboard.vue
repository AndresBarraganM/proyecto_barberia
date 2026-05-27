<template>
  <div class="admin-container">
    <!-- MOBILE MENU BUTTON -->
    <button
        v-if="!menuOpen"
        class="menu-toggle"
        @click="menuOpen = true"
>
      ☰
    </button>
    <!-- SIDEBAR -->
    <aside class="sidebar" :class="{ open: menuOpen }">
    <button class="close-sidebar" @click="menuOpen = false">
         ✕
    </button>
      <div>
        <!-- LOGO -->
        <div class="logo-section">
          <div class="logo-circle">
            <Scissors />
          </div>

          <div>
            <h2>Barbería-nombre</h2>
            <p>Panel Administrador</p>
          </div>
        </div>

        <!-- MENU -->
        <nav class="menu">
          <router-link
            to="/admin/historial"
            class="menu-item active no-link"
          >
            <History />
            Historial
          </router-link>

          <div class="menu-item">
            <Settings />
            <span>Configuración</span>
          </div>
        </nav>
      </div>

      <!-- LOGOUT -->
      <button class="logout-btn">
        <LogOut />
        <span>Cerrar sesión</span>
      </button>
    </aside>

    <!-- CONTENIDO -->
    <main class="content">
      <!-- TOP -->
      <div class="top-bar">
        <div>
          <h1>Panel de Administración</h1>
          <p>Gestiona tu negocio</p>
        </div>

        <div class="profile-circle">
          <User />
        </div>
      </div>

      <!-- CARDS -->
      <div class="cards-container">
        <!-- SERVICIOS -->
        <router-link to="/admin/servicios" class="card-link">

            <div class="admin-card">

              <div class="card-icon purple">
                <Scissors />
              </div>

              <h2>Servicios</h2>

              <p>
                Gestiona el catálogo de servicios
                de tu negocio
              </p>

            </div>

        </  router-link>

        <!-- ESTILISTAS -->
        <router-link
          to="/admin/estilistas"
          class="card-link"
        >

          <div class="admin-card">

            <div class="card-icon pink stylist-icon">
              <Users />
            </div>

            <h2>Estilistas</h2>

            <p>
              Administra el equipo de profesionales
            </p>

          </div>

        </router-link>

        <!-- RECEPCIONISTAS -->
  <router-link
    to="/admin/recepcionistas"
    class="card-link"
  >
  
    <div class="admin-card">
  
      <div class="card-icon pink stylist-icon">
        <Users />
      </div>
  
      <h2>Recepcionistas</h2>
  
      <p>
        Administra recepcionistas
      </p>
  
    </div>
  
  </router-link>  
      </div>
    </main>
  </div>
</template>

<script setup>

import { ref } from 'vue'

import {
  Scissors,
  History,
  Settings,
  LogOut,
  User,
  Users
} from 'lucide-vue-next'

const menuOpen = ref(false)

</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap");

* {
  font-family: "Outfit", sans-serif;
  box-sizing: border-box;
}

.admin-container {
  display: flex;
  min-height: 100vh;
  background: #f8f4f8;
}

/* SIDEBAR */

.sidebar {
  width: 300px;
  background: white;
  padding: 35px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #ececec;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7b2ff7, #ff1493);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.logo-circle svg {
  width: 28px;
  height: 28px;
}

.logo-section h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #101828;
}

.logo-section p {
  margin-top: 4px;
  color: #667085;
  font-size: 16px;
}

/* MENU */

.menu {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border-radius: 16px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 20px;
  color: #1d2939;
}

.menu-item svg {
  width: 24px;
  height: 24px;
}

.menu-item.active {
  background: #f4ecff;
  color: #7b2ff7;
}

.menu-item:hover {
  background: #f8f0ff;
}

/* LOGOUT */

.logout-btn {
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ff2d55;
  font-size: 22px;
  cursor: pointer;
  padding: 10px;
}

.logout-btn svg {
  width: 24px;
  height: 24px;
}

/* CONTENT */

.content {
  flex: 1;
  padding: 50px 60px;
}

/* TOP BAR */

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.top-bar h1 {
  margin: 0;
  font-size: 52px;
  font-weight: 700;
  color: #101828;
}

.top-bar p {
  margin-top: 12px;
  font-size: 18px;
  color: #667085;
}

.profile-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7b2ff7, #ff1493);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.profile-circle svg {
  width: 30px;
  height: 30px;
}

/* CARDS */

.cards-container {
  margin-top: 60px;
  display: flex;
  gap: 36px;
}

.admin-card {
  width: 360px;
  background: white;
  padding: 32px;
  border-radius: 28px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.card-icon {
  width: 92px;
  height: 92px;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-icon svg {
  width: 42px;
  height: 42px;
}

.card-icon.purple {
  background: #f0e0ff;
  color: #7b2ff7;
}

.card-icon.pink {
  background: #ffdff0;
  color: #ff1493;
}

.admin-card h2 {
  margin-top: 30px;
  margin-bottom: 18px;
  font-size: 42px;
  color: #101828;
}

.admin-card p {
  font-size: 18px;
  line-height: 1.6;
  color: #667085;
}

/* MENU TOGGLE */

.menu-toggle{

  display:none;

  position:absolute;

  top:14px;
  left:14px;

  z-index:9999;

  border:none;

  width:42px;
  height:42px;

  border-radius:10px;

  background:#7b2ff7;

  color:white;

  font-size:22px;

  cursor:pointer;

  box-shadow:0 4px 10px rgba(0,0,0,0.15);
}

/* CLOSE BUTTON */

.close-sidebar{

  display:none;

  position:absolute;

  top:20px;
  right:20px;

  border:none;

  background:none;

  font-size:30px;

  cursor:pointer;

  color:#101828;
}

/* ========================= */
/* RESPONSIVE */
/* ========================= */

@media (max-width: 1200px){

  .cards-container{
    flex-direction:column;
  }

}

@media (max-width: 900px){

  .sidebar{
    width:240px;
    padding:25px 18px;
  }

  .top-bar h1{
    font-size:40px;
  }

  .admin-card{
    width:100%;
  }

}

@media (max-width: 768px){

  .menu-toggle{
    display:block;
  }

  .close-sidebar{
    display:block;
  }

  .sidebar{

    position:fixed;

    top:0;
    left:-100%;

    width:260px;

    height:100vh;

    z-index:999;

    transition:0.3s ease;

    border-right:1px solid #ececec;
  }

  .sidebar.open{
    left:0;
  }

  .content{
    width:100%;
    padding:80px 16px 30px 16px;
  }

}

@media (max-width: 480px){

  .logo-section{
    flex-direction:column;
    align-items:flex-start;
  }

  .menu-item{
    font-size:18px;
  }

  .logout-btn{
    font-size:18px;
  }

  .top-bar h1{
    font-size:28px;
  }

  .profile-circle{
    width:60px;
    height:60px;
  }

  .card-icon{
    width:75px;
    height:75px;
  }

  .admin-card h2{
    font-size:30px;
  }

  .admin-card p{
    font-size:16px;
  }

}

@media (max-width: 480px){

  .logo-section{
    flex-direction:column;
    align-items:flex-start;
  }

  .menu-item{
    font-size:18px;
  }

  .logout-btn{
    font-size:18px;
  }

  .top-bar h1{
    font-size:28px;
  }

  .profile-circle{
    width:60px;
    height:60px;
  }

  .card-icon{
    width:75px;
    height:75px;
  }

  .admin-card h2{
    font-size:30px;
  }

  .admin-card p{
    font-size:16px;
  }

}

.card-link{
  text-decoration:none;
  color:inherit;
}

.no-link{
  text-decoration:none;
}


</style>
