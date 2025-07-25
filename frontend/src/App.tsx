import { Header } from './components/Header/Header'
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.scss'
import { NotFound } from './pages/NotFound/NotFound'

import { FavoritePage } from './pages/FavoritePage/FavoritePage'
import { Dashboard } from './pages/DashboardPage/Dashboard'
import PopularTvPage from "./pages/PopularTvPage/PopularTvPage"
import PopularMoviePage from "./pages/PopularMoviePage/PopularMoviePage"
export function App() {

    
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Dashboard />} />
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

