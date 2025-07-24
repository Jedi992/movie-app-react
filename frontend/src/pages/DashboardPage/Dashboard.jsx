import { useEffect } from 'react'
import "./Dashboard.scss"
import SwiperMovie from "../../components/SwiperMovie/SwiperMovie"
import {Link} from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { fetchShows } from '../../redux/slice/filmSlice'
import { Spinner } from "@chakra-ui/react"
export function Dashboard() {
  
  return (
    <main>
      <div className="container">
        <div className="main__wrapper">
          <article className="movie__list">
            <div className="movie__list-menu">
              <div className="container">
              </div>
            </div>
            <div className="movie__list-grid">
              <div className="movie__block-title">
              <h4 className="movie__list-title">Популярные фильмы</h4>      
              <h4 className="movie__list-text" > <Link to="/popular/movie"> Показать всё &gt;</Link></h4>
              </div>
              <SwiperMovie discover="movie" pageNum={1} movie={useSelector((state) => state.film.film)} />   
              </div>
              <div>
                <div className="movie__block-title">
                <h4 className="movie__list-title">Популярные сериалы</h4>
                <h4 className="movie__list-text"> <Link to="/popular/tv">Показать всё &gt;</Link></h4>
                </div>
                <SwiperMovie discover="tv" pageNum={1} movie={useSelector((state) => state.film.tvshows)}/>   
              </div>
          </article>
        </div>
      </div>
  </main>
  )
}
