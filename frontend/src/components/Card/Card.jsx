import React, {useContext}  from 'react'
import { favoriteContext } from '../../App'
import { Link } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../redux/slice/cartSlice'

export function Card({movieList, movieSearch}) {
  const validTypes = ["TV_SERIES", "FILM", "TV_SHOW", "MINI_SERIES"]
  const favoriteList = useSelector(list => list.counter.items )
  const dispatch = useDispatch()
  console.log(favoriteList)

  const handleClickAddFavorites = (info ) => {
    dispatch(addItem(info))
    }

    

  return (
  <>
    {
   ( movieList || movieSearch).map(movie => {
      if(validTypes.includes(movie.type) && movie.nameRu) {
       return <section key={movie.kinopoiskId || movie.filmId} className="movie__list-card" >
       <Link key={movie.kinopoiskId} to={`/movie/details/${movie.kinopoiskId || movie.filmId}`}> <div className="movie__card-image">
          <img width="350" src={movie.posterUrlPreview} alt="#" />
        </div> </Link>
        <div className="movie__card-content">
          <h3 className="movie__card-title">{movie.nameRu}</h3>
        </div>
        <div className="movie__card-footer">
          <span className="movie__card-rating">Рейтинг: {movie.ratingKinopoisk || movie.rating}</span>
          <button className="movie__card-button" onClick={() => handleClickAddFavorites(movie)} >Добавить в Избранное</button> 
        </div>
      </section>
      }})} 

      
  </>
  )
}

