import React, { useState } from 'react'
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs  } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SliderWithThumb({ children }) {
    const [activeThumb, setActiveThumb] = useState()
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                thumbs={{ swiper: activeThumb }}
                className='product-images-slider'
            >
                {
                    React?.Children?.map(children, (child) => <SwiperSlide>{child}</SwiperSlide>)
                }
            </Swiper>
            <Swiper
                onSwiper={setActiveThumb}
                loop={false}
                spaceBetween={10}
                slidesPerView={4}
                modules={[Navigation, Thumbs]}
                className='product-images-slider-thumbs'
            >
                {
                    React?.Children?.map(children, (child) => <SwiperSlide>{child}</SwiperSlide>)
                }
            </Swiper>
            
        </>
    );
};

