import React from 'react';
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='relative'>
          <img className='lg:h-[600px] object-cover w-screen' src="https://images.unsplash.com/photo-1558970439-add78fc68990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80" />




          <div className='absolute top-5 lg:top-28 left-0  w-52 lg:space-y-10 lg:left-5 lg:w-96  text-white text-center'>


            <h1 className='text-white text-xl lg:text-4xl font-extrabold '>Discover Your Dramatic Potential</h1>
            <p className='hidden lg:block'>Embrace the world of drama and unlock your dramatic potential at DramatixLab. Our expert instructors will guide you through a journey of self-expression, helping you develop essential acting techniques, build confidence, and find your unique voice on stage</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='lg:h-[600px] object-cover w-screen' src="https://images.unsplash.com/photo-1579539760267-b2e78d9d735e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />

          <div className='absolute top-5 lg:top-28 left-0  w-52 lg:space-y-10 lg:left-5 lg:w-96  text-white text-center'>


            <h1 className='text-white text-xl lg:text-4xl font-extrabold '>Immerse Yourself in Theatrical Magic</h1>
            <p className='hidden lg:block'>Step into the enchanting realm of theater and experience the transformative power of storytelling. At DramatixLab, immerse yourself in a world of captivating narratives, dynamic characters, and the magic of live performances. Join us to explore the art of theater and create unforgettable moments on stage.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:h-[600px] object-cover w-screen' src="https://images.unsplash.com/photo-1559782004-0485f6b3529f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />


          <div className='absolute top-5 lg:top-28 left-0  w-52 lg:space-y-10 lg:left-5 lg:w-96  text-white text-center'>


            <h1 className='text-white text-xl lg:text-4xl font-extrabold'>Unleash Your Creativity with DramatixLab</h1>
            <p className='hidden lg:block'>Unleash your imagination and creativity through the performing arts. At DramatixLab, we provide a nurturing environment where aspiring artists can discover their unique talents. From improvisation to scriptwriting, our programs foster creativity, teamwork, and self-expression, empowering you to create extraordinary performances.</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
