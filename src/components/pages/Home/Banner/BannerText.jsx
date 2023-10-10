import React from 'react';
import { Link } from 'react-router-dom';

const BannerText = () => {
    return (
        <div className='absolute top-0 left-0  w-full h-full lg:space-y-10 bg-[#fff1] bg-gradient-to-r from-black via-transparent to-black text-white text-center flex flex-col justify-center'>
            <div className='max-w-[1000px] mx-auto text-slate-300'>
                <h1 className='text-2xl lg:text-6xl mb-4 font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Welcome to summer<span className='text-green-600'>Sports</span></h1>
                <p className='hidden lg:block my-10 text-lg'>Summer is here! For most of us, we look back on the seemingly endless, carefree summer days of our childhood with fondness and joy. However, now that we are parents, some of us may have mixed feelings about this season for our own kids. How will we manage childcare while working? How can we avoid the “I’m bored!” comments? Are there any educational summer activities we can get them involved in? Why is our grocery bill and electricity suddenly so much higher?</p>
                <div className='flex gap-2 lg:gap-4 justify-center'>
                    <Link className='bg-white hover:bg-slate-300 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/instructor'>Our Instructors</Link>
                    <Link className='bg-white hover:bg-slate-300 px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-lg text-black font-semibold rounded' to='/classes'>Our Classes</Link>
                </div>
            </div>
        </div>
    );
};

export default BannerText;