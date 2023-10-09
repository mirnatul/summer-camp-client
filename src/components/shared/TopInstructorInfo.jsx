import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Slider from "react-slick";
// import './TopInstructorInfo.css'


const TopInstructorInfo = ({ data }) => {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className=' grid lg:grid-cols-3 gap-5' >
      {

        data && data.slice(0, 6).map((data, index) => {

          return (
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="">
                
                <img className="h-96 w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={data.image} alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[70%] flex-col items-center justify-center px-9 text-center transition-all duration-700 group-hover:translate-y-0">
                <h1 className=" text-3xl font-bold text-white">{data.name}</h1>
                <p className="text-white p-5">{data.email}</p>

                <div className='flex text-lg text-red-500 space-x-5'>

                  <FaFacebook></FaFacebook>

                  <FaInstagram></FaInstagram>


                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  );
};

export default TopInstructorInfo;