import "./Header.scss";
import { Link, NavLink } from "react-router";
import { Search } from "../Search/Search";
import { logout, profile } from "../../app/api/authApi"
import { useEffect, useState } from "react";
export function Header({isAuth, setIsAuth}) {
    const handleLogout = async() => {
      try {
        await logout()
      setIsAuth(false)
      } catch (error) {
        console.log(error)
      }
      
    }
          
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__search">
            <h1 className="header__title">
              <NavLink className="header__title-link" to="/">
                Movie App
              </NavLink>
            </h1>
            <Search />
          </div>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-item">
                {isAuth ? 
                <>
                <Link to={`/profile`} className="header__menu-link popup-btn">профиль</Link>
                  <button onClick={() => handleLogout()} className="header__menu-link popup-btn">выход</button>
                </>
                  
                 : <NavLink to="/auth/login">
                  <button className="header__menu-link popup-btn">Войти</button>
                </NavLink>  }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
