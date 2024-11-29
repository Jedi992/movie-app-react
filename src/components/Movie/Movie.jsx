import React, { useEffect, useState } from 'react'
import './Movie.scss'
import axios from 'axios'

export function Movie() {
  const [movieList, setMovieList] = useState('') 

  useEffect(() => {
    axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films`, {
      headers: {
          'X-API-KEY': '229eed78-a9a7-44b0-ae3b-73d7798e927c',
          'Content-Type': 'application/json',
      },
    }).then(res => setMovieList(res.data)).catch(err => console.log(err))
  },[setMovieList] )
  
console.log(movieList)

  return (
    <main>
      <div className="container">
        <div className="main__wrapper">
          <article className="movie__list">
            <div className="movie__list-menu">
              <h2 className="movie__list-title">Список фильмов</h2>
              <div className="container">
              </div>
            </div>
            <div className="movie__list-grid">
              {/* {movieList.items.map(mov => <ul>
                <li>{mov}</li>
              </ul>)} */}
              </div>
          </article>
          <div className="modal">
          </div>
          <div id="popup" className="popup">
            <div className="popup__body">
              <div className="popup__content">
                <a href="#" className="popup__close"></a>
                <h2 className="popup__title">Желаeмое</h2>
                <div className="popup__text">
                  <div className="popup__text-block">
                  <span className="popup__text-span">Список пуст!</span>
                </div>
                  <ul className="popup__list-movie">
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="movie__pagination">
          <ul className="movie__pagination-list">
          </ul>
        </div>
      </div>
  </main>
  )
}
