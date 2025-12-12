import React from 'react'
import "./RegisterPage.scss"
import {useState} from "react"
function RegisterPage() {
     const [email, setEmail] = useState<string>("");
     const [username, setUsername] = useState<string>("");
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
        <p className="loginForm__text">Имя пользователя</p>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <p className="loginForm__text">Пароль</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div>
        <button className="loginForm__button">Регистрация</button>
      </div>
    </div>
  )
}

export default RegisterPage