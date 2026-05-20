<template>

  <div class="services-layout">

    <!-- MENU BUTTON -->
    <button
      v-if="!menuOpen"
      class="menu-toggle"
      @click="menuOpen = true"
    >
      ☰
    </button>

    <!-- SIDEBAR -->
    <aside class="sidebar" :class="{ open: menuOpen }">

      <!-- CLOSE -->
      <button
        class="close-sidebar"
        @click="menuOpen = false"
      >
        ✕
      </button>

      <!-- VOLVER -->
      <router-link to="/admin" class="back-btn">
        ← Volver
      </router-link>

      <h2 class="sidebar-title">
        Servicios
      </h2>

      <!-- LISTA -->
      <div class="services-list">

        <div class="service-item active">
          ✂ Servicio 1
        </div>

      </div>

      <!-- CREAR -->
      <router-link
          to="/admin/servicios/crear"
          class="create-link"
        >
          <button class="create-btn">
            + Crear
          </button>
      </router-link>

    </aside>

    <!-- CONTENIDO -->
    <main class="content">

      <h1>Servicio 1</h1>

      <div class="details-card">

        <h2>Detalles</h2>

        <textarea
          v-model="descripcion"
          :disabled="!isEditing"
          placeholder="Descripción del servicio..."
        ></textarea>

        <div class="buttons">

          <button
              class="edit-btn"
              @click="isEditing = !isEditing"
            >
            {{ isEditing ? '💾 Guardar' : '✏ Editar' }}
          </button>

          <button class="delete-btn">
            🗑 Eliminar
          </button>

        </div>

      </div>

    </main>

  </div>

</template>

<script setup>

import { ref } from 'vue'

const menuOpen = ref(false)
const isEditing = ref(false)
const descripcion = ref('')

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
  border:none;
  background:none;

  color:#7b2ff7;

  text-decoration:none;

  font-size:20px;

  cursor:pointer;

  text-align:left;
}

.sidebar-title{
  font-size:28px;
  color:#101828;
}

.services-list{
  display:flex;
  flex-direction:column;
  gap:20px;
}

.service-item{
  padding:16px 18px;
  border-radius:14px;
  font-size:18px;
  cursor:pointer;
  color:#344054;
  transition:0.2s;
}

.service-item.active{
  background:linear-gradient(135deg,#7b2ff7,#ff0080);
  color:white;
  box-shadow:0 6px 16px rgba(123,47,247,0.25);
}

.create-btn{
  width:100%;
  padding:16px 18px;
  border:none;
  border-radius:14px;
  font-size:18px;
  color:white;
  cursor:pointer;
  background:linear-gradient(135deg,#7b2ff7,#ff0080);
  box-shadow:0 6px 16px rgba(123,47,247,0.25);
  text-align:left;
}

/* CONTENT */

.content{
  flex:1;
  padding:40px;
}

.content h1{
  font-size:48px;
  color:#101828;
  margin-bottom:30px;
}

/* CARD */

.details-card{
  background:white;
  border-radius:28px;
  padding:28px;
  box-shadow:0 8px 20px rgba(0,0,0,0.05);
}

.details-card h2{
  font-size:28px;
  color:#101828;
  margin-bottom:24px;
}

textarea{
  width:100%;
  min-height:180px;
  border:1px solid #d0d5dd;
  border-radius:20px;
  padding:20px;
  font-size:16px;
  resize:none;
  outline:none;
}

.buttons{
  display:flex;
  gap:18px;
  margin-top:24px;
}

.edit-btn{
  border:none;
  padding:14px 24px;
  border-radius:14px;
  color:white;
  font-size:18px;
  cursor:pointer;
  background:linear-gradient(135deg,#7b2ff7,#ff0080);
}

.delete-btn{
  border:2px solid #ff6b6b;
  background:white;
  padding:14px 24px;
  border-radius:14px;
  color:#ff3b3b;
  font-size:18px;
  cursor:pointer;
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
    font-size:34px;
  }

  .details-card{
    padding:20px;
  }

  .buttons{
    flex-direction:column;
  }

  .edit-btn,
  .delete-btn{
    width:100%;
  }

}

.create-link{
  text-decoration:none;
}

</style>