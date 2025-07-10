// src/utils/tmdb.js

const API_KEY = 'TU_API_KEY_AQUI'; // reemplázalo con tu clave real de TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

export async function buscarPeliculas(query) {
  try {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.results || [];
  } catch (error) {
    console.error('Error al buscar películas:', error);
    return [];
  }
}
