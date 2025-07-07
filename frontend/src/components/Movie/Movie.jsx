import { useEffect } from 'react'
import './Movie.scss'
import SwiperMovie from "../SwiperMovie/SwiperMovie"
import { useDispatch, useSelector } from 'react-redux'
import { fetchShows } from '../../redux/slice/filmSlice'
import { Spinner } from "@chakra-ui/react"
import SwiperTvShows from '../SwiperTvShows/SwiperTvShows'
export function Movie({API_KEY,movieSearch}) {
  
  const itemsMovie = useSelector((state) => state.film.film)
  const dispatch = useDispatch()
  // console.log(itemsMovie)
  const fetchLoader = async () => {
    // dispatch(fetchShows({
    //   API_KEY,
    // }))
    
  }
   useEffect(() => {
      fetchLoader(); 
  },[movieSearch] )
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
              <SwiperMovie/>   
              </div>
              <div>
                <h4>Популярные сериалы</h4>
                <SwiperTvShows />
              </div>
          </article>
        </div>
      </div>
  </main>
  )
}
