import { useState } from 'react'

export function FormLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="username"
          className="text-sm font-medium text-foreground"
        >
          Nombre de usuario
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Ingresa tu nombre de usuario"
          className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="password"
          className="text-sm font-medium text-foreground"
        >
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Ingresa tu contraseña"
          className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-muted"
        />
      </div>

      <label
        htmlFor="keep-logged-in"
        className="flex items-center gap-2 text-sm text-muted"
      >
        <input
          id="keep-logged-in"
          type="checkbox"
          checked={keepLoggedIn}
          onChange={(event) => setKeepLoggedIn(event.target.checked)}
          className="h-4 w-4 rounded border-border text-foreground focus:ring-muted"
        />
        Mantener sesión iniciada
      </label>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-full bg-foreground py-2 text-sm font-semibold text-background transition-colors duration-200 hover:opacity-90"
      >
        Iniciar sesión
      </button>
    </form>
  )
}

export default FormLogin
