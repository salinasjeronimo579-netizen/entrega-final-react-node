import { Link } from 'react-router-dom'

export function LoginPromptModal({ onClose }) {
  return (
    <div
      className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={(event) => {
        event.stopPropagation()
        onClose()
      }}
    >
      <div
        className="animate-fade-in w-full max-w-sm rounded-2xl border border-border bg-surface p-6 text-center shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-foreground">
          Inicia sesión para continuar
        </h3>
        <p className="mt-2 text-sm text-muted">
          Necesitas una cuenta para añadir libros a tu lista de préstamos.
          ¿Deseas iniciar sesión ahora?
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row-reverse">
          <Link
            to="/login"
            className="w-full cursor-pointer rounded-full bg-foreground py-2 text-sm font-semibold text-background transition-colors duration-200 hover:opacity-90 sm:flex-1"
          >
            Iniciar sesión
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="w-full cursor-pointer rounded-full border border-border py-2 text-sm font-medium text-foreground hover:border-foreground sm:flex-1"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPromptModal
