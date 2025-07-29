import { Header } from './components/Header/Header'
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.scss'
import { NotFound } from './pages/NotFound/NotFound'
import { Dashboard } from './pages/DashboardPage/Dashboard'
import PopularTvPage from "./pages/PopularTvPage/PopularTvPage"
import PageMovie from "./pages/PageMovie/PageMovie"
import PopularMoviePage from "./pages/PopularMoviePage/PopularMoviePage"
export function App() {

    
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/popular/tvshows" element={<PopularTvPage/>}/>
      <Route path="/popular/movie" element={<PopularMoviePage />}/>
      <Route path="/popular/tv" element={<PopularTvPage />}/>
      <Route path="/details/:mediaType/:id" element={<PageMovie />}/>
      <Route path="*"
       element={<NotFound/>} />
    </Routes>
    </>
      
  )
}

