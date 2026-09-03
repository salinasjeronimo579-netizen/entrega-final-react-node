import { Link } from 'react-router-dom'

export function LayoutLogin({ children, maxWidth = 'max-w-sm' }) {
  return (
    <div className="animate-fade-in relative flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <Link
        to="/"
        className="absolute left-6 top-6 flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted"
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
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Volver
      </Link>

      <div
        className={`flex w-full ${maxWidth} flex-col items-center gap-6 rounded-2xl border border-border bg-surface p-8`}
      >
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 text-foreground"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          <span className="text-xl font-bold tracking-wide text-foreground">
            BOOKER
          </span>
        </div>

        {children}
      </div>
    </div>
  )
}

export default LayoutLogin
