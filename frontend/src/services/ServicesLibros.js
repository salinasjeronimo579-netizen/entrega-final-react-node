import { API_URL } from "./api.js"

export function listarLibros() {
  return fetch(`${API_URL}/libros`)
  .then((res) => res.json())
}



export const books = [

  {
    id: 18,
    image: 'https://placehold.co/300x400?text=Libro+18',
    title: 'Breve historia del tiempo',
    author: 'Stephen Hawking',
    genre: 'Historia',
    year: 1988,
    pages: 256,
    synopsis:
      'Una explicación accesible sobre el origen del universo, los agujeros negros y la naturaleza del tiempo y el espacio.',
  },
]

export default books
