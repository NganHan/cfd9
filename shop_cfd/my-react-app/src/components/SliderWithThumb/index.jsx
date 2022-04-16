import React, { useState } from 'react'
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Controller  } from 'swiper';
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

export default function SliderWithThumb({ spaceBetween = 0, slidesPerView = 1, children }) {
    const [swiper, updateSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // Bind swiper and swiper thumbs
    // useEffect(() => {
    //     if (swiper && thumbsSwiper) {
    //     swiper.controller.control = thumbsSwiper;
    //     thumbsSwiper.controller.control = swiper;
    //     }
    // }, [swiper, thumbsSwiper]);
    return (
        <Wraper>
            <Swiper
                modules={[Controller]}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                // onSwiper= {updateSwiper} 
            >
                {
                    React?.Children?.map(children, (child) => <SwiperSlide>{child}</SwiperSlide>)
                }
            </Swiper>
            {/* <Swiper
                modules={[Controller]}
                watchSlidesProgress
                spaceBetween={10}
                onSwiper={setThumbsSwiper}
                style= {
                    width= "100px"
                  }
                >
                {
                    React.Children.map(children, (child) => <SwiperSlide>{child}</SwiperSlide>)
                }
            </Swiper> */}
        </Wraper>
    );
};

