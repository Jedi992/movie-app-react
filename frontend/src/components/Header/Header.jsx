
import './Header.scss'
import { NavLink } from "react-router";
import {Search} from "../Search/Search"


export function Header({API_KEY, setMovieSearch, setMovieSearchText}) {
  return (
       <header>
      <div className="container">
        <div className="header__wrapper">
          <h1 onClick={() => setMovieSearch([])} className="header__title">
           <NavLink className="header__title-link" to="/">Movie App</NavLink> 
          </h1>
          <Search setMovieSearchText={setMovieSearchText} setMovieSearch={setMovieSearch} API_KEY={API_KEY}/>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-item">
               <NavLink to={'/auth/'}><button className="header__menu-link popup-btn">Вход</button></NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

