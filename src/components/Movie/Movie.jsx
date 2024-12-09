import React, { useEffect, useState } from 'react'
import './Movie.scss'
import axios from 'axios'
import { Card } from "../Card/Card"
import { Pagination } from '../Pagination/Pagination'
import { useSearchParams } from "react-router"

export function Movie() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
const API_URL_MOVIE_PAGE = `https://kinopoiskapiunofficial.tech/api/v2.2/films?page=`

const API_URL_MOVIE_SEARCH = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=`
  const [movieList, setMovieList] = useState([]) 
  const [pagination, setPagination] = useState(0)
  const [currentPage, setCurrentPage] = useState(page || 1)
  const [pageMovie, SetPageMovie] = useState(0)
  
  const fetchLoader = async () => {
    const res = await axios.get(API_URL_MOVIE_PAGE + currentPage   , {
      headers: {
          'X-API-KEY': '229eed78-a9a7-44b0-ae3b-73d7798e927c',
          'Content-Type': 'application/json',
      },
    })
    setMovieList(res.data.items)
    setPagination(res.data.totalPages)
    scrollTo(0, 0);
  }
   useEffect(() => {
    fetchLoader()
      
  },[setMovieList,currentPage] )

  console.log(pageMovie)
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
              <Card SetPageMovie={SetPageMovie}  movieList={movieList}/>
              </div>
          </article>
          <div className="modal">
          </div>
          <div id="popup" className="popup">
            <div className="popup__body">
              <div className="popup__content">
                <a href="#" className="popup__close"></a>
                <h2 className="popup__title">Избранное</h2>
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
        <Pagination
          pagination={pagination}
           setCurrentPage={setCurrentPage}
            currentPage={currentPage} />
      </div>
  </main>
  )
}
