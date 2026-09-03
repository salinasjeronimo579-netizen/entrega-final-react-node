import { useState } from 'react'

export function CatalogToolbar({
  searchTerm,
  onSearchChange,
  genres,
  selectedGenre,
  onGenreChange,
}) {
  const [isGenreMenuOpen, setIsGenreMenuOpen] = useState(false)

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar libros por título..."
          className="w-full rounded-full border border-border bg-background py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
        />
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsGenreMenuOpen((open) => !open)}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground hover:border-foreground sm:w-auto"
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
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
          {selectedGenre === 'Todos' ? 'Género' : selectedGenre}
        </button>

        {isGenreMenuOpen && (
          <ul className="absolute right-0 top-full z-10 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
            {genres.map((genre) => (
              <li key={genre}>
                <button
                  type="button"
                  onClick={() => {
                    onGenreChange(genre)
                    setIsGenreMenuOpen(false)
                  }}
                  className={`w-full cursor-pointer px-3 py-2 text-left text-sm hover:bg-background ${
                    genre === selectedGenre
                      ? 'font-semibold text-foreground'
                      : 'text-foreground'
                  }`}
                >
                  {genre}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default CatalogToolbar
