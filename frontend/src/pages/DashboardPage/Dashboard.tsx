import "./Dashboard.scss";
import SwiperMovie from "../../components/SwiperMovie/SwiperMovie";
import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export function Dashboard() {
  return (
    <main>
      <div className="container">
        <div className="main__wrapper">
          <article className="movie__list">
            <div className="movie__list-menu">
              <div className="container"></div>
            </div>
            <div className="movie__list-grid">
              <div className="movie__block-title">
                <h4 className="movie__list-title">Популярные фильмы</h4>
                <div className="movie__title-block">
                  <h4 className="movie__list-text">
                    {" "}
                    <Link to="/popular/movie"> Показать всё </Link>
                  </h4>
                  <HiChevronRight className="arrow" color="#5493ff" size={20} />
                </div>
              </div>
              <SwiperMovie
                discover="movie"
                pageNum={1}
                movie={useSelector((state) => state.film.film)}
              />
            </div>
            <div>
              <div className="movie__block-title">
                <h4 className="movie__list-title">Популярные сериалы</h4>
                <div className="movie__title-block">
                  <h4 className="movie__list-text">
                    <Link to="/popular/tv">Показать всё</Link>
                  </h4>
                  <HiChevronRight className="arrow" color="#5493ff" size={20} />
                </div>
              </div>
              <SwiperMovie
                discover="tv"
                pageNum={1}
                movie={useSelector((state) => state.film.tvshows)}
              />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
