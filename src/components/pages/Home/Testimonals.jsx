import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';

const Testimonals = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const testimonals = [
        {
            "image": "https://images.unsplash.com/photo-1665779912168-c6d48ec98dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            "name": "John Smith",
            "review": "Attending the drama summer camp at Dramatixlab was an incredible experience. The workshops were engaging, the instructors were knowledgeable, and I learned so much about acting and stage performance. Highly recommended!"
        },
        {
            "image": "https://images.unsplash.com/photo-1653055645127-54ec96add7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            "name": "Emily Johnson",
            "review": "I had the most amazing time at Dramatixlab's summer camp. The immersive theatre activities helped me improve my confidence and creativity. The supportive environment and talented staff made it a truly memorable experience."
        },
        {
            "image": "https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
            "name": "Michael Rodriguez",
            "review": "Dramatixlab's summer camp gave me the opportunity to explore my passion for theatre. The camp curriculum was well-structured, and I enjoyed every moment of learning different acting techniques. It was an unforgettable summer!"
        },
        {
            "image": "https://images.unsplash.com/photo-1665779912168-c6d48ec98dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            "name": "Sophia Davis",
            "review": "I can't thank Dramatixlab enough for the incredible summer camp experience. The camp activities were diverse, including improvisation, scriptwriting, and stagecraft. It was a great platform to meet like-minded individuals and grow as an actor."
        },
        {
            "image": "https://images.unsplash.com/photo-1502452213786-a5bc0a67e963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
            "name": "Benjamin Wilson",
            "review": "Dramatixlab's summer camp exceeded all my expectations. The instructors were passionate and dedicated, and they provided valuable guidance and feedback. The camp helped me discover my strengths and develop my acting skills."
        },
        {
            "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Olivia Thompson",
            "review": "I had an absolute blast at Dramatixlab's summer camp. From performing on stage to collaborating with fellow campers, every moment was filled with excitement. The camp nurtured my love for theatre and ignited my creativity."
        }
    ]

    return (
            <div className='bg-gray-950 p-10'>

<div cascade className='text-center mx-auto my-10 '>
                <p className='text-yellow-400 text-lg'>Testimonals</p>

                <h1 className='text-white text-3xl font-bold '>What Students say</h1>


            </div>




<Slider {...settings}>


{
    testimonals.map(testimonals => {

        return (

            <div className='card w-96 shadow-lg p-5 text-center h-96 my-10 mr-10 space-y-5 text-white'>
                <img  className='w-32 h-32 rounded-full mx-auto object-contain' src= {testimonals?.image} alt="" />

                <div className='flex justify-around p-2'>

                <FaQuoteLeft></FaQuoteLeft>
                <FaQuoteRight></FaQuoteRight>
                </div>

                <h1 className='text-lg font-bold'>{testimonals.name}</h1>
                <h1>{testimonals.review}</h1>
            </div>
        )
    })
}

</Slider>
            </div>
    );
};

export default Testimonals;