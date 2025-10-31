import "./Header.scss";
import { NavLink } from "react-router";
import { Search } from "../Search/Search";
import AuthService from '../../services/AuthService';
import { useEffect,useState } from "react";
export function Header() {
    const [token, setToken] = useState(localStorage.getItem("token"));
     useEffect(() => {
    const interval = setInterval(() => {
      const currentToken = localStorage.getItem("token");
      if (currentToken !== token) {
        setToken(currentToken);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [token]);
  const handleLogout = () => {
    AuthService.logout();
    setToken(null); 
  };
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
                {token ? <button onClick={() => handleLogout()} className="header__menu-link popup-btn">Выйти</button> :
                <NavLink to={"/auth/"}>
                  <button className="header__menu-link popup-btn">Войти</button>
                </NavLink> }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
