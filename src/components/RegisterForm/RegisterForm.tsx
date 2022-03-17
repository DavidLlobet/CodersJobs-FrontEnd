import { ChangeEvent, FormEvent, useState } from "react";
import useUser from "../../hooks/useUser";
import "./RegisterForm.scss";

const RegisterForm = (): JSX.Element => {
  const initialData = {
    name: "",
    email: "",
    userName: "",
    password: "",
    isAdmin: false,
  };

  const [userData, setUserData] = useState(initialData);
  const { registerUser } = useUser();

  const changeUserData = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerUser(userData);
  };

  return (
    <form
      className="register-form"
      aria-label="register-form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
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
      <label htmlFor="userName"></label>
      <input
        type="text"
        id="userName"
        name="userName"
        className="login-form__input"
        value={userData.userName}
        required
        onChange={changeUserData}
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
      ></input>
      <button type="submit" className="register-form__button">
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;
