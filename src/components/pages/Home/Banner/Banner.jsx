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
import { Link } from 'react-router-dom';



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
          <div className='absolute top-0 left-0  w-full h-full lg:space-y-10 bg-[#fff1] bg-gradient-to-r from-black via-transparent to-black text-white text-center flex flex-col justify-center'>
            <div className='max-w-[1000px] mx-auto text-slate-300'>
              <h1 className='text-2xl lg:text-5xl mb-4 font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Welcome to summerSports programme</h1>
              <p className='hidden lg:block my-10 text-lg'>Summer is here! For most of us, we look back on the seemingly endless, carefree summer days of our childhood with fondness and joy. However, now that we are parents, some of us may have mixed feelings about this season for our own kids. How will we manage childcare while working? How can we avoid the “I’m bored!” comments? Are there any educational summer activities we can get them involved in? Why is our grocery bill and electricity suddenly so much higher?</p>
              <div className='flex gap-2 lg:gap-4 justify-center'>
                <Link className='bg-green-500 hover:bg-green-400 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/instructor'>Know our Instructors</Link>
                <Link className='bg-green-500 hover:bg-green-400 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/classes'>Visit our Classes</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='lg:h-[600px] object-cover w-screen z-10' src={banner2} />
          <div className='absolute top-0 left-0  w-full h-full lg:space-y-10 bg-[#fff1] bg-gradient-to-r from-black via-transparent to-black text-white text-center flex flex-col justify-center'>
            <div className='max-w-[1000px] mx-auto text-slate-300'>
              <h1 className='text-2xl lg:text-5xl mb-4 font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Welcome to summerSports programme</h1>
              <p className='hidden lg:block my-10 text-lg'>Summer is here! For most of us, we look back on the seemingly endless, carefree summer days of our childhood with fondness and joy. However, now that we are parents, some of us may have mixed feelings about this season for our own kids. How will we manage childcare while working? How can we avoid the “I’m bored!” comments? Are there any educational summer activities we can get them involved in? Why is our grocery bill and electricity suddenly so much higher?</p>
              <div className='flex gap-2 lg:gap-4 justify-center'>
                <Link className='bg-green-500 hover:bg-green-400 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/instructor'>Know our Instructors</Link>
                <Link className='bg-green-500 hover:bg-green-400 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/classes'>Visit our Classes</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='lg:h-[600px] object-cover w-screen z-10' src={banner3} />
          <div className='absolute top-0 left-0  w-full h-full lg:space-y-10 bg-[#fff1] bg-gradient-to-r from-black via-transparent to-black text-white text-center flex flex-col justify-center'>
            <div className='max-w-[1000px] mx-auto text-slate-300'>
              <h1 className='text-2xl lg:text-5xl mb-4 font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Welcome to summerSports programme</h1>
              <p className='hidden lg:block my-10 text-lg'>Summer is here! For most of us, we look back on the seemingly endless, carefree summer days of our childhood with fondness and joy. However, now that we are parents, some of us may have mixed feelings about this season for our own kids. How will we manage childcare while working? How can we avoid the “I’m bored!” comments? Are there any educational summer activities we can get them involved in? Why is our grocery bill and electricity suddenly so much higher?</p>
              <div className='flex gap-2 lg:gap-4 justify-center'>
                <Link className='bg-green-500 hover:bg-green-400 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/instructor'>Know our Instructors</Link>
                <Link className='bg-green-500 hover:bg-green-400 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/classes'>Visit our Classes</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='lg:h-[600px] object-cover w-screen z-10' src={banner4} />
          <div className='absolute top-0 left-0  w-full h-full lg:space-y-10 bg-[#fff1] bg-gradient-to-r from-black via-transparent to-black text-white text-center flex flex-col justify-center'>
            <div className='max-w-[1000px] mx-auto text-slate-300'>
              <h1 className='text-2xl lg:text-5xl mb-4 font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Welcome to summerSports programme</h1>
              <p className='hidden lg:block my-10 text-lg'>Summer is here! For most of us, we look back on the seemingly endless, carefree summer days of our childhood with fondness and joy. However, now that we are parents, some of us may have mixed feelings about this season for our own kids. How will we manage childcare while working? How can we avoid the “I’m bored!” comments? Are there any educational summer activities we can get them involved in? Why is our grocery bill and electricity suddenly so much higher?</p>
              <div className='flex gap-2 lg:gap-4 justify-center'>
                <Link className='bg-green-500 hover:bg-green-400 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/instructor'>Know our Instructors</Link>
                <Link className='bg-green-500 hover:bg-green-400 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/classes'>Visit our Classes</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='lg:h-[600px] object-cover w-screen z-10' src={banner5} />
          <div className='absolute top-0 left-0  w-full h-full lg:space-y-10 bg-[#fff1] bg-gradient-to-r from-black via-transparent to-black text-white text-center flex flex-col justify-center'>
            <div className='max-w-[1000px] mx-auto text-slate-300'>
              <h1 className='text-2xl lg:text-5xl mb-4 font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Welcome to summerSports programme</h1>
              <p className='hidden lg:block my-10 text-lg'>Summer is here! For most of us, we look back on the seemingly endless, carefree summer days of our childhood with fondness and joy. However, now that we are parents, some of us may have mixed feelings about this season for our own kids. How will we manage childcare while working? How can we avoid the “I’m bored!” comments? Are there any educational summer activities we can get them involved in? Why is our grocery bill and electricity suddenly so much higher?</p>
              <div className='flex gap-2 lg:gap-4 justify-center'>
                <Link className='bg-green-500 hover:bg-green-400 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/instructor'>Know our Instructors</Link>
                <Link className='bg-green-500 hover:bg-green-400 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/classes'>Visit our Classes</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
