import React, { useEffect } from "react";
import "./PageMovie.scss";
import { useSelector } from "react-redux";
import { fetchCollection } from "../../redux/slice/tmdbIdSlice";
import { useParams } from "react-router";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { UseSelector } from "react-redux";
import { getDayMovie } from "../../utils/date";
function PageMovie() {
  const card = useSelector((state) => state.tmdbId.movieTvPerson);
  const loading = useSelector((state) => state.tmdbId.status);
  const { id, mediaType } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCollection({ type: mediaType, id: id }));
  }, [mediaType, id]);
  if (card.genres) {
  }
  const getGenre = (genre) => {
    if (genre) {
      let finalArr = genre.map((elem) => elem.name);
      return finalArr.join(", ");
    }
  };
  const getVoteStyled = (vote) => {
    if (vote !== undefined && vote !== null) {
      vote = Number(vote.toFixed(1));
    }
    return (
      <span
        className={
          "card-votes " +
          (vote > 6.9
            ? "card-vote__text-HI"
            : vote > 2.9
              ? "card-vote__text-medium"
              : vote > 0
                ? "card-vote__text-low"
                : "card-vote__text-null")
        }
      >
        {vote}
      </span>
    );
  };

  let rows;
  if (mediaType === "movie") {
    rows = [
      { label: "Название", value: card.title },
      { label: "Оценка", value: getVoteStyled(card.vote_average) },
      { label: "Жанр", value: getGenre(card.genres) },
      { label: "Дата выхода", value: getDayMovie(card.release_date) },
      { label: "Длительность", value: `${card.runtime} мин` },
      {
        label: "Бюджет",
        value: card.budget === 0 ? "Неизвестно" : `${card.budget}$`,
      },
    ];
  } else if (mediaType === "tv") {
    rows = [
      { label: "Название", value: card.name },
      { label: "Оценка", value: getVoteStyled(card.vote_average) },
      { label: "Дата выхода", value: getDayMovie(card.first_air_date) },
      { label: "Последний эпизод", value: getDayMovie(card.last_air_date) },
      { label: "Сезонов", value: card.number_of_seasons },
      { label: "Эпизодов", value: card.number_of_episodes },
    ];
  } else {
    rows = [
      { label: "Имя", value: card.name },
      { label: "Дата рождения", value: card.birthday || "Неизвестно" },
      { label: "Место рождения", value: card.place_of_birth || "Неизвестно" },
      {
        label: "Пол",
        value:
          card.gender === 1
            ? "Женский"
            : card.gender === 2
              ? "Мужской"
              : "Неизвестно",
      },
    ];
  }

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
            <div className="moviepage__content">
              <table className="stats-table">
                <tbody className="bodytable">
                  {rows.map(({ label, value }, idx) => (
                    <tr key={idx} className="stats-table__row">
                      <td className="stats-table__label">{label}</td>
                      <td className="stats-table__value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="moviepage__overview">
                <p>{card.overview || card.biography}</p>
              </div>
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
