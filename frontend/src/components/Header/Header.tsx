import "./Header.scss";
import { NavLink } from "react-router";
import { Search } from "../Search/Search";
import { profile } from "../../app/api/authApi"
import { useEffect, useState } from "react";
export function Header() {
    const token = localStorage.getItem("key")
    
    const [profileStats, setProfileStats] = useState(null)
    const getProfile = async() => {
            const data = await profile()
            console.log(data)
            setProfileStats(data)
            
        }
        useEffect(() => {
          if(token) {
            getProfile()
          }
            
            
        },[])
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
                {token && profileStats ? <NavLink to={`/profile/${profileStats._id}`}>
                  <button className="header__menu-link popup-btn">профиль</button>
                </NavLink>  : <NavLink to="/auth/login">
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
