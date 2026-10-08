
# CRUD de Productos con Autenticación

Aplicación web hecha con **Node.js + Express** que permite registrar usuarios, iniciar sesión y gestionar un inventario de productos (crear, listar, editar y eliminar). Sigue el patrón **MVC** (Modelo – Vista – Controlador) y guarda los datos en una base **SQLite**.

# Link del video:

https://www.loom.com/share/d67f2d06b5104c4cb5f393f92da96e46
---

## Características

- Registro de usuarios con validación de contraseña y usuario único
- Inicio y cierre de sesión con `express-session`
- Contraseñas cifradas con `bcryptjs`
- Rutas de productos protegidas por un middleware de autenticación
- CRUD completo de productos (nombre, precio y stock)
- Vistas renderizadas en el servidor con EJS
- Base de datos SQLite que se crea sola al iniciar la app

## Tecnologías

| Tecnología | Uso |
|---|---|
| [Node.js](https://nodejs.org/) | Entorno de ejecución |
| [Express 5](https://expressjs.com/) | Servidor y rutas |
| [EJS](https://ejs.co/) | Motor de plantillas |
| [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) | Base de datos SQLite |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Cifrado de contraseñas |
| [express-session](https://github.com/expressjs/session) | Manejo de sesiones |
| [dotenv](https://github.com/motdotla/dotenv) | Variables de entorno |

## Estructura del proyecto

```
CRUD/
├── controllers/
│   ├── authController.js     # Registro, login y logout
│   └── productController.js  # Lógica del CRUD de productos
├── middlewares/
│   └── auth.js               # requireLogin: protege rutas privadas
├── models/
│   ├── Product.js            # Consultas SQL de productos
│   └── User.js               # Consultas SQL de usuarios + bcrypt
├── public/
│   └── css/style.css         # Estilos
├── routes/
│   ├── authRoutes.js         # /register, /login, /logout
│   └── productRoutes.js      # /products/...
├── scripts/
│   └── verUsuarios.js        # Utilidad para listar usuarios en consola
├── views/                    # Plantillas EJS
│   ├── login.ejs
│   ├── register.ejs
│   ├── products.ejs
│   ├── product-form.ejs
│   └── home.ejs
├── database.js               # Conexión y creación de tablas
├── server.js                 # Punto de entrada
├── .env.example              # Ejemplo de variables de entorno
└── package.json
```

## Instalación

### Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm

### Pasos

1. **Clonar el repositorio**

   ```bash
     git clone https://github.com/nikinicole04/TareaCRUD.git
   cd TareaCRUD

   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   Copia el archivo de ejemplo y cambia la clave secreta:

   ```bash
   cp .env.example .env
   ```

   | Variable | Descripción | Valor por defecto |
   |---|---|---|
   | `PORT` | Puerto del servidor | `3001` |
   | `SESSION_SECRET` | Clave para firmar las sesiones | `cambia-esta-clave` |

4. **Iniciar la aplicación**

   ```bash
   npm start
   ```

   O en modo desarrollo (se reinicia al guardar cambios):

   ```bash
   npm run dev
   ```

5. Abre **http://localhost:3001** en el navegador.

> La base de datos `database.sqlite` se crea automáticamente la primera vez que se inicia el servidor.

## Uso

1. Entra a `/register` y crea una cuenta.
2. Inicia sesión en `/login`.
3. En `/products` verás la lista de productos; desde ahí puedes agregar, editar o eliminar.
4. Cierra sesión con el botón **Cerrar sesión**.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Inicia el servidor |
| `npm run dev` | Inicia el servidor con recarga automática |
| `npm run users` | Muestra en consola los usuarios registrados |

## Autor
Nicole Yépez
[@nikinicole04](https://github.com/nikinicole04)
