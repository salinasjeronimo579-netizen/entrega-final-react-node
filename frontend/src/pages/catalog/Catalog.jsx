import { useMemo, useState } from 'react'
import LayoutMain from '../../layout/LayoutMain.jsx'
import CatalogToolbar from '../../components/catalog/CatalogToolbar.jsx'
import BookGrid from '../../components/catalog/BookGrid.jsx'
import { books } from '../../services/books.js'

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('Todos')

  const genres = useMemo(
    () => ['Todos', ...new Set(books.map((book) => book.genre))],
    [],
  )

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch = book.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const matchesGenre =
        selectedGenre === 'Todos' || book.genre === selectedGenre
      return matchesSearch && matchesGenre
    })
  }, [searchTerm, selectedGenre])

  return (
    <LayoutMain>
      <section className="mx-auto w-full max-w-7xl px-6 py-8">
        <h1 className="mb-6 text-2xl font-bold text-foreground">Catálogo</h1>

        <CatalogToolbar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />

        <BookGrid books={filteredBooks} />
      </section>
    </LayoutMain>
  )
}

export default Catalog
