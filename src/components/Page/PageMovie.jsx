import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import './PageMovie.scss'

<<<<<<< HEAD
export function PageMovie() {
  const [movieCard, setMovieCard] = useState({})
  const API_URL_MOVIE_DETAILS = `https://kinopoiskapiunofficial.tech/api/v2.2/films/`
=======
export function PageMovie({API_KEY}) {
  const [movieCard, setMovieCard] = useState({})
>>>>>>> 83cd07d (add favoritePage)
  const {movieId} = useParams()
  const API_URL_MOVIE_DETAILS = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`
  const movieLoader = async () => {
    const res = await axios.get(API_URL_MOVIE_DETAILS, {
      headers: {
          'X-API-KEY': `${API_KEY}`,
          'Content-Type': 'application/json',
      },
    })
    setMovieCard(res.data)
  }
  
  useEffect(() => {
    movieLoader()
  }, [movieId])

<<<<<<< HEAD
  console.log(movieCard)
=======
>>>>>>> 83cd07d (add favoritePage)
  

  return (
    <div className='container'>
       <div className='main__wrapper'>
        <div className='movie__block'>
<<<<<<< HEAD
          <div className='movie__img-block'><img width={400} src={movieCard.coverUrl} alt="#" /></div>
          <div className='movie__title-block'>
            <h2 className='movie__title'>{movieCard.nameRu}</h2>
            <p>Год производства: {movieCard.endYear}</p>
            <p>Жанры: { movieCard.genres.map(elem => <li>{elem.genre}</li>)}</p>
            <p>Год производства: {movieCard.endYear}</p>
=======
          <div className='movie__img-block'><img className='movie__img' src={movieCard.coverUrl || movieCard.posterUrl} alt="#" /></div>
          <div className='movie__title-block'>
            <h2 className='movie__title'>{movieCard.nameRu}</h2>
            <p className='movie__year'>Год производства: {movieCard.year}</p>
            <p className='movie__genre'>Жанры: {movieCard.genres?.map(elem => elem.genre).join(',')}</p>
            <p className='movie__raiting'>Рейтинг кинопоиска: {movieCard.ratingKinopoisk}</p>
>>>>>>> 83cd07d (add favoritePage)
          </div>
        </div>
          <div className='moviecard__description'>{movieCard.description}</div>

      </div>
      
    </div>
  )
}