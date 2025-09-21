# 🎬 GifsApp

Una aplicación web moderna para buscar y descubrir GIFs utilizando la API de Giphy. Construida con React, TypeScript y Vite como parte del curso "React de Cero a Experto".

## 🚀 Características

- 🔍 Búsqueda en tiempo real de GIFs con debounce de 700ms
- 💾 Caché de búsquedas para mejor rendimiento
- 🏷️ Historial de búsquedas anteriores (máximo 8 elementos)
- 🎯 Componentes reutilizables y organizados

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de construcción y desarrollo
- **Axios** - Cliente HTTP para API requests
- **CSS3** - Estilos y diseño responsive
- **Giphy API** - Fuente de GIFs

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Cuenta en [Giphy Developers](https://developers.giphy.com/dashboard/) para obtener API Key

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/GuerreroWelinton/course-react-zero-to-expert.git
   cd course-react-zero-to-expert/03-gifs-app
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   ```bash
   # Copiar el archivo template
   cp .env.template .env

   # Editar .env y agregar tu API key de Giphy
   VITE_GIPHY_API_KEY=tu_api_key_aqui
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

## 🏗️ Scripts Disponibles

```bash
# Desarrollo
npm run dev                # Inicia servidor de desarrollo

# Construcción
npm run build             # Construye para producción
npm run preview           # Vista previa de la construcción

# Calidad de código
npm run lint              # Ejecuta ESLint
npm run lint:fix          # Corrige automáticamente errores de ESLint
npm run format            # Formatea código con Prettier
npm run format:check      # Verifica formato del código
npm run check             # Ejecuta lint y format:check
npm run fix-all           # Ejecuta lint:fix y format
```

## 📦 Despliegue

### Despliegue en Netlify

1. **Construir el proyecto**

   ```bash
   npm run build
   ```

2. **Desplegar en Netlify**
   - Conecta tu repositorio con Netlify
   - Configura las variables de entorno en Netlify
   - El comando de build: `npm run build`
   - Directorio de publicación: `dist`

### Despliegue Local con http-server

```bash
# Instalar http-server globalmente (como administrador)
npm install --global http-server

# Construir el proyecto
npm run build

# Ir al directorio dist y ejecutar
cd dist
http-server -o
```

## 🌐 Demo en Vivo

🔗 **[Ver aplicación desplegada](https://course-react-03-gifs-app.netlify.app/)**

## 🏗️ Arquitectura del Proyecto

```
src/
├── shared/
│   └── components/          # Componentes reutilizables
│       ├── CustomHeader.tsx
│       └── SearchBar.tsx
├── gifs/
│   ├── actions/            # Acciones/servicios para GIFs
│   ├── api/               # Configuración de APIs
│   ├── components/        # Componentes específicos de GIFs
│   ├── hooks/            # Custom hooks para manejo de estado
│   └── interfaces/       # Definiciones de tipos TypeScript
├── counter/              # Componente de ejemplo (contador)
└── mock-data/           # Datos de prueba para desarrollo
```

## 📝 Notas Técnicas y Aprendizajes del Curso

### Gestión de Estado y Hooks

- **Custom Hooks**: Los hooks personalizados como `useGifs` permiten reutilizar lógica de estado entre componentes
- **Reactividad**: Cuando un componente cambia de estado mediante una función dispatcher (useState), todo el componente o hook se vuelve a ejecutar, sin embargo las variables con hooks propios de React mantienen el estado entre renderizaciones
- **Re-renderizado**: Los hooks como los componentes de React, cada vez que una pieza de estado cambia mediante una función dispatcher, el customHook o el componente se vuelve a re-renderizar en su totalidad
- **Reglas de Hooks**: No usar hooks con condiciones, ya que dependen de su posición para mantener consistencia

### Optimizaciones Implementadas

- **Caché de Búsquedas**: Se implementó un sistema de caché usando `useRef` para evitar llamadas innecesarias a la API cuando se repite una búsqueda
- **Debounce**: El componente SearchBar implementa un debounce de 700ms para optimizar las búsquedas en tiempo real y evitar múltiples requests
- **Gestión de Estado**: Se mantiene un historial de búsquedas anteriores limitado a 8 elementos para mejorar la experiencia de usuario

### Componentes y Arquitectura

- **GifsApp**: Componente principal que orquesta toda la aplicación. Se recomienda crear un componente con el nombre de la aplicación para configurar cosas globales, no en el main
- **SearchBar**: Maneja la entrada del usuario con debounce automático para optimizar performance
- **useGifs**: Hook personalizado que gestiona el estado de los GIFs, búsquedas y caché
- **Arquitectura Modular**: Separación clara entre lógica de negocio, componentes de UI y servicios
- **Convención de nombres**: `handle` significa "manejar" - utilizado para funciones que manejan eventos

### Configuración del Proyecto

- **Path Aliases**: Configurados para usar `@/` como alias de `./src/` en TypeScript
- **TypeScript**: Configuración estricta con múltiples archivos de configuración para diferentes contextos
- **ESLint + Prettier**: Configuración integrada para mantener calidad y estilo de código consistente
- **Vite**: Configuración optimizada para desarrollo y producción

### Patrones de Desarrollo Aprendidos

- **Functional Components**: Uso exclusivo de componentes funcionales con hooks
- **Props Interface**: Definición clara de interfaces para props de componentes
- **Async/Await**: Manejo de operaciones asíncronas con la API de Giphy
- **Estado Local vs Global**: Decisiones sobre cuándo usar estado local del componente vs hooks personalizados

## 👨‍💻 Autor

Desarrollado como parte del curso **"React de Cero a Experto"** - Proyecto de práctica para aprender React, TypeScript y buenas prácticas de desarrollo frontend.
