import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import "./CardCinema.scss"

function CardCinema({mediaType}) {


  const film = useSelector((state) => state.film)
   const tv = mediaType === "tv" ? film?.tvshows.results : null
  const movie = mediaType === "movie" ? film?.film.results : null 
  console.log(film)
  const getDayMovie = (movie) => {
const days = [
  "янв.",
  "фев.",
  "март.",
  "апр.",
  "май.",
  "июн.",
  "июл.",
  "авг.",
  "сен.",
  "окт.",
  "нояб.",
  "дек."
];
const d = new Date(movie);
const n = d.getMonth() ;
 return d.getDate() + " " + days[n] + " " + d.getFullYear() + " г.";
 
  }
  console.log(tv)
  return (
    <div>
      <div className="card-cinema__grid">
        {(film.statusTvShows || film.statusFilm) === "success" && (movie || tv).map((elem) => (
          <div className="card-cinema" key={elem.id}>
            <div className="card-block__image">
              <p className={"card-vote " + (elem.vote_average > 7
    ? "card-vote__text-HI"
    : elem.vote_average > 3
    ? "card-vote__text-medium"
    : elem.vote_average > 0
    ? "card-vote__text-low"
    : "card-vote__text-null")}>{elem.vote_average.toFixed(1)}</p>
              <img
              src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}
              alt={elem.title}
              className="card-cinema__poster"
            />
            </div>
            
            <div className="card-cinema__info">
              <h2 className="card-cinema__title">{elem.title || elem.name}</h2>
              <p className="card-cinema__date">{getDayMovie(elem.release_date || elem.first_air_date)}</p>
              <div className="card-cinema__rating">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardCinema
