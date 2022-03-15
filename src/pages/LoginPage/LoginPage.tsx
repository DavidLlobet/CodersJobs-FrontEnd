import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.scss";

const LoginPage = (): JSX.Element => (
  <>
    <p className="title">Iniciar sesión</p>
    <LoginForm />
    <div className="register">
      <p className="register__text">¿No tienes cuenta? Regístrate</p>
      <p className="register__click">aquí</p>
    </div>
  </>
);

export default LoginPage;
