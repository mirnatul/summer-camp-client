import React from 'react';
import { FaAlignRight, FaArrowRight, FaGraduationCap, FaMedal } from 'react-icons/fa';

const AnotherExtraSection = () => {
    return (
        <div className='lg:flex space-x-5'>


<iframe className='w-full lg:h-[500px] rounded-lg' src="https://www.youtube.com/embed/GGl9Wri70aQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='space-y-5'>



                <p className='text-red-500 font-bold'>About Us ----------</p>

                <h1 className='text-4xl font-bold'>Welcome To the DramatixLab! Let's watch a  sample class</h1>
                <p>Discover the magic of drama and theatre at DramatixLab. Unleash your creativity through engaging programs, experienced instructors, and a supportive community. Let your imagination take center stage!</p>


                <p className='text-3xl font-bold flex items-center'><FaMedal className='mr-2 bg-sky-500 text-white p-1 rounded-lg'></FaMedal> Best Quality</p>
                <p className='text-3xl font-bold flex items-center'><FaGraduationCap className='mr-2 bg-sky-500 text-white p-1 rounded-lg'></FaGraduationCap> Best Expert Instructor</p>

                <button className='button-primary flex items-center'>Explore More <FaArrowRight className='ml-2'></FaArrowRight></button>
            </div>
            
        </div>
    );
};

export default AnotherExtraSection;