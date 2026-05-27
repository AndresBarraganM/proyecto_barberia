<template>

  <div class="history-layout">

    <!-- MENU MOBILE -->
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

      <router-link
          to="/admin/inicio"
          class="back-btn"
        >
          ← Volver
        </router-link>

        <h2 class="sidebar-title">
          Historial
        </h2>

        <p class="sidebar-subtitle">
          Panel Administrador
        </p>

    </aside>

    <!-- CONTENT -->
    <main class="content">

      <!-- TOP -->
      <div class="top-bar">

        <div>
          <h1>Historial</h1>
          <p>
            Consulta los servicios realizados
          </p>
        </div>

        <div class="profile-circle">
          👤
        </div>

      </div>

      <!-- HISTORIAL -->
      <div class="history-container">

        <!-- CARD -->
        <div class="history-card">

          <div class="history-left">

            <div class="radio-circle"></div>

            <div class="history-info">

              <h3>Corte Premium</h3>

              <textarea
                disabled
              >
Servicio realizado correctamente.
Cliente satisfecho con el resultado.
              </textarea>

            </div>

          </div>

          <div class="history-right">

            <div class="details-box">

              <span>Detalles</span>

              <div class="mini-box">
                45 min
              </div>

            </div>

            <button class="delete-btn">
              Eliminar
            </button>

          </div>

        </div>

        <!-- CARD -->
        <div class="history-card">

          <div class="history-left">

            <div class="radio-circle"></div>

            <div class="history-info">

              <h3>Barba + Corte</h3>

              <textarea
                disabled
              >
Servicio combinado realizado en sucursal principal.
              </textarea>

            </div>

          </div>

          <div class="history-right">

            <div class="details-box">

              <span>Detalles</span>

              <div class="mini-box">
                60 min
              </div>

            </div>

            <button class="delete-btn">
              Eliminar
            </button>

          </div>

        </div>

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

.history-layout{
  display:flex;
  min-height:100vh;
  background:#f8f4f8;
}

/* SIDEBAR */

.sidebar{
  width:250px;
  background:white;
  border-right:1px solid #ececec;
  padding:35px 24px;
  display:flex;
  flex-direction:column;
  gap:12px;
}

.sidebar-title{
  font-size:36px;
  font-weight:700;
  color:#101828;
}

.sidebar-subtitle{
  color:#667085;
  font-size:16px;
}

/* CONTENT */

.content{
  flex:1;
  padding:40px;
}

/* TOP */

.top-bar{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  margin-bottom:40px;
}

.top-bar h1{
  font-size:56px;
  color:#101828;
  margin-bottom:10px;
}

.top-bar p{
  font-size:20px;
  color:#667085;
}

.profile-circle{
  width:72px;
  height:72px;
  border-radius:50%;
  background:linear-gradient(180deg,#7b2ff7,#ff0080);
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  font-size:28px;
}

/* HISTORY */

.history-container{
  display:flex;
  flex-direction:column;
  gap:30px;
}

.history-card{
  background:white;
  border-radius:22px;
  padding:24px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:30px;
  box-shadow:0 8px 24px rgba(0,0,0,0.05);
}

.history-left{
  display:flex;
  gap:24px;
  flex:1;
}

.radio-circle{
  width:18px;
  height:18px;
  border-radius:50%;
  border:3px solid #101828;
  margin-top:10px;
}

.history-info{
  flex:1;
}

.history-info h3{
  font-size:30px;
  color:#101828;
  margin-bottom:20px;
}

.history-info textarea{
  width:100%;
  height:90px;
  border-radius:28px;
  border:none;
  background:#f5f5f5;
  padding:24px;
  resize:none;
  font-size:18px;
  color:#344054;
}

.history-right{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:25px;
}

.details-box{
  display:flex;
  flex-direction:column;
  gap:12px;
}

.details-box span{
  font-size:24px;
  font-weight:600;
  color:#101828;
}

.mini-box{
  width:170px;
  height:65px;
  border:2px solid #d0d5dd;
  border-radius:14px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:20px;
  color:#344054;
}

.delete-btn{
  border:none;
  background:white;
  border:2px solid #ff6b6b;
  color:#ff4d4d;
  padding:14px 30px;
  border-radius:999px;
  font-size:18px;
  cursor:pointer;
  transition:0.2s;
}

.delete-btn:hover{
  background:#fff5f5;
}

/* MENU */

.menu-toggle{
  display:none;
  position:sticky;
  top:20px;
  left:20px;
  z-index:9999;
  border:none;
  width:50px;
  height:50px;
  border-radius:12px;
  background:#7b2ff7;
  color:white;
  font-size:28px;
  cursor:pointer;
  top:20px;
  box-shadow:0 4px 12px rgba(0,0,0,0.2);
}

.close-sidebar{
  display:none;
}

/* RESPONSIVE */

@media (max-width: 900px){

  .history-card{
    flex-direction:column;
    align-items:flex-start;
  }

  .history-right{
    width:100%;
    align-items:flex-start;
  }

}

@media (max-width: 768px){

  .menu-toggle{
    display:block;
  }

  .sidebar{
    position:fixed;
    top:0;
    left:-100%;
    width:260px;
    height:100vh;
    z-index:999;
    transition:0.3s;
  }

  .sidebar.open{
    left:0;
  }

  .close-sidebar{
    display:block;
    position:absolute;
    top:20px;
    right:20px;
    border:none;
    background:none;
    font-size:28px;
    cursor:pointer;
  }

  .content{
    width:100%;
    padding:90px 18px 30px 18px;
  }

.top-bar{
  position:relative;
}

.profile-circle{
  position:absolute;
  top:0;
  right:0;
}

  .top-bar h1{
    font-size:42px;
  }

}

@media (max-width: 480px){

  .top-bar h1{
    font-size:34px;
  }

  .history-card{
    padding:22px;
  }

  .history-info h3{
    font-size:24px;
  }

  .history-info textarea{
    font-size:16px;
  }

}

.back-btn{
  text-decoration:none;
  color:#7b2ff7;
  font-size:24px;
  font-weight:500;
}

</style>