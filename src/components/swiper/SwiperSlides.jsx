import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'

import './swiper.scss'
import { Autoplay, Pagination } from 'swiper';
import OneSlide from '../oneSlide/OneSlide';
import SecondSlide from '../secondSlide/SecondSlide';
import data from '../../assets/datas.json'



const SwiperSlides = ({ selectedMovie, Youtube, renderTrailer }) => {

    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >
            {data.map((obj) =>
            (
                <SwiperSlide>
                    <SecondSlide data={obj} />
                </SwiperSlide>
            )
            )}
            <SwiperSlide>
                <OneSlide renderTrailer={renderTrailer} Youtube={Youtube} selectedMovie={selectedMovie} />
            </SwiperSlide>



        </Swiper>

    )
}

export default SwiperSlides