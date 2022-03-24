import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./LoginPage.scss";

const LoginPage = (): JSX.Element => {
  const [registered, setRegistered] = useState(false);

  const registerOnClick = () => {
    if (registered === false) {
      setRegistered(true);
    } else {
      setRegistered(false);
    }
  };
  return (
    <>
      <h1 className="title">Iniciar sesión</h1>
      <LoginForm />
      {registered === false ? (
        <div className="register">
          <p className="register__text">¿No tienes cuenta? Regístrate</p>
          <p className="register__click" onClick={registerOnClick}>
            aquí
          </p>
        </div>
      ) : (
        <>
          <p className="close" onClick={registerOnClick}>
            Cerrar registro
          </p>
          <RegisterForm />
        </>
      )}
    </>
  );
};

export default LoginPage;
