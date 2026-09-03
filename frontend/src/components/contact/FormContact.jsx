import { useState } from 'react'

const requestTypes = [
  { code: 'peticion', label: 'Petición' },
  { code: 'queja', label: 'Queja' },
  { code: 'reclamo', label: 'Reclamo' },
  { code: 'sugerencia', label: 'Sugerencia' },
]

export function FormContact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [requestType, setRequestType] = useState(requestTypes[0])
  const [message, setMessage] = useState('')
  const [isTypeMenuOpen, setIsTypeMenuOpen] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Nombre completo
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ingresa tu nombre"
          className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Correo
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="tu@correo.com"
          className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
        />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-foreground">
          Tipo de solicitud
        </span>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsTypeMenuOpen((open) => !open)}
            className="flex w-full cursor-pointer items-center justify-between rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground hover:border-foreground"
          >
            {requestType.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 text-muted"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          {isTypeMenuOpen && (
            <ul className="absolute left-0 top-full z-10 mt-2 w-full overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
              {requestTypes.map((type) => (
                <li key={type.code}>
                  <button
                    type="button"
                    onClick={() => {
                      setRequestType(type)
                      setIsTypeMenuOpen(false)
                    }}
                    className="w-full cursor-pointer px-4 py-2 text-left text-sm text-foreground hover:bg-background"
                  >
                    {type.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Cuéntanos en qué podemos ayudarte"
          className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
        />
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-full bg-foreground py-2 text-sm font-semibold text-background transition-colors duration-200 hover:opacity-90"
      >
        Enviar
      </button>
    </form>
  )
}

export default FormContact
