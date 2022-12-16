import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const Banner = ({ movie }) => {
    //poster_path의 url이 뒷부분만 노출됨, 앞부분은 tmbd에서 찾아야댐
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="bn_swiper_wrap"
            >
                <SwiperSlide>
                    <div className='banner' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${movie[0].backdrop_path})` }}>
                        <div className="banner_text">
                            <h1>{movie[0].original_title}</h1>
                            <p>{movie[0].overview}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${movie[1].backdrop_path})` }}>
                        <div className="banner_text">
                            <h1>{movie[1].original_title}</h1>
                            <p>{movie[1].overview}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${movie[2].backdrop_path})` }}>
                        <div className="banner_text">
                            <h1>{movie[2].original_title}</h1>
                            <p>{movie[2].overview}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${movie[3].backdrop_path})` }}>
                        <div className="banner_text">
                            <h1>{movie[3].original_title}</h1>
                            <p>{movie[3].overview}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${movie[4].backdrop_path})` }}>
                        <div className="banner_text">
                            <h1>{movie[4].original_title}</h1>
                            <p>{movie[4].overview}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${movie[5].backdrop_path})` }}>
                        <div className="banner_text">
                            <h1>{movie[5].original_title}</h1>
                            <p>{movie[5].overview}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>

    )
}

export default Banner