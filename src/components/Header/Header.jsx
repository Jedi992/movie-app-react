
import './Header.scss'

export function Header() {

  return (
       <header>
      <div className="container">
        <div className="header__wrapper">
          <h1 className="header__title">
            <a className="header__title-link" href="/">Movie App</a>
          </h1>
          <form className="header__search-form">
            <input className="header__search-input" type="text" placeholder="Поиск..." />
          </form>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-item">
                <button className="header__menu-link" href="#">Главная</button>
              </li>
              <li className="header__menu-item">
                <button className="header__menu-link popup-btn" href="#">Желаeмое</button>
              </li>
              <li className="header__menu-item">
                <button className="header__menu-link" href="#">О нас</button>
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

