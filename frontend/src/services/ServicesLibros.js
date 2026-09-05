import { API_URL } from "./api.js"

export function mapearLibro(libro) {
  return {
    id: libro.id_libro,
    title: libro.titulo,
    author: libro.autores?.map((autor) => `${autor.nombre} ${autor.apellido}`).join(', ') ?? '',
    genre: libro.categorias?.[0]?.nombre ?? '',
    year: libro.anio_publicacion,
    pages: libro.num_paginas,
    synopsis: libro.sinopsis,
    image: libro.portada,
  }
}

export function listarLibros() {
  return fetch(`${API_URL}/libros`)
    .then((res) => res.json())
    .then((libros) => libros.map(mapearLibro))
}
