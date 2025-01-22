import React, { useState } from 'react'
import "./Pagination.scss"
import { Link,useSearchParams } from "react-router"
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilms, setCurrentPage } from '../../redux/slice/filmSlice'

export function Pagination({API_KEY}) {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams();
  const {pagination,currentPage} = useSelector(val => val.film)
    let paginationArr = []
    for (let i = 1; i <= pagination; i++) {
        paginationArr.push(i)
        
    }
    
    const handleClickPage = (pageid) => {
      dispatch(setCurrentPage(pageid))
      dispatch(fetchFilms({pageid}))
      setSearchParams({page: pageid})
    }
  return (
    <div className="movie__pagination">
          <ul className="movie__pagination-list">
            {paginationArr.map((elem,i) => ( <li key={i} onClick={() => {
            handleClickPage(elem) 
          }
            }
             className={currentPage === (elem) ? "active" : ""}>
                {elem}
            </li>))}
          </ul>
    </div>
  )
}
