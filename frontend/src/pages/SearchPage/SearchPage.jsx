import React from 'react'
import "./SearchPage.scss"

export function SearchPage({movieSearchText}) {
  return (
    <div className='container'>
    <div className='main__wrapper'>
      <span className='search__result'>Результат поиска: '{movieSearchText}'</span>
    <div className='search__list-grid'>
     <Card/>
       </div>  
      </div>
    </div>
    )
}
