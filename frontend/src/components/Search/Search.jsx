import React, { useEffect, useState } from 'react'
import { Link, useSearchParams, useNavigate} from 'react-router'
import axios from 'axios'
import "./Search.scss"
import { SearchPage } from '../../pages/SearchPage/SearchPage'
import { useDispatch, useSelector } from 'react-redux'
import { searchKeyWord,searchItem } from '../../redux/slice/searchSlice'

export function Search({API_KEY, setMovieSearch, setMovieSearchText}) {
const dispatch = useDispatch()
const searchItemKeyword = useSelector(state => state.search.searchKeyword)
// const [searchKeyWords , setSearchKeyWords] = useState('')
const [searchParams, setSearchParams] = useSearchParams('')

let navigate = useNavigate();
const searchQuery = searchParams.get('search')
    const searchLoader = async (keyword) => {
      if (!keyword) return;
        const res = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=` + keyword, {
          headers: {
              'X-API-KEY': `44649c94-1fa7-47c9-9861-8b2e49c71f7a`,
              'Content-Type': 'application/json',
          },
        })
        dispatch(searchItem(res.data.films))
        
    }
      useEffect(() => {
        searchLoader(searchQuery)
      setMovieSearchText(searchQuery)

      }, [searchQuery,setMovieSearchText])
      const handleSubmit = (e) => {
        
        // e.preventDefault();
        const form = e.target;
        const query = form.search.value
        setSearchParams({search: query})
        dispatch(searchKeyWord(query))
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
