import { useEffect } from 'react'
import './Movie.scss'
import SwiperMovie from "../SwiperMovie/SwiperMovie"
import { useDispatch, useSelector } from 'react-redux'
import { fetchShows } from '../../redux/slice/filmSlice'
import { Spinner } from "@chakra-ui/react"
export function Movie() {
  
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
              <h4 className='movie__list-title'>Популярные фильмы</h4>      
              <SwiperMovie discover="movie" movie={useSelector((state) => state.film.film)} />   
              </div>
              <div>
                <h4>Популярные сериалы</h4>
                <SwiperMovie discover="tv" movie={useSelector((state) => state.film.tvshows)}/>   
              </div>
          </article>
        </div>
      </div>
  </main>
  )
}
