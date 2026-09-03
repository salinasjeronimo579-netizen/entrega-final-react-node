import { useState } from 'react'
import LayoutLogin from '../../layout/LayoutLogin.jsx'
import FormLogin from '../../components/login/FormLogin.jsx'
import FormRegister from '../../components/login/FormRegister.jsx'

export function Login() {
  const [isRegistering, setIsRegistering] = useState(false)

  return (
    <LayoutLogin maxWidth={isRegistering ? 'max-w-md' : 'max-w-sm'}>
      {isRegistering ? <FormRegister /> : <FormLogin />}

      <p className="text-sm text-muted">
        {isRegistering ? (
          <>
            ¿Ya tienes cuenta?{' '}
            <button
              type="button"
              onClick={() => setIsRegistering(false)}
              className="cursor-pointer font-medium text-foreground hover:underline"
            >
              Iniciar sesión
            </button>
          </>
        ) : (
          <>
            ¿No estás registrado?{' '}
            <button
              type="button"
              onClick={() => setIsRegistering(true)}
              className="cursor-pointer font-medium text-foreground hover:underline"
            >
              sign in
            </button>
          </>
        )}
      </p>
    </LayoutLogin>
  )
}

export default Login
