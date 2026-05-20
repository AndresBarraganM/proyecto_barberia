<template>

  <div class="services-layout">

    <!-- MENU -->
    <button
      v-if="!menuOpen"
      class="menu-toggle"
      @click="menuOpen = true"
    >
      ☰
    </button>

    <!-- SIDEBAR -->
    <aside class="sidebar" :class="{ open: menuOpen }">

      <button
        class="close-sidebar"
        @click="menuOpen = false"
      >
        ✕
      </button>

      <router-link to="/admin/servicios" class="back-btn">
        ← Volver
      </router-link>

      <h2 class="sidebar-title">
        Servicios
      </h2>

      <div class="services-list">

        <div class="service-item">
          ✂ Servicio 1
        </div>

      </div>
    </aside>

    <!-- CONTENT -->
    <main class="content">

      <h1>Crear Nuevo Servicio</h1>

      <div class="form-card">

        <!-- NOMBRE -->
        <div class="form-group">

          <label>
            Nombre del servicio
          </label>

          <input
            type="text"
            placeholder="Ej: Corte Premium"
          />

        </div>

        <!-- DESCRIPCIÓN -->
        <div class="form-group">

          <label>
            Descripción
          </label>

          <textarea
            placeholder="Describe el servicio..."
          ></textarea>

        </div>

        <!-- PRECIO -->
        <div class="form-group">

          <label>
            Precio
          </label>

          <input
            type="number"
            placeholder="0.00"
          />

        </div>

        <!-- DURACIÓN -->
        <div class="form-group">

          <label>
            Duración (minutos)
          </label>

          <input
            type="number"
            placeholder="45"
          />

        </div>

        <!-- BOTÓN -->
        <button class="submit-btn">
          Crear
        </button>

      </div>

    </main>

  </div>

</template>

<script setup>

import { ref } from 'vue'

const menuOpen = ref(false)

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

*{
  box-sizing:border-box;
  font-family:'Outfit', sans-serif;
}

.services-layout{
  display:flex;
  min-height:100vh;
  background:#f8f4f8;
}

/* SIDEBAR */

.sidebar{
  width:250px;
  background:white;
  padding:32px;

  display:flex;
  flex-direction:column;

  gap:24px;

  border-right:1px solid #ececec;
}

.back-btn{
  text-decoration:none;
  color:#7b2ff7;
  font-size:20px;
}

.sidebar-title{
  font-size:28px;
  color:#101828;
}

.services-list{
  display:flex;
  flex-direction:column;
  gap:18px;
}

.service-item{
  padding:16px 18px;
  border-radius:14px;
  font-size:18px;
  color:#344054;
}

.create-btn{

  width:100%;

  border:none;

  border-radius:14px;

  padding:16px 18px;

  font-size:18px;

  display:flex;
  align-items:center;
  justify-content:center;

  color:white;

  cursor:pointer;

  background:linear-gradient(135deg,#7b2ff7,#ff0080);
}

.active-btn{
  box-shadow:0 6px 16px rgba(123,47,247,0.25);
}

/* CONTENT */

.content{
  flex:1;
  padding:40px;
}

.content h1{
  font-size:42px;
  color:#101828;
  margin-bottom:30px;
}

/* CARD */

.form-card{
  background:white;
  border-radius:24px;
  padding:28px;

  max-width:980px;
}

.form-group{
  display:flex;
  flex-direction:column;
  gap:12px;
}

label{
  font-size:20px;
  color:#101828;
  font-weight:600;
}

input,
textarea{
  width:100%;

  border:1px solid #d0d5dd;

  border-radius:18px;

  padding:18px;

  font-size:18px;

  outline:none;
}

textarea{
  min-height:180px;
  resize:none;
}

.submit-btn{
  margin-top:10px;
  border:none;
  border-radius:18px;
  padding:18px;
  font-size:22px;
  color:white;
  cursor:pointer;
  width:100%;
  background:linear-gradient(135deg,#7b2ff7,#ff0080);
  box-shadow:0 6px 16px rgba(123,47,247,0.25);
}

/* MENU */

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
}

.close-sidebar{

  display:none;

  position:absolute;

  top:20px;
  right:20px;

  border:none;

  background:none;

  font-size:30px;

  cursor:pointer;
}

/* RESPONSIVE */

@media (max-width: 900px){

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

    width:250px;

    height:100vh;

    z-index:999;

    transition:0.3s ease;
  }

  .sidebar.open{
    left:0;
  }

  .content{
    width:100%;
    padding:80px 20px 20px 20px;
  }

}

@media (max-width: 600px){

  .content h1{
    font-size:36px;
  }

  .form-card{
    padding:20px;
  }

}
</style>