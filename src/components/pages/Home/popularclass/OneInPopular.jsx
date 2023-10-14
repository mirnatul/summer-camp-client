import React from 'react';

const OneInPopular = ({ data }) => {
    return (
        <div className="card w-full shadow-xl rounded-md">
            <figure className='relative'>
                <img className='hover:scale-125 transition duration-300' src={data.image} alt="classes" />
                <p className='absolute top-3 right-3 bg-slate-800 text-white py-2 px-3 font-semibold rounded-md text-lg'>${data.price}</p>
            </figure>
            <div className="card-body bg-slate-200 text-slate-800">
                <h2 className="card-title font-bold">{data.name}</h2>
                <hr />
                <p>Instructor: <span className='font-bold'>{data.instructor}</span></p>
                <p>available seats: {data.availableSeats}</p>
                <p>total enrolled: {data.totalEnrolled}</p>
            </div>
        </div>
    );
};

export default OneInPopular;