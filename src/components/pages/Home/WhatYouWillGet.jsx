import React from 'react';
import { FaBrain, FaWpexplorer } from 'react-icons/fa';
import { BsFillLightningFill } from 'react-icons/bs';
import { LuArrowBigUpDash } from 'react-icons/lu';
import { RiTeamFill } from 'react-icons/ri';
import { GrConnect } from 'react-icons/gr';
import featuresAnimation from '../../../assets/animations/features.json'

import Lottie from 'lottie-react'

const WhatYouWillGet = () => {
    return (
        <div>
            <h2 className='text-white text-5xl font-bold text-center mt-16 mb-6 italic'>What you'll get</h2>
            <h3 className='text-white text-lg font-semibold text-center mt-4 mb-12'>We're transforming summer learning experiences.</h3>
            <div className='grid lg:grid-cols-3'>
                <div className='grid gap-4'>
                    <div className='text-white glass py-6 px-6 lg:relative lg:ml-16'>
                        <div className='flex gap-2 items-center mb-2'>
                            <FaBrain color='black' size={32}></FaBrain>
                            <p className='text-2xl font-semibold'>Creative Exploration</p>
                        </div>
                        <p className='text-lg'>Unleash your imagination and explore your creativity.</p>
                    </div>
                    <div className='text-white glass py-6 px-6 lg:relative lg:mr-16'>
                        <div className='flex gap-2 items-center mb-2'>
                            <FaWpexplorer color='black' size={32}></FaWpexplorer>
                            <p className='text-2xl font-semibold'>Express Yourself</p>
                        </div>
                        <p className='text-lg'>Discover the joy of self-expression through drama and performing arts.</p>
                    </div>
                    <div className='text-white glass py-6 px-6 lg:relative lg:ml-16'>
                        <div className='flex gap-2 items-center mb-2'>
                            <RiTeamFill color='black' size={32}></RiTeamFill>
                            <p className='text-2xl font-semibold'>Teamwork and Friendship</p>
                        </div>
                        <p className='text-lg'>Learn the power of working together and making new friends.</p>
                    </div>
                </div>
                <div className='w-[400px]'>
                    <Lottie animationData={featuresAnimation}></Lottie>
                </div>
                <div className='grid gap-4'>
                    <div className='text-white glass py-6 px-6 lg:relative lg:mr-16'>
                        <div className='flex gap-2 items-center mb-2'>
                            <BsFillLightningFill color='black' size={32}></BsFillLightningFill>
                            <p className='text-2xl font-semibold'>Boost Confidence</p>
                        </div>
                        <p className='text-lg'>Build confidence through engaging performances and challenges.</p>
                    </div>
                    <div className='text-white glass py-6 px-6 lg:relative lg:ml-16'>
                        <div className='flex gap-2 items-center mb-2'>
                            <LuArrowBigUpDash color='black' size={32}></LuArrowBigUpDash>
                            <p className='text-2xl font-semibold'>Personal Growth</p>
                        </div>
                        <p className='text-lg'>Grow personally and develop important life skills.</p>
                    </div>
                    <div className='text-white glass py-6 px-6 lg:relative lg:mr-16'>
                        <div className='flex gap-2 items-center mb-2'>
                            <GrConnect color='black' size={32}></GrConnect>
                            <p className='text-2xl font-semibold'>Unforgettable Experiences</p>
                        </div>
                        <p className='text-lg'>Create lifelong memories with fun and exciting summer activities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatYouWillGet;