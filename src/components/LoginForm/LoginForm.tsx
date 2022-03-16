import React, { useState, ChangeEvent } from "react";
import "./LoginForm.scss";

const LoginForm = (): JSX.Element => {
  const initialData = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialData);

  const changeUserData = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form className="login-form" noValidate autoComplete="off">
      <p className="login-form__text">Nombre de usuario</p>
      <label htmlFor="username"></label>
      <input
        type="text"
        id="username"
        name="username"
        className="login-form__input"
        value={userData.username}
        required
        onChange={changeUserData}
      ></input>
      <p className="login-form__text">Contraseña</p>
      <label htmlFor="password"></label>
      <input
        type="text"
        id="password"
        name="password"
        className="login-form__input"
        value={userData.password}
        required
        onChange={changeUserData}
      ></input>
      <button type="submit" className="login-form__button">
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
