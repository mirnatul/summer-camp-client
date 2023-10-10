import React from 'react';

// image import
import banner1 from './../../../../assets/images/banner/banner1.jpg'
import banner2 from './../../../../assets/images/banner/banner2.jpg'
import banner3 from './../../../../assets/images/banner/banner3.jpg'
import banner4 from './../../../../assets/images/banner/banner4.jpg'
import banner5 from './../../../../assets/images/banner/banner5.jpg'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Swiper styles
import 'swiper/css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import BannerText from './BannerText';



const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='relative'>
          <img className='lg:h-[600px] object-cover w-screen z-10' src={banner1} />
          <BannerText></BannerText>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='lg:h-[600px] object-cover w-screen z-10' src={banner2} />
          <BannerText></BannerText>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='lg:h-[600px] object-cover w-screen z-10' src={banner3} />
          <BannerText></BannerText>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='lg:h-[600px] object-cover w-screen z-10' src={banner4} />
          <BannerText></BannerText>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='lg:h-[600px] object-cover w-screen z-10' src={banner5} />
          <BannerText></BannerText>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
