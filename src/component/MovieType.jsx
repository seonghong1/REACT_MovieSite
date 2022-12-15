import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



const MovieType = () => {
    return (
        <div>
            <>
                <Swiper
                 slidesPerView={3}
                 spaceBetween={13}
                    breakpoints={{
                        565:{
                            slidesPerView:5,
                            spaceBetween:30
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="type_swiper_wrap"
                >
                    <SwiperSlide className='slide_item'>
                        <img src={'img/디즈니.png'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide_item'>
                        <img src={'img/pixar.png'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide_item'>
                        <img src={'img/마블.png'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide_item'>
                        <img src={'img/디즈니.png'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide_item'>
                        <img src={'img/pixar.png'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide_item'>
                        <img src={'img/디즈니.png'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide_item'>
                        <img src={'img/마블.png'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide_item'>
                        <img src={'img/pixar.png'} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slide_item'>
                        <img src={'img/마블.png'} alt="" />
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    )
}

export default MovieType