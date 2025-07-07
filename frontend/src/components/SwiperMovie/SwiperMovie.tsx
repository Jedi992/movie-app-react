import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { fetchShows } from "../../redux/slice/filmSlice"
import "./SwiperMovie.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function swiperMovie() {
  const movieList = useSelector((state) => state.film)
  const dispatch = useDispatch()
  // console.log(movieList)
  useEffect(() => {
    dispatch(fetchShows("movie"))
  },[])

  return (
  <>

   <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={5}
      slidesPerGroup={1} 
      navigation
        // pagination={{ clickable: true }}
      className="swiper"
    >
      {movieList.status === "Успешно" ? movieList.film.results.map((slide, i) => (
        <SwiperSlide key={i}  className="swiper-slide">
          <div className="slider-block">
              <img className="slider-img" src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`} alt="" />
              <div className='slide-title'>{slide.title}</div>
              <div  className='slide-year'>{slide.release_date}</div>
          </div>
        </SwiperSlide>
      )): "loading"}
    </Swiper>

      
  </>
  )
}

