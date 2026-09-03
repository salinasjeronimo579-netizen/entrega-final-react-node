import BookCard from './BookCard.jsx'

export function BookGrid({ books }) {
  if (books.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-muted">
        No se encontraron libros con esos criterios.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookGrid
