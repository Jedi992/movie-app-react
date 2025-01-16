import React from 'react'
import "./SearchPage.scss"
import {Card } from '../Card/Card'

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
