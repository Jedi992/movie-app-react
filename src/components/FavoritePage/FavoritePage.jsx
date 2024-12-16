import React, {useContext}  from 'react'
import { favoriteContext } from '../../App'
import {Link} from "react-router"

export function FavoritePage() {
  const { favoriteList, setFavoriteList } = useContext(favoriteContext)
 let list = favoriteList.filter((elem, index) => favoriteList.indexOf(elem) === index)
  const delMovie = (movId) => {
   const filteredList = favoriteList.filter(movie => ((movie.kinopoiskId || movie.filmId) !== (movId.kinopoiskId || movId.filmId)))
   setFavoriteList(filteredList)
  }
  return (
    <div className='container'>
        <div className='main__wrapper'>
        <span>Избранное: </span>
        <div className='movie__list-grid'>
        {
   list.map((movie) =>  { 
       
    return <section key={movie.kinopoiskId || movie.filmId} className="movie__list-card" >
     <Link key={movie.kinopoiskId} to={`/movie/details/${movie.kinopoiskId || movie.filmId}`}><div className="movie__card-image">
          <img width="350" src={movie.posterUrlPreview} alt="#" />
        </div></Link>
        <div className="movie__card-content">
          <h3 className="movie__card-title">{movie.nameRu}</h3>
        </div>
        <div className="movie__card-footer">
          <span className="movie__card-rating">Рейтинг: {movie.ratingKinopoisk || movie.rating}</span>
          <button onClick={() => delMovie(movie)}>Удалить</button>
        </div>
      </section>
   })}
  </div>
        </div>
    </div>
  )
}

