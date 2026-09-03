import { useState } from 'react'

const documentTypes = [
  { code: 'CC', label: 'Cédula de ciudadanía' },
  { code: 'CE', label: 'Cédula de extranjería' },
  { code: 'TI', label: 'Tarjeta de identidad' },
  { code: 'PAS', label: 'Pasaporte' },
]

export function FormRegister() {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [secondLastName, setSecondLastName] = useState('')
  const [documentType, setDocumentType] = useState(documentTypes[0])
  const [documentNumber, setDocumentNumber] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isDocMenuOpen, setIsDocMenuOpen] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="first-name"
            className="text-sm font-medium text-foreground"
          >
            Primer nombre
          </label>
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Primer nombre"
            className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="middle-name"
            className="text-sm font-medium text-foreground"
          >
            Segundo nombre
          </label>
          <input
            id="middle-name"
            type="text"
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
            placeholder="Segundo nombre (opcional)"
            className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="last-name"
            className="text-sm font-medium text-foreground"
          >
            Primer apellido
          </label>
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Primer apellido"
            className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="second-last-name"
            className="text-sm font-medium text-foreground"
          >
            Segundo apellido
          </label>
          <input
            id="second-last-name"
            type="text"
            value={secondLastName}
            onChange={(event) => setSecondLastName(event.target.value)}
            placeholder="Segundo apellido (opcional)"
            className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="document-number"
          className="text-sm font-medium text-foreground"
        >
          Número de documento de identidad
        </label>
        <div className="relative">
          <input
            id="document-number"
            type="text"
            value={documentNumber}
            onChange={(event) => setDocumentNumber(event.target.value)}
            placeholder="Número de documento"
            className="w-full rounded-full border border-border bg-background py-2 pl-4 pr-24 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
          />
          <div className="absolute right-1 top-1/2 -translate-y-1/2">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDocMenuOpen((open) => !open)}
                className="flex cursor-pointer items-center gap-1 rounded-full border border-border bg-surface px-2 py-1 text-xs font-medium text-foreground hover:border-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
                {documentType.code}
              </button>

              {isDocMenuOpen && (
                <ul className="absolute right-0 top-full z-10 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
                  {documentTypes.map((type) => (
                    <li key={type.code}>
                      <button
                        type="button"
                        onClick={() => {
                          setDocumentType(type)
                          setIsDocMenuOpen(false)
                        }}
                        className="w-full cursor-pointer px-3 py-2 text-left text-sm text-foreground hover:bg-background"
                      >
                        {type.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
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
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Número de celular
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Número de celular"
          className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="address"
          className="text-sm font-medium text-foreground"
        >
          Dirección
        </label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          placeholder="Dirección"
          className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="register-password"
            className="text-sm font-medium text-foreground"
          >
            Contraseña
          </label>
          <input
            id="register-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Contraseña"
            className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="confirm-password"
            className="text-sm font-medium text-foreground"
          >
            Confirmar contraseña
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirmar contraseña"
            className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-full bg-foreground py-2 text-sm font-semibold text-background transition-colors duration-200 hover:opacity-90"
      >
        Registrarme
      </button>
    </form>
  )
}

export default FormRegister
