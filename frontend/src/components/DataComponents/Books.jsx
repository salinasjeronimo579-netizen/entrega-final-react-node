import { useState, useEffect } from "react";
import { listarLibros } from "../../services/ServicesLibros.js";

export function useLibros() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    listarLibros().then((data) => setBooks(data))
  }, [])

  return { books }
}
