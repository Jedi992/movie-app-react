import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router'
import qs from 'qs'
import { fetchShows,setCurrentPage,setSaveParams } from '../../redux/slice/filmSlice'
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import "./PopularTvPage.scss"
import CardCinema from '../../components/CardCinema/CardCinema'
import { useAppDispatch } from '../../hook/useAppDispatch'
import {useSelector} from "react-redux"
function PopularTvPage() {
 const currentPage = useSelector((state) => state.film.currentPage)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
   useEffect(() => {
       
       const params = qs.parse(window.location.search.substring(1))
       const pageNum = params.page ? Number(params.page) : 1

       const queryString = qs.stringify({
         page: pageNum
       })

       dispatch(setSaveParams(
         pageNum
       ))

      dispatch(fetchShows({ 
       params: 'tv',
       typeFilm: 'discover',
       pageNum: pageNum
      }));
      
      navigate(`?${queryString}`)
   },[])
   
 const onChangePage = (page: number) => {
   const queryString = qs.stringify({
         page: page
       })
   dispatch(setCurrentPage(page))
   dispatch(fetchShows({ 
       params: 'tv',
       typeFilm: 'discover',
       pageNum: page 
      }));
       navigate(`?${queryString}`)
  }
  return (
     <div className="container">
            <div className="main__wrapper">
              <h2 className="moviepopular-title">Популярные сериалы</h2>
              <CardCinema mediaType="tv" />
            <div className="pagination__block">
 <Pagination.Root count={500} pageSize={1} defaultPage={1} page={currentPage} onPageChange={(e) => onChangePage(e.page)} >
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

export default PopularTvPage