import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const MoviesSlide = ({ movie }) => {
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
      {movie.map((item) => {
        return (
          <SwiperSlide className='slide_item' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${item.backdrop_path})` }}>
            <h2>{item.original_title}</h2>
            <div className="show_info">
              <h3 className="original_title">{item.original_title}</h3>
              <span className="vote_average">🥇 {item.vote_average}</span>
              <span className="release_date">📆 {item.release_date}</span>
              <span className="overview">{item.overview}</span>
              <span className="vote_count">🎅 : {item.vote_count}</span>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MoviesSlide