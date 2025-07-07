import { Link } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import {fetchShows} from "../../redux/slice/filmSlice"
import "./SwiperTvShows.scss"
import { addItem } from '../../redux/slice/favoriteSlice'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';

export default function SwiperTvShows() {
  const movieList = useSelector((state) => state.film)
  const searchItems = useSelector((state) => state.search.items)
  const dispatch = useDispatch()
console.log(movieList.tvshows.results)
  useEffect(() => {
    dispatch(fetchShows("tv"))
  },[] )
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
             {movieList.status === "Успешно" ? movieList.tvshows.results.map((slide, i) => (
               <SwiperSlide key={i}  className="swiper-slide">
                 <div className="slider-block">
                     <img className="slider-img" src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`} alt="" />
                     <div className='slide-title'>{slide.name}</div>
                     <div  className='slide-year'>{slide.release_date}</div>
                 </div>
               </SwiperSlide>
             )): "loading"}
           </Swiper>
      </>
      )
}

