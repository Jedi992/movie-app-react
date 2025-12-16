import React, { useState } from "react";
import "./LoginPage.scss";
import { Link } from "react-router";
import { login } from "../../app/api/authApi"

function LoginPage({ setIsAuth }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);

      localStorage.setItem("key", data.accessToken);
      setIsAuth(true)
    }catch(err) {
      console.log(err)
    }
  }
  
  return (
    <div className="main__wrapper container">
      <div>
        <p className="loginForm__text">Почта</p>
        <form onSubmit={handleLogin}>
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
        <div>
          <button className="loginForm__button" type="submit">Войти</button>
          <Link to="/register" className="loginForm__button">Регистрация</Link>
        </div>
        </form>
      </div>
      <div>
      </div>
    </div>
  );
}

export default LoginPage;
