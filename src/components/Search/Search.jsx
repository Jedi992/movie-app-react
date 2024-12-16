import React, { useEffect, useState } from 'react'
import { Link, useSearchParams, useNavigate} from 'react-router'
import axios from 'axios'
import "./Search.scss"
import { SearchPage } from '../SearchPage/SearchPage'

export function Search({API_KEY, setMovieSearch, setMovieSearchText}) {
const API_URL_MOVIE_SEARCH = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=`
const [searchKeyWords , setSearchKeyWords] = useState('')
const [searchParams, setSearchParams] = useSearchParams('')
let navigate = useNavigate();
const searchQuery = searchParams.get('search')
    const searchLoader = async (keyword) => {
      if (!keyword) return;
        const res = await axios.get(API_URL_MOVIE_SEARCH + keyword, {
          headers: {
              'X-API-KEY': `${API_KEY}`,
              'Content-Type': 'application/json',
          },
        })
        setMovieSearch(res.data.films)
        
    }
      useEffect(() => {
        searchLoader(searchQuery)
      setMovieSearchText(searchQuery)

      }, [searchQuery,setMovieSearchText])
      const handleSubmit = (e) => {
        
        e.preventDefault();
        const form = e.target;
        const query = form.search.value
        setSearchParams({search: query})
        setSearchKeyWords(query)
        navigate(`/movie/details/search?search=${query}`)
      }
  return (
    <div className='form__block'>
   <form autoComplete='off' onSubmit={(e) => handleSubmit(e)} className="header__search-form">
     <input className="header__search-input" defaultValue={searchQuery || ''} name='search'  type="search" placeholder="Поиск..." />
    </form> 
    
    </div>
  )
}