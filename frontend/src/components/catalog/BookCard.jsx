export function BookCard({ book, onClick }) {
  return (
    <div
      onClick={() => onClick(book)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-foreground active:scale-[0.98]"
    >
      <div className="overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="aspect-[3/4] w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-0.5 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-foreground">
          {book.title}
        </h3>
        <p className="text-xs text-muted">{book.author}</p>
        <span className="mt-1 w-fit rounded-full bg-background px-2 py-0.5 text-[11px] text-muted">
          {book.genre}
        </span>
      </div>
    </div>
  )
}

export default BookCard
