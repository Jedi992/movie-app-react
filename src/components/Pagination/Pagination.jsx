import React, { useState } from 'react'
import "./Pagination.scss"

export function Pagination({ pagination, setCurrentPage,currentPage }) {
    let paginationArr = []
    for (let i = 1; i <= pagination; i++) {
        paginationArr.push(i)
    }
    const handleClickPage = (page) => {
      
      setCurrentPage(page)
      
    }
  return (
    <div className="movie__pagination">
          <ul className="movie__pagination-list">
            {paginationArr.map((elem,i) => (<li key={i} onClick={() => handleClickPage(elem)}
             className={currentPage === elem ? "active" : ""}>
                {elem}
            </li>))}
          </ul>
    </div>
  )
}
