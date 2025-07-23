import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { fetchShows } from "../../redux/slice/filmSlice"
import "./SwiperMovie.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function swiperMovie({discover,movie }) {
  const movieList = useSelector((state) => state.film)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchShows({params: discover,typeFilm: "discover" } ))
  },[])
  const getDayMovie = (movie) => {
var days = [
  "янв.",
  "фев.",
  "март.",
  "апр.",
  "май.",
  "июн.",
  "июл.",
  "авг.",
  "сен.",
  "окт.",
  "нояб.",
  "дек."
];
var d = new Date(movie);
var n = d.getMonth() ;
 return d.getDay() + " " + days[n] + " " + d.getFullYear() + " г.";

  }
  
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
      {movieList.status === "success" ? movie.results.map((slide, i) => (
        <SwiperSlide key={i}  className="swiper-slide">
          <div className="slider-block">
              <img className="slider-img" src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`} alt="" />
              <div className='slide-title'>{slide.title || slide.name}</div>
              <div  className='slide-year'>{getDayMovie(slide.release_date || slide.first_air_date)}</div>
          </div>
        </SwiperSlide>
      )) : "Загрузка..."}
    </Swiper>
  </>
  )
}

