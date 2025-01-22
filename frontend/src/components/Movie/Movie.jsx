import React, { useEffect, useState } from 'react'
import './Movie.scss'
import axios from 'axios'
import { Card } from "../Card/Card"
import { Pagination } from '../Pagination/Pagination'
import { useSearchParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms } from '../../redux/slice/filmSlice'

export function Movie({API_KEY,movieSearch}) {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  // const [pagination, setPagination] = useState(0)
  // const [currentPage, setCurrentPage] = useState(page || 1)
  const {items,status} = useSelector((state) => state.film)
  const dispatch = useDispatch()
  
  const fetchLoader = async () => {
    dispatch(fetchFilms({
      API_KEY,
    }))
    
  }
   useEffect(() => {
      fetchLoader(); 
  },[movieSearch] )
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
              <span className='loading'>{status}</span>
              :
              <Card
                  /> }
              
              </div>
          </article>
        </div>
      <Pagination
      API_KEY={API_KEY}
          // pagination={pagination}
          //  setCurrentPage={setCurrentPage}
            // currentPage={currentPage}
             />  
      </div>
  </main>
  )
}
