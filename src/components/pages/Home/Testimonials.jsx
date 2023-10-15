import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
// import Slider from 'react-slick';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const testimonials = [
    {
      "image": "https://images.unsplash.com/photo-1665779912168-c6d48ec98dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      "name": "John Smith",
      "review": "Attending the drama summer camp at Dramatixlab was an incredible experience. The workshops were engaging, the instructors were knowledgeable, and I learned so much about acting and stage performance. Highly recommended!",
      "rating": 4.5
    },
    {
      "image": "https://images.unsplash.com/photo-1653055645127-54ec96add7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "name": "Emily Johnson",
      "review": "I had the most amazing time at Dramatixlab's summer camp. The immersive theatre activities helped me improve my confidence and creativity. The supportive environment and talented staff made it a truly memorable experience.",
      "rating": 4.2
    },
    {
      "image": "https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      "name": "Michael Rodriguez",
      "review": "Dramatixlab's summer camp gave me the opportunity to explore my passion for theatre. The camp curriculum was well-structured, and I enjoyed every moment of learning different acting techniques. It was an unforgettable summer!",
      "rating": 4.8
    },
    {
      "image": "https://images.unsplash.com/photo-1665779912168-c6d48ec98dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      "name": "Sophia Davis",
      "review": "I can't thank Dramatixlab enough for the incredible summer camp experience. The camp activities were diverse, including improvisation, scriptwriting, and stagecraft. It was a great platform to meet like-minded individuals and grow as an actor.",
      "rating": 4.0
    },
    {
      "image": "https://images.unsplash.com/photo-1502452213786-a5bc0a67e963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      "name": "Benjamin Wilson",
      "review": "Dramatixlab's summer camp exceeded all my expectations. The instructors were passionate and dedicated, and they provided valuable guidance and feedback. The camp helped me discover my strengths and develop my acting skills.",
      "rating": 4.1
    },
    {
      "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "name": "Olivia Thompson",
      "review": "I had an absolute blast at Dramatixlab's summer camp. From performing on stage to collaborating with fellow campers, every moment was filled with excitement. The camp nurtured my love for theatre and ignited my creativity.",
      "rating": 4.7
    }
  ]

  return (
    <div className='py-16 my-10 glass'>
      <div cascade className='text-center mx-auto my-10'>
        <h1 className='text-white text-3xl lg:text-5xl font-bold italic mb-16'>What Our Student Says</h1>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          testimonials.map((testimonials, index) => <SwiperSlide key={index}>
            <div className='text-center text-slate-200 text-sm md:text-md lg:px-20'>
              <div className="avatar">
                <div className="w-24 lg:w-32 rounded">
                  <img src={testimonials.image} />
                </div>
              </div>
              <p className='font-bold text-xl lg:text-3xl mt-4'>{testimonials.name}</p>
              <div className='flex justify-center my-2'>
                <Rating
                  style={{ maxWidth: 180, textAlign: 'center' }}
                  value={testimonials.rating}
                  readOnly
                />
              </div>
              <p className='text-md lg:text-lg'>{testimonials.review}</p>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonials;