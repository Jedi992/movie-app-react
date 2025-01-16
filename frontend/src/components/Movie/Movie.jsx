import React, { useEffect, useState } from 'react'
import './Movie.scss'
import axios from 'axios'
import { Card } from "../Card/Card"
import { Pagination } from '../Pagination/Pagination'
import { useSearchParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../../redux/slice/filmSlice'

export function Movie({API_KEY,movieSearch}) {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
const API_URL_MOVIE_PAGE = `https://kinopoiskapiunofficial.tech/api/v2.2/films?page=`
  const [pagination, setPagination] = useState(0)
  const [currentPage, setCurrentPage] = useState(page || 1)
  const items = useSelector((state) => state.film.items)
  const dispatch = useDispatch()
  
  const fetchLoader = async () => {
    try {
      const res = await axios.get(API_URL_MOVIE_PAGE + currentPage   , {
        headers: {
            'X-API-KEY': `${API_KEY}`,
            'Content-Type': 'application/json',
        },
      })
      console.log(res.data)
      dispatch(setItems(res.data))
      
      scrollTo(0, 0);
    } catch {
      console.log('Ошибка')
    }
    
  }
   useEffect(() => {
      
      fetchLoader(); 
  },[movieSearch,currentPage] )
  return (
    <main>
      <div className="container">
        <div className="main__wrapper">
          <article className="movie__list">
            <div className="movie__list-menu">
              <h2 className="movie__list-title">Каталог</h2>
              <div className="container">
              </div>
            </div>
            <div className="movie__list-grid">
              {Array.isArray(items) ? 
              <span className='loading'>Загрузка</span>
              :
              <Card
              movieSearch={movieSearch}
                  /> }
              
              </div>
          </article>
        </div>
      <Pagination
          pagination={pagination}
           setCurrentPage={setCurrentPage}
            currentPage={currentPage} />  
      </div>
  </main>
  )
}
