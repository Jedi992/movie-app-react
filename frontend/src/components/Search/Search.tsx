import React, { useCallback, useEffect, useRef, useState } from 'react'
import "./Search.scss"
import { useAppDispatch } from '../../hook/useAppDispatch';
import { useSelector, UseSelector } from 'react-redux';
import { Link } from 'react-router'
import { fetchSearch } from "../../redux/slice/searchSlice"
import { FaCircle } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import debounce from "lodash.debounce"
import {getDayMovie} from "../../utils/date"
import {fetchCollection} from "../../redux/slice/tmdbIdSlice"
export function Search() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchKeywords, setSearchKeywords] = useState<string>("")
  const [keywords, setKeywords] = useState<string>("")
  const containerRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  
  const search = useSelector((state) => state.search)
  
  

  useEffect(() => {
    function handleClickOutSide(e: MouseEvent) {
      if(!containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutSide)
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  },[])

  useEffect(() => {
  dispatch(fetchSearch({ params: keywords }))
    if (keywords.length > 0) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [keywords])
const handleOnFocus = () => {
        setIsOpen(true);
    };
  const searchDebounce = useCallback(
  debounce((str: string) => {
   setKeywords(str) 
  }, 500),[]
  )
  const onChangeInput = (e) => {
    setSearchKeywords(e.target.value);
    searchDebounce(e.target.value)
  }

  
  return (
    <div className='form__block' ref={containerRef}>
      <form onSubmit={(e) => e.preventDefault()
      } autoComplete='off' className="header__search-form">
        <HiMagnifyingGlass className="search-icon" size={20} />
        <input
          className="header__search-input"
          onChange={(e) => onChangeInput(e)}
          onFocus={handleOnFocus}
          value={searchKeywords}
          placeholder="Поиск..."
        />
      </form>
      {isOpen && search.status === "success" && <ul className="search-dropdown">
        {search.resultsSearch.results.map((elem, i) => (<Link to={`/details/${elem.media_type}/${elem.id}`}><li key={i} className="search-dropdown__item">
        <div className="search__titleImage-block">
            <div className="search__image-block">
              <img className="search-img" src={`https://image.tmdb.org/t/p/w500${elem.poster_path || elem.profile_path}`} alt="" />
            </div>
            <div className="search__title-block">
              <h3 className="search__title">{elem.name || elem.title}</h3>
              <div className="search__mediaData-block">
                <p className="search__text">{elem.media_type === "movie"
                  ? "Фильм"
                  : elem.media_type === "tv"
                    ? "Сериал"
                    : elem.media_type === "person"
                      ? "Актёр"
                      : ""} </p>
                {
                  elem.media_type === "person" ? null : <>
                  <FaCircle size={5} />
                <p>{ elem.release_date || elem.first_air_date ? getDayMovie(elem.release_date || elem.first_air_date) : "Неизвестно"}</p>
                  </>
                }
                
              </div>
            </div>
          </div>
         { elem.media_type === "person" ? null :
          <div className="search__vote-block">
            <p className={"search__vote " + (elem.vote_average > 6.9
              ? "card-vote__text-HI"
              : elem.vote_average > 2.9
                ? "card-vote__text-medium"
                : elem.vote_average > 0
                  ? "card-vote__text-low"
                  : "card-vote__text-null")}>{elem.vote_average.toFixed(1)}</p>
          </div>}
       </li></Link> ))}
      </ul>}
    </div>
  )
}
