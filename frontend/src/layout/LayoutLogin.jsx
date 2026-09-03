export function LayoutLogin({ children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl border border-border bg-surface p-8">
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
