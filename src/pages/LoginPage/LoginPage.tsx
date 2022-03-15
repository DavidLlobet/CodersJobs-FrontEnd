import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./LoginPage.scss";

const LoginPage = (): JSX.Element => {
  const [state, setState] = useState(false);

  const registerOnClick = () => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };
  return (
    <>
      <p className="title">Iniciar sesión</p>
      <LoginForm />
      {state === false ? (
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
