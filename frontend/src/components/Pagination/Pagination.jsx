import React, { useState } from 'react'
import "./Pagination.scss"
import { Link,useSearchParams } from "react-router"
import { useSelector } from 'react-redux';

export function Pagination({pagination, setCurrentPage,currentPage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
    let paginationArr = []
    for (let i = 1; i <= pagination; i++) {
        paginationArr.push(i)
        
    }
    
    const handleClickPage = (pageid) => {
      setCurrentPage(pageid)
      
    }
  return (
    <div className="movie__pagination">
          <ul className="movie__pagination-list">
            {paginationArr.map((elem,i) => ( <li key={i} onClick={() => {
            handleClickPage(elem) 
            setSearchParams({page: (1 && elem )})}
            }
             className={currentPage === (elem) ? "active" : ""}>
                {elem}
            </li>))}
          </ul>
    </div>
  )
}
