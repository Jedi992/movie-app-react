import React, { useEffect,useState } from 'react'

import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import "./PopularMoviePage.scss"
import CardCinema from '../../components/CardCinema/CardCinema'
import { fetchShows } from '../../redux/slice/filmSlice'
import { useDispatch } from 'react-redux'
function PopularMoviePage() {
 const [page, setPage] = useState(1)
 console.log(page)
 const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchShows({ params: 'movie', typeFilm: 'discover', pageNum: page }))
  }, [page])
  return (
     <div className="container">
            <div className="main__wrapper">
              <h2 className="moviepopular-title">Популярные фильмы</h2>
              <CardCinema mediaType="movie" />
            <div className="pagination__block">
 <Pagination.Root count={500} pageSize={1} defaultPage={1} page={page} onPageChange={(e) => setPage(e.page)} >
      <ButtonGroup variant="ghost" size="lg">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>
        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ base: "ghost", _selected: "outline" }}>
              {page.value}
            </IconButton>
          )}
        />
        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
            </div>
            </div>
          </div>
  )
}

export default PopularMoviePage