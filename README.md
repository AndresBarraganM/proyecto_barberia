# API REST — Node.js MVC

Stack: **Docker · TypeScript 5 · Node.js 22 LTS · Express 5 · Zod · JWT · BcryptJS · Prisma 7 · Supabase**

---

## Estructura del proyecto

```
src/
├── config/          # Configuración (env, Prisma, Supabase)
├── controllers/     # Controladores MVC — lógica de negocio
├── middlewares/     # Autenticación, validación, errores
├── models/          # Modelos MVC — acceso a datos via Prisma
├── routes/          # Rutas (Vista MVC — define los endpoints)
├── types/           # Tipos TypeScript compartidos
├── utils/           # JWT helpers, respuestas estándar
├── validators/      # Schemas de validación Zod
├── app.ts           # Setup de Express
└── server.ts        # Punto de entrada
prisma/
└── schema.prisma    # Esquema de la base de datos
```

---

## Setup local

### 1. Requisitos previos

```bash
# Usar NVM para la versión correcta de Node
nvm install 22
nvm use 22

# Verificar versiones
node -v   # v22.x
npm -v    # v10.x+
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Variables de entorno

```bash
cp .env.example .env
# Editar .env con tus credenciales
```

### 4. Migrar la base de datos

```bash
# Con Supabase o PostgreSQL local:
npm run prisma:migrate

# Generar el cliente de Prisma:
npm run prisma:generate
```

### 5. Iniciar en desarrollo

```bash
npm run dev
```

---

## Con Docker

```bash
# Levantar API + PostgreSQL local
docker compose up --build

# Correr migraciones dentro del contenedor
docker compose exec api npm run prisma:migrate
```

---

## Endpoints

| Método | Ruta              | Auth     | Descripción              |
|--------|-------------------|----------|--------------------------|
| GET    | /api/health       | No       | Estado de la API         |
| POST   | /api/auth/register| No       | Registrar usuario        |
| POST   | /api/auth/login   | No       | Iniciar sesión           |
| GET    | /api/auth/me      | Bearer   | Perfil del usuario actual|
| GET    | /api/users        | Admin    | Listar todos los usuarios|
| GET    | /api/users/:id    | Bearer   | Obtener usuario por ID   |
| PATCH  | /api/users/:id    | Bearer   | Actualizar usuario       |
| DELETE | /api/users/:id    | Admin    | Eliminar usuario         |

---

## Ejemplo de uso

```bash
# Registrar usuario
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Ana García","email":"ana@ejemplo.com","password":"12345678"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"ana@ejemplo.com","password":"12345678"}'

# Obtener perfil (reemplaza <token> con el JWT del login)
curl http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer <token>"
```

---

## Scripts

| Comando                 | Descripción                        |
|-------------------------|------------------------------------|
| `npm run dev`           | Desarrollo con hot-reload (tsx)    |
| `npm run build`         | Compilar TypeScript                |
| `npm run start`         | Ejecutar compilado                 |
| `npm run prisma:migrate`| Correr migraciones                 |
| `npm run prisma:generate`| Regenerar cliente Prisma          |
| `npm run prisma:studio` | Abrir Prisma Studio (GUI DB)       |
