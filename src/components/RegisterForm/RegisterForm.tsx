import { ChangeEvent, useState } from "react";

const RegisterForm = (): JSX.Element => {
  const initialData = {
    name: "",
    email: "",
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
    <form className="register-form" noValidate autoComplete="off">
      <p className="register-form__text">Escribe tu nombre</p>
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        name="name"
        className="register-form__input"
        value={userData.name}
        required
        onChange={changeUserData}
      ></input>
      <p className="register-form__text">Escribe tu email</p>
      <label htmlFor="email"></label>
      <input
        type="email"
        id="email"
        name="email"
        className="register-form__input"
        value={userData.email}
        required
        onChange={changeUserData}
      ></input>
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
      <button type="submit" className="register-form__button">
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;
