export function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`h-9 w-9 cursor-pointer rounded-full text-sm font-medium transition-colors duration-200 ${
            page === currentPage
              ? 'bg-foreground text-background'
              : 'border border-border text-foreground hover:border-foreground'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination
