
import './Header.scss'
import { NavLink } from "react-router";

export function Header() {
  
  return (
       <header>
      <div className="container">
        <div className="header__wrapper">
          <h1 className="header__title">
            <a className="header__title-link" href="/">Movie App</a>
          </h1>
          <form className="header__search-form" onClick={() => preventDefault()}>
            <input className="header__search-input"  type="text" placeholder="Поиск..." />
          </form>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-item">
              <NavLink to="/"><button className="header__menu-link" href="#">Главная</button></NavLink>
              </li>
              <li className="header__menu-item">
               <button className="header__menu-link popup-btn">Избранное</button> 
              </li>
              <li className="header__menu-item">
              <NavLink to="/about"><button className="header__menu-link">О нас</button></NavLink>
              </li>
              <li className="header__menu-item">
                <button className="header__menu-link" href="#">Контакты</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

