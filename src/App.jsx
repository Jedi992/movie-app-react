import { Header } from './components/Header/Header'
import { Movie } from './components/Movie/Movie'
import { Route, Routes } from 'react-router'
import {About} from './components/About/About'
import './App.scss'

export function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="/" element={<Movie />} />
    </Routes>
    
    
      
    </>
  )
}

