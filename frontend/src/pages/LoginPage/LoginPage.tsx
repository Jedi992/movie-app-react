import React, { useState } from "react";
import "./LoginPage.scss";
import AuthService from "../../services/AuthService";
import { Link } from "react-router";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="main__wrapper container">
      <div>
        <p className="loginForm__text">Почта</p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p className="loginForm__text">Пароль</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div>
        <button className="loginForm__button" onClick={() => AuthService.login(email, password)}>Войти</button>
        <Link to="/register" className="loginForm__button">Регистрация</Link>
      </div>
    </div>
  );
}

export default LoginPage;
