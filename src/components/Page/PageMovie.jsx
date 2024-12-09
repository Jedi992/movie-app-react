import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import './PageMovie.scss'

export function PageMovie() {
  const [movieCard, setMovieCard] = useState({})
  const API_URL_MOVIE_DETAILS = `https://kinopoiskapiunofficial.tech/api/v2.2/films/`
  const {movieId} = useParams()
  const movieLoader = async () => {
    const res = await axios.get(API_URL_MOVIE_DETAILS + movieId   , {
      headers: {
          'X-API-KEY': '229eed78-a9a7-44b0-ae3b-73d7798e927c',
          'Content-Type': 'application/json',
      },
    })
    setMovieCard(res.data)
  }
  useEffect(() => {
    movieLoader()
  }, [movieId])

  console.log(movieCard)
  

  return (
    <div className='container'>
       <div className='main__wrapper'>
        <div className='movie__block'>
          <div className='movie__img-block'><img width={400} src={movieCard.coverUrl} alt="#" /></div>
          <div className='movie__title-block'>
            <h2 className='movie__title'>{movieCard.nameRu}</h2>
            <p>Год производства: {movieCard.endYear}</p>
            <p>Жанры: { movieCard.genres.map(elem => <li>{elem.genre}</li>)}</p>
            <p>Год производства: {movieCard.endYear}</p>
          </div>
        </div>
          <div className='moviecard__description'>{movieCard.description}</div>

      </div>
      
    </div>
  )
}
