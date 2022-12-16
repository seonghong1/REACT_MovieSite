import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';


const MoviesSlide = ({ movie }) => {
  const navigate = useNavigate()

  
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={13}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        565: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }}
      className="movie_slide"
    >
      {movie && movie.map((item) => {
        return (
          <SwiperSlide className='slide_item' 
          onClick={()=> navigate(`/movies/${item.id}`)}
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${item.backdrop_path})` }}>
            <h2>{item.original_title}</h2>
            <div className="show_info">
              <span className="adult">
                {item.adult? '🔞':'👪'}
              </span>
             
              <h3 className="original_title">{item.original_title}</h3>
              <span className="vote_average">🥇 {item.vote_average}</span>
              <span className="release_date">📆 {item.release_date}</span>
              <span className="overview">{item.overview}</span>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MoviesSlide