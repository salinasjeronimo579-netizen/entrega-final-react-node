export function BookDetailModal({ book, onClose }) {
  if (!book) {
    return null
  }

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="animate-fade-in flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl sm:flex-row"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="h-56 w-full flex-none sm:h-auto sm:w-1/2">
          <img
            src={book.image}
            alt={book.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-1 flex-col overflow-y-auto p-6 sm:p-8">
          <button
            type="button"
            onClick={onClose}
            className="ml-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-muted hover:bg-background hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-1 flex-col gap-3">
            <span className="w-fit rounded-full bg-background px-3 py-1 text-xs font-medium text-muted">
              {book.genre}
            </span>
            <h2 className="text-2xl font-bold text-foreground">
              {book.title}
            </h2>
            <p className="text-sm text-muted">{book.author}</p>
            <p className="text-sm leading-relaxed text-foreground">
              {book.synopsis}
            </p>
          </div>

          <button
            type="button"
            className="mt-6 w-full cursor-pointer rounded-full bg-foreground py-2 text-sm font-semibold text-background transition-colors duration-200 hover:opacity-90 sm:ml-auto sm:w-auto sm:px-8"
          >
            Añadir a lista de préstamos
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookDetailModal
