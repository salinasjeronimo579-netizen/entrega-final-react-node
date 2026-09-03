import { useMemo, useState } from 'react'
import LayoutMain from '../../layout/LayoutMain.jsx'
import CatalogToolbar from '../../components/catalog/CatalogToolbar.jsx'
import BookGrid from '../../components/catalog/BookGrid.jsx'
import Pagination from '../../components/catalog/Pagination.jsx'
import { books } from '../../services/books.js'

const BOOKS_PER_PAGE = 10

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('Todos')
  const [currentPage, setCurrentPage] = useState(1)

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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredBooks.length / BOOKS_PER_PAGE),
  )
  const page = Math.min(currentPage, totalPages)
  const paginatedBooks = filteredBooks.slice(
    (page - 1) * BOOKS_PER_PAGE,
    page * BOOKS_PER_PAGE,
  )

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

        <BookGrid books={paginatedBooks} />

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>
    </LayoutMain>
  )
}

export default Catalog
