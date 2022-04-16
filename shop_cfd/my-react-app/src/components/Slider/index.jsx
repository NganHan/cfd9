import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Wraper = styled.div`
    .swiper-pagination-bullet{
        background-color: #d8d8d8;
        opacity: 1;
        border-radius: 100px;
        transition: all 0.3s ease-in;
        &.swiper-pagination-bullet-active{
            background-color: #ff6f61;
            width: 50px;
        }
    }
    
`

export default function Slider({spaceBetween = 0, slidesPerView = 1, children}) {
  return (
    <Wraper>
        <Swiper
        modules={[Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        >
            {
                React.Children.map(children, (child) => <SwiperSlide>{child}</SwiperSlide>)
            }
        </Swiper>
    </Wraper>
  );
};

