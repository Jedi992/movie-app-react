import { Header } from './components/Header/Header'
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.scss'
import { NotFound } from './pages/NotFound/NotFound'
import {PageMovie} from './pages/PageMovie/PageMovie'
import { SearchPage } from './pages/SearchPage/SearchPage'
import { FavoritePage } from './pages/FavoritePage/FavoritePage'
import { Dashboard } from './pages/DashboardPage/Dashboard'
import PopularTvPage from "./pages/PopularTvPage/PopularTvPage"
import PopularMoviePage from "./pages/PopularMoviePage/PopularMoviePage"
export function App() {
    const [API_KEY , SetAPI_KEY] = useState('')
    const [movieSearchText, setMovieSearchText] = useState('')
    const [movieSearch, setMovieSearch] = useState([])
    
  return (
    <>
    <Header setMovieSearchText={setMovieSearchText} API_KEY={API_KEY} setMovieSearch={setMovieSearch} />
    <Routes>
      <Route path="/" element={<Dashboard />} />
     
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
        <Route path="/popular/tvshows" element={<PopularTvPage/>}/>
      <Route path="/popular/movie" element={<PopularMoviePage />}/>
      <Route path="/popular/tv" element={<PopularTvPage />}/>
      <Route path="*"
       element={<NotFound/>} />
    </Routes>
    </>
      
  )
}

