export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface py-8 text-center text-sm text-muted">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-base font-semibold text-foreground">BOOKER</p>
        <p className="mt-2">
          © {new Date().getFullYear()} Booker. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
