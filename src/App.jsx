import { Header } from './components/Header/Header'
import { Movie } from './components/Movie/Movie'
import { Route, Routes, useSearchParams } from 'react-router'
import {About} from './components/About/About'
import './App.scss'
import { Dashboard } from './components/Dashboard/Dashboard'
import { NotFound } from './components/NotFound/NotFound'
import {PageMovie} from './components/Page/PageMovie'

export function App() {
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/movie/details/:movieId" element={<PageMovie />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    
    
      
    </>
  )
}

