import React, { useEffect } from "react";
import "./PageMovie.scss";
import { useSelector } from "react-redux";
import { fetchCollection } from "../../redux/slice/tmdbIdSlice";
import { useParams } from "react-router";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { UseSelector } from "react-redux";
function PageMovie() {
  const card = useSelector((state) => state.tmdbId.movieTvPerson);
  const loading = useSelector((state) => state.tmdbId.status);
  const { id, mediaType } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCollection({ type: mediaType, id: id }));
  }, [mediaType, id]);
  console.log(loading);
  return (
    <div className="container main__wrapper">
      {loading === "success" ? (
        <div className="moviepage__block">
          <div className="moviepage__image-block">
            <img
              className="moviepage__image"
              src={`https://image.tmdb.org/t/p/w500${card.poster_path || card.profile_path}`}
              alt=""
            />
            {/* <button className="moviepage__button">Добавить в список</button> */}
          </div>
          <div className="moviepage__title-block">
            <h3 className="moviepage__title">{card.title || card.name}</h3>
            {card.profile_path && <p className="moviepage__profile">Актёр</p>}
            {mediaType === "movie" ? (
              <div className="moviepage-stats">
                <div className="moviepage__stats-block stats">
                  <p className="moviepage__stats-title stats">Название</p>
                  <p className="moviepage__stats-release stats">Дата выхода</p>
                  <p className="moviepage__stats-runtime stats">Длительность</p>
                  <p className="moviepage__stats-vote stats">Оценка</p>
                  <p className="moviepage__stats-budget stats">Бюджет</p>
                </div>
                <div className="moviepage__stats-block">
                  <p className="moviepage__stats-title stats statsCard">
                    {card.title}
                  </p>
                  <p className="moviepage__stats-release stats statsCard">
                    {card.release_date}
                  </p>
                  <p className="moviepage__stats-runtime stats statsCard">
                    {card.runtime} мин
                  </p>
                  <p className="moviepage__stats-vote stats statsCard">
                    {card.vote_average}
                  </p>
                  <p className="moviepage__stats-budget stats statsCard">
                    {card.budget}
                  </p>
                </div>
              </div>
            ) : mediaType === "tv" ? (
              <div className="moviepage-stats">
                <div className="moviepage__stats-block stats">
                  <p className="moviepage__stats-title stats">Название</p>
                  <p className="moviepage__stats-release stats">Дата выхода</p>
                  <p className="moviepage__stats-lastRelease stats">
                    Дата последнего эпизода
                  </p>
                  <p className="moviepage__stats-vote stats">Оценка</p>
                  <p className="moviepage__stats-seasons stats">
                    Количество сезонов
                  </p>
                  <p className="moviepage__stats-series stats">
                    Количество серий
                  </p>
                </div>
                <div className="moviepage__stats-block">
                  <p className="moviepage__stats-title stats statsCard">
                    {card.name}
                  </p>
                  <p className="moviepage__stats-release stats statsCard">
                    {card.first_air_date}
                  </p>
                  <p className="moviepage__stats-lastRelease stats statsCard">
                    {card.last_air_date}
                  </p>
                  <p className="moviepage__stats-vote stats statsCard">
                    {card.vote_average}
                  </p>
                  <p className="moviepage__stats-seasons stats statsCard">
                    {card.number_of_seasons}
                  </p>
                  <p className="moviepage__stats-series stats statsCard">
                    {card.number_of_episodes}
                  </p>
                  <p className="moviepage__stats-runtime stats statsCard">
                    {card.runtime}
                  </p>
                </div>
              </div>
            ) : (
              <div className="moviepage-stats">
                <div className="moviepage__stats-block stats">
                  <p className="moviepage__stats-title stats">Дата рождения</p>
                  <p className="moviepage__stats-release stats">
                    Место рождения
                  </p>
                  <p className="moviepage__stats-lastRelease stats">Пол</p>
                </div>
                <div className="moviepage__stats-block">
                  <p className="moviepage__stats-title stats statsCard">
                    {card.birthday || "Неизвестно"}
                  </p>
                  <p className="moviepage__stats-release stats statsCard">
                    {card.place_of_birth || "Неизвестно"}
                  </p>
                  <p className="moviepage__stats-runtime stats statsCard">
                    {card.gender === 1
                      ? "Женский"
                      : card.gender === 2
                        ? "Мужской"
                        : "Неизвестно"}
                  </p>
                </div>
              </div>
            )}
            <div className="moviepage__overview">
              <p>{card.overview || card.biography}</p>
            </div>
          </div>
        </div>
      ) : loading === "error" ? (
        "ошибка"
      ) : (
        "загрузка"
      )}
    </div>
  );
}

export default PageMovie;
