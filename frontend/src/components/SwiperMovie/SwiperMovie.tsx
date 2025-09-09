import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchShows } from "../../redux/slice/filmSlice";
import axios from "axios";
import { fetchCollection } from "../../redux/slice/tmdbIdSlice";
import "./SwiperMovie.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getDayMovie } from "../../utils/date";

export default function swiperMovie({ discover, movie, pageNum }) {
  const [recommended, setRecommended] = useState<any>([]);
  const movieList = useSelector((state) => state.film);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShows({ params: discover, typeFilm: "discover", pageNum }));
  }, []);
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
        {movieList.status === "success"
          ? movie.results.map((slide, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <Link to={`/details/${discover}/${slide.id}`}>
                  <div className="slider-block">
                    <div>
                      <p
                        className={
                          "card-vote " +
                          (slide.vote_average > 6.9
                            ? "card-vote__text-HI"
                            : slide.vote_average > 2.9
                              ? "card-vote__text-medium"
                              : slide.vote_average > 0
                                ? "card-vote__text-low"
                                : "card-vote__text-null")
                        }
                      >
                        {Number(slide.vote_average.toFixed(1))}
                      </p>
                      <img
                        className="slider-img"
                        src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`}
                        alt=""
                      />
                    </div>
                    <div className="slide-title">
                      {slide.title || slide.name}
                    </div>
                    <div className="slide-year">
                      {slide.release_date || slide.first_air_date
                        ? getDayMovie(
                            slide.release_date || slide.first_air_date,
                          )
                        : "Неизвестно"}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          : "Загрузка..."}
      </Swiper>
    </>
  );
}
