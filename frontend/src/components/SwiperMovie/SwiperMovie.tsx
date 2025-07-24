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

export default function swiperMovie({discover,movie, pageNum }) {
  const movieList = useSelector((state) => state.film)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchShows({params: discover,typeFilm: "discover",pageNum } ))
  },[])
  const getDayMovie = (movie) => {
const days = [
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
const d = new Date(movie);
const n = d.getMonth() ;
 return d.getDate() + " " + days[n] + " " + d.getFullYear() + " г.";

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
            <div>
              <p className={"card-vote " + (slide.vote_average > 7
    ? "card-vote__text-HI"
    : slide.vote_average > 3
    ? "card-vote__text-medium"
    : slide.vote_average > 0
    ? "card-vote__text-low"
    : "card-vote__text-null")}>{slide.vote_average.toFixed(1)}</p>
              <img className="slider-img" src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`} alt="" />
            </div>
              <div className='slide-title'>{slide.title || slide.name}</div>
              <div  className='slide-year'>{getDayMovie(slide.release_date || slide.first_air_date)}</div>
          </div>
        </SwiperSlide>
      )) : "Загрузка..."}
    </Swiper>
  </>
  )
}

