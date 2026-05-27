<template>
  <div class="stylists-layout">
    <!-- MENU -->
    <button v-if="!menuOpen" class="menu-toggle" @click="menuOpen = true">
      ☰
    </button>

    <!-- SIDEBAR -->
    <aside class="sidebar" :class="{ open: menuOpen }">
      <!-- CLOSE -->
      <button class="close-sidebar" @click="menuOpen = false">✕</button>

      <!-- VOLVER -->
      <router-link to="/admin/Recepcionistas" class="back-btn">
        ← Volver
      </router-link>

      <h2 class="sidebar-title">Recepcionistas</h2>

      <!-- LISTA -->
      <div class="stylists-list">
        <div class="stylist-item">
          <span class="stylist-icon">👤</span>
          Recepcionista 1
        </div>
      </div>
    </aside>

    <!-- CONTENT -->
    <main class="content">
      <h1>Dar de Alta Recepcionista</h1>

      <div class="form-card">
        <!-- NOMBRE -->
        <div class="field-group">
          <label>Nombre completo</label>

          <input type="text" placeholder="Ej: Pedro García" />
        </div>

        <!-- ESPECIALIDAD -->
        <div class="field-group">
          <label>Especialidad</label>

          <input type="text" placeholder="Ej: Cortes modernos" />
        </div>

        <!-- EXPERIENCIA -->
        <div class="field-group">
          <label>Años de experiencia</label>

          <input type="number" placeholder="5" />
        </div>

        <!-- BIO -->
        <div class="field-group">
          <label>Biografía</label>

          <textarea
            placeholder="Describe la experiencia y formación del Recepcionista..."
          ></textarea>
        </div>

        <!-- EMAIL -->
        <div class="field-group">
          <label>Email</label>

          <input type="email" placeholder="email@ejemplo.com" />
        </div>

        <!-- TELÉFONO -->
        <div class="field-group">
          <label>Teléfono</label>

          <input type="text" />
        </div>

        <!-- BOTÓN -->
        <button class="submit-btn">Crear</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  font-family: "Outfit", sans-serif;
}

.stylists-layout {
  display: flex;
  min-height: 100vh;
  background: #f8f4f8;
}

/* SIDEBAR */

.sidebar {
  width: 250px;
  background: white;
  padding: 32px;

  display: flex;
  flex-direction: column;

  gap: 24px;

  border-right: 1px solid #ececec;
}

.back-btn {
  text-decoration: none;
  color: #7b2ff7;
  font-size: 20px;
}

.sidebar-title {
  font-size: 28px;
  color: #101828;
}

.stylists-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.stylist-item {
  width: 100%;

  padding: 16px 18px;

  border-radius: 14px;

  font-size: 18px;

  color: #344054;

  display: flex;
  align-items: center;
  gap: 10px;
}

.stylist-icon {
  font-size: 22px;
}

/* CONTENT */

.content {
  flex: 1;
  padding: 40px;
}

.content h1 {
  font-size: 42px;
  color: #101828;
  margin-bottom: 30px;
}

/* CARD */

.form-card {
  background: white;
  border-radius: 24px;
  padding: 28px;

  max-width: 980px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  gap: 24px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-size: 20px;
  color: #101828;
  font-weight: 600;
}

input,
textarea {
  width: 100%;

  border: 1px solid #d0d5dd;

  border-radius: 18px;

  padding: 18px;

  font-size: 18px;

  outline: none;
}

textarea {
  min-height: 180px;
  resize: none;
}

.submit-btn {
  width: 100%;

  margin-top: 10px;

  border: none;

  border-radius: 18px;

  padding: 18px;

  font-size: 22px;

  color: white;

  cursor: pointer;

  background: linear-gradient(135deg, #7b2ff7, #ff0080);

  box-shadow: 0 6px 16px rgba(123, 47, 247, 0.25);
}

/* MENU */

.menu-toggle {
  display: none;

  position: absolute;

  top: 14px;
  left: 14px;

  z-index: 9999;

  border: none;

  width: 42px;
  height: 42px;

  border-radius: 10px;

  background: #7b2ff7;

  color: white;

  font-size: 22px;

  cursor: pointer;
}

.close-sidebar {
  display: none;

  position: absolute;

  top: 20px;
  right: 20px;

  border: none;

  background: none;

  font-size: 30px;

  cursor: pointer;
}

/* RESPONSIVE */

@media (max-width: 900px) {
  .menu-toggle {
    display: block;
  }

  .close-sidebar {
    display: block;
  }

  .sidebar {
    position: fixed;

    top: 0;
    left: -100%;

    width: 250px;

    height: 100vh;

    z-index: 999;

    transition: 0.3s ease;
  }

  .sidebar.open {
    left: 0;
  }

  .content {
    width: 100%;
    padding: 80px 20px 20px 20px;
  }
}

@media (max-width: 600px) {
  .content h1 {
    font-size: 34px;
  }

  .form-card {
    padding: 20px;
  }
}
</style>
