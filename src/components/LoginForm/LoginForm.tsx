import React from "react";

const LoginForm = (): JSX.Element => (
  <form className="login-form" noValidate autoComplete="off">
    <p className="login-form__username">Nombre de usuario</p>
    <label htmlFor="username"></label>
    <input
      type="text"
      id="username"
      placeholder="Introduce tu nombre de usuario"
      name="username"
      className="login-form__input"
      // value={userData.username}
      required
      // onChange={changeUserData}
    ></input>
  </form>
);

export default LoginForm;
