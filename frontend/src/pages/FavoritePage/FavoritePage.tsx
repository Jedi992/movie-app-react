// import React, {useContext}  from 'react'
// import { favoriteContext } from '../../App'
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { removeItems } from "../../redux/slice/favoriteSlice";
export function FavoritePage() {
  const favoriteList = useSelector((list) => list.favorite);
  const dispatch = useDispatch();
  console.log(favoriteList);

  return (
    <div className="container">
      <div className="main__wrapper">
        <span>Избранное: </span>
        <div className="movie__list-grid">
          {favoriteList.items.map((movie) => {
            return (
              <section
                key={movie.kinopoiskId || movie.filmId}
                className="movie__list-card"
              >
                <Link
                  key={movie.kinopoiskId}
                  to={`/movie/details/${movie.kinopoiskId || movie.filmId}`}
                >
                  <div className="movie__card-image">
                    <img width="350" src={movie.posterUrlPreview} alt="#" />
                  </div>
                </Link>
                <div className="movie__card-content">
                  <h3 className="movie__card-title">{movie.nameRu}</h3>
                </div>
                <div className="movie__card-footer">
                  <span className="movie__card-rating">
                    Рейтинг: {movie.ratingKinopoisk || movie.rating}
                  </span>
                  <button onClick={() => dispatch(removeItems(movie))}>
                    Удалить
                  </button>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
