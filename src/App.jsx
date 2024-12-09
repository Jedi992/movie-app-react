import { Header } from './components/Header/Header'
import { Movie } from './components/Movie/Movie'
import { Route, Routes, useSearchParams } from 'react-router'
import {About} from './components/About/About'
import './App.scss'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Card } from './components/Card/Card'
import { NotFound } from './components/NotFound/NotFound'

export function App() {
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/movie/:paginationId/details/:id" element={<Card />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    
    
      
    </>
  )
}

