import { Header } from './components/Header/Header'
import { Movie } from './components/Movie/Movie'
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import {About} from './components/About/About'
import './App.scss'
import { Dashboard } from './components/Dashboard/Dashboard'
import { NotFound } from './components/NotFound/NotFound'
import {PageMovie} from './components/Page/PageMovie'
import { SearchPage } from './components/SearchPage/SearchPage'
import { FavoritePage } from './components/FavoritePage/FavoritePage'


export function App() {
    const [API_KEY , SetAPI_KEY] = useState('229eed78-a9a7-44b0-ae3b-73d7798e927c')
    const [movieSearchText, setMovieSearchText] = useState('')
    const [movieSearch, setMovieSearch] = useState([])
  
    
    
  return (
    <>
    <Header setMovieSearchText={setMovieSearchText} API_KEY={API_KEY} setMovieSearch={setMovieSearch} />
    <Routes>
    
    <Route path="/about" element={<About />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/movie" element={<Movie
           movieSearch={movieSearch}
            API_KEY={API_KEY} />} />
      <Route path="/movie/details/:movieId" 
            element={<PageMovie
          API_KEY={API_KEY} 
        />} />
      <Route path="/movie/details/search" 
      element={<SearchPage
      movieSearchText={movieSearchText}
       movieSearch={movieSearch}
       />}/>
      <Route path="/movie/favorite"
       element={<FavoritePage/>}/>
      <Route path='*'
       element={<NotFound/>} />
    </Routes>
    </>
      
  )
}

