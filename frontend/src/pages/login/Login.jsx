import LayoutLogin from '../../layout/LayoutLogin.jsx'
import FormLogin from '../../components/login/FormLogin.jsx'

export function Login() {
  return (
    <LayoutLogin>
      <FormLogin />

      <p className="text-sm text-muted">
        ¿No estás registrado?{' '}
        <a href="#" className="font-medium text-foreground hover:underline">
          sign in
        </a>
      </p>
    </LayoutLogin>
  )
}

export default Login
