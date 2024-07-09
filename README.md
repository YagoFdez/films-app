# DOTFILMS APP

## Descripción
Esta es una mini-webapp de películas que permite a los usuarios ver un listado de películas populares, buscar películas, ver detalles de cada película y calificarlas guardandose en una lista individual. La aplicación utiliza la API de TheMovieDB para obtener la información de las películas.

## Características principales
- Listado de películas populares
- Búsqueda de películas
- Visualización de detalles de películas
- Calificación de películas
- Guardado de películas calificadas
- Lista personalizada de películas calificadas

## Tecnologías utilizadas
- Next.js
- React
- TypeScript
- Zustand (para manejo de estado global)
- React Query (para manejo de solicitudes a la API)
- Axios (para llamadas a la API)
- TheMovieDB API

## Instalación
1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Crea un archivo `.env.local` en la raíz del proyecto y añade tu API key de TheMovieDB:
    NEXT_PUBLIC_API_KEY=_api_key_
    NEXT_PUBLIC_BASE_URL=https://api.themoviedb.org/3/
4. Ejecuta el servidor de desarrollo con `npm run dev`

## Uso
- La página principal muestra un listado de películas populares
- Usa la barra de búsqueda para encontrar películas específicas
- Haz clic en una película para ver sus detalles
- Una vez seleccionada la pelicula, puedes calificar.
- Visita la página "My List" (/mylist) para ver tus películas calificadas.

## Estructura del proyecto
- `components/`: Componentes reutilizables de React
- `app/`: Estructura de la aplicación
- `lib/`: Funciones de utilidad y llamadas a la API
- `store/`: Lógica de manejo de estado con Zustand
- `hooks/`: Hooks personalizados
- `types/`: Definiciones de tipos de TypeScript

## Estado
El estado centralizado se usa para gestionar la información de la película que se ha seleccionado y que se desea puntuar, enviando la información a la API con la sesión de invitado. Se podría utilizar la gestión de estados para almacenar la información de las películas guardadas, pero aprovechamos esta funcionalidad proporcionada por la sesión de usuario. Los tests son de alguna funcionalidad básica.
