import React from 'react';
import { FaBook, FaFilm, FaGraduationCap, FaPen, FaPenFancy, FaUniversity } from 'react-icons/fa';

const BestTheatre = () => {
    return (
        <div className='lg:flex lg:space-x-3 items-center bg-gray-900 text-white p-5'>

            <img data-aos="fade-right" data-aos-duration="2000"
                className='rounded-t-full rounded-s-full lg:w-[50%]' src="https://worldoftheatreandart.com/wp-content/uploads/2016/08/Reasons-to-Join-Theatre-Group-1.jpg" alt="" />


            <div className='space-y-5'  data-aos="fade-left" data-aos-duration="2000">


                <p className='text-sm  text-yellow-300 font-bold '>Who We Are</p>



                <h1 className='text-3xl font-bold'>The best Drama School For you</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas omnis rerum rem, assumenda quae ab a quidem neque quibusdam numquam?</p>


                <div className='grid lg:grid-cols-2 gap-5'>

                    <div>


                        <div>


                            <FaFilm className='text-yellow-300 text-3xl '></FaFilm>

                        </div>

                        <h1 className='text-2xl font-bold'>Dance Facilities</h1>
                        <p>You will learn classic Dance with our experience Instructor</p>



                    </div>

                    <div>


                        <div>


                            <FaUniversity className='text-red-500 text-3xl'></FaUniversity>
                        </div>

                        <h1 className='text-2xl font-bold '>Traditional Academy</h1>
                        <p>Our school follows the guidelines of the local school district</p>



                    </div>
                    <div>


                        <div>


                            <FaBook className='text-pink-500 text-3xl'></FaBook>
                        </div>

                        <h1 className='text-2xl font-bold '>Honors classes
                        </h1>
                        <p>With a balance of self-directed play and thoughtful teacher</p>



                    </div>
                    <div>


                        <div>


                            <FaGraduationCap className='text-sky-500 text-3xl '></FaGraduationCap>
                        </div>

                        <h1 className='text-2xl font-bold '>Advance Placement Courses
                        </h1>
                        <p>This program is available for all children enrolled in elementary</p>



                    </div>



                </div>
            </div>





        </div>
    );
};

export default BestTheatre;