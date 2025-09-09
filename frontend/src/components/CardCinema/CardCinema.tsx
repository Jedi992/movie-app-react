import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDayMovie } from "../../utils/date";
import "./CardCinema.scss";
import { Link } from "react-router";
import { setCollection, fetchCollection } from "../../redux/slice/tmdbIdSlice";
import { useAppDispatch } from "../../hook/useAppDispatch";

function CardCinema({ mediaType }: { mediaType: string }) {
  const dispatch = useAppDispatch();
  const film = useSelector((state: any) => state.film);
  const tv = mediaType === "tv" && film.statusTvShows === "success";
  const movie = mediaType === "movie" && film?.statusFilm === "success";
  const results =
    mediaType === "movie"
      ? film.film?.results
      : mediaType === "tv"
        ? film.tvshows?.results
        : [];

  return (
    <div>
      <div className="card-cinema__grid">
        {tv || movie
          ? results.map((elem: any) => (
              <Link to={`/details/${mediaType}/${elem.id}`}>
                <div className="card-cinema" key={elem.id}>
                  <div className="card-block__image">
                    <p
                      className={
                        "card-vote " +
                        (elem.vote_average > 7
                          ? "card-vote__text-HI"
                          : elem.vote_average > 3
                            ? "card-vote__text-medium"
                            : elem.vote_average > 0
                              ? "card-vote__text-low"
                              : "card-vote__text-null")
                      }
                    >
                      {elem.vote_average.toFixed(1)}
                    </p>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}
                      alt={elem.title}
                      className="card-cinema__poster"
                    />
                  </div>
                  <div className="card-cinema__info">
                    <h2 className="card-cinema__title">
                      {elem.title || elem.name}
                    </h2>

                    <p className="card-cinema__date">
                      {getDayMovie(elem.release_date || elem.first_air_date)}
                    </p>
                    <div className="card-cinema__rating"></div>
                  </div>
                </div>
              </Link>
            ))
          : film.currentPage > 500
            ? "страница не найдена"
            : "Загрузка..."}
      </div>
    </div>
  );
}

export default CardCinema;
