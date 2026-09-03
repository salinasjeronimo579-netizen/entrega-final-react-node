export function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
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
        placeholder="Buscar por título, autor o categoría..."
        className="w-full rounded-full border border-border bg-background py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
      />
    </div>
  )
}

export default SearchBar
