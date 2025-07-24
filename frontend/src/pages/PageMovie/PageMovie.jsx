import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import './PageMovie.scss'
import KinoboxPlayer from '../../components/KinoboxPlayer/KinoboxPlayer'

export function PageMovie({API_KEY}) {
  const [movieCard, setMovieCard] = useState({})
  const {movieId} = useParams()
  
  
  useEffect(() => {
    movieLoader()
  }, [movieId])

  return (
    <div className='container'>
       <div className='main__wrapper'>
        <div className='movie__block'>
          <div className='movie__img-block'><img className='movie__img' src={movieCard.coverUrl || movieCard.posterUrl} alt="#" /></div>
          <div className='movie__title-block'>
            <h2 className='movie__title'>{movieCard.nameRu}</h2>
            <p className='movie__year'>Год производства: {movieCard.year}</p>
            <p className='movie__genre'>Жанры: {movieCard.genres?.map(elem => elem.genre).join(',')}</p>
            <p className='movie__raiting'>Рейтинг кинопоиска: {movieCard.ratingKinopoisk}</p>
          <div className='moviecard__description'><h6 className='moviecard__title'>Описание</h6> {movieCard.description}</div>

          </div>
        </div>
          <div className="movie__player">
        <KinoboxPlayer kpId={movieId} />
      </div>
      </div>
      
    </div>
  )
}