import React from 'react'

export function Card({movieList}) {
  const validTypes = ["TV_SERIES", "FILM", "TV_SHOW", "MINI_SERIES"]
   
  return (
  <>
    {
    movieList.map(movie => {
      if(validTypes.includes(movie.type) && movie.nameRu) {
       return <section key={movie.kinopoiskId || movie.filmId} className="movie__list-card">
        <div className="movie__card-image">
          <img width="350" src={movie.posterUrlPreview} alt="#" />
        </div>
        <div className="movie__card-content">
          <h3 className="movie__card-title">{movie.nameRu}</h3>
        </div>
        <div className="movie__card-footer">
          <span className="movie__card-rating">Рэйтинг: {movie.ratingKinopoisk || movie.rating}</span>
          <button className="movie__card-button">Добавить в желаемое</button>
        </div>
      </section>
      }})} 

      
  </>
  )
}

