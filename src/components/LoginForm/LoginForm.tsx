import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import "./LoginForm.scss";

const LoginForm = (): JSX.Element => {
  const initialData = {
    name: "",
    email: "",
    userName: "",
    password: "",
    isAuthenticated: false,
    isAdmin: false,
  };

  const [userData, setUserData] = useState(initialData);
  const [isDisable, setIsDisable] = useState(true);
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const checkForm = () => {
    if (userData.userName !== "" && userData.password !== "") {
      setIsDisable(false);
    }
  };

  const changeUserData = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
    checkForm();
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser(userData);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <form
      className="login-form"
      aria-label="login-form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <p className="login-form__text">Nombre de usuario</p>
      <label htmlFor="userName"></label>
      <input
        type="text"
        id="userName"
        name="userName"
        className="login-form__input"
        value={userData.userName}
        required
        onChange={changeUserData}
        placeholder="Usuario"
        autoComplete="off"
      ></input>
      <p className="login-form__text">Contraseña</p>
      <label htmlFor="password"></label>
      <input
        type="password"
        id="password"
        name="password"
        className="login-form__input"
        value={userData.password}
        required
        onChange={changeUserData}
        placeholder="Contraseña"
        autoComplete="off"
      ></input>
      <button type="submit" className="login-form__button" disabled={isDisable}>
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
