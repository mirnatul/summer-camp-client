import React from 'react';

import './PopularClass.css'

const OneInPopular = ({ data }) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <div className="container m-0  ">



                <div className="card ">

                    <div className="slide  slide1 ">

                        <div className="content">
                            <img className='h-96  rounded-lg object-cover' src={data.image} alt="" />
                        </div>

                    </div>

                    <div className="slide slide2 w-full text-white bg-white">

                        <div className="content ">

                            <h2 className="text-xl font-bold text-black">{data.name}</h2>
                            <p className='text-base'> Instructor: {data.instructor}</p>
                            <p>Available Seats : {data.availableSeats}</p>
                            <p>Price : ${data.price}</p>
                            <p>Total Student  & enrolled : {data.totalEnrolled}</p>

                        </div>

                    </div>

                </div>



            </div>

        </div>
    );
};

export default OneInPopular;