import React from 'react'
import { info } from 'sass'
import { Link } from 'react-router'

export function Card({movieList}) {
  const validTypes = ["TV_SERIES", "FILM", "TV_SHOW", "MINI_SERIES"]
  const cardSearch = (info, e) => {
    if(e.target.closest('button')) {
      return
    }
  }
  
  return (
  <>
    {
    movieList.map(movie => {
      if(validTypes.includes(movie.type) && movie.nameRu) {
       return <section onClick={(e) => 
        cardSearch(movie.kinopoiskId, e)
       } key={movie.kinopoiskId || movie.filmId} className="movie__list-card" >
       <Link key={movie.kinopoiskId} to={`/movie/details/${movie.kinopoiskId}`}> <div className="movie__card-image">
          <img width="350" src={movie.posterUrlPreview} alt="#" />
        </div> </Link>
        <div className="movie__card-content">
          <h3 className="movie__card-title">{movie.nameRu}</h3>
        </div>
        <div className="movie__card-footer">
          <span className="movie__card-rating">Рэйтинг: {movie.ratingKinopoisk || movie.rating}</span>
          <button className="movie__card-button"  >Добавить в Избранное</button> 
        </div>
      </section>
      }})} 

      
  </>
  )
}

