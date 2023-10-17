import React, { useState } from 'react';
import cricket from '../../../../assets/performance/cricket.png'
import football from '../../../../assets/performance/football.png'
import chess from '../../../../assets/performance/chess.png'
import fight from '../../../../assets/performance/fight.png'
import { FaPlay } from 'react-icons/fa'
import VideoPopUp from './VideoPopUp';

const PerformanceOfOurStudents = () => {

    const [show, setShow] = useState(false);
    const [videoLink, setVideoLink] = useState('')

    return (
        <div className='pb-6 lg:pb-20'>
            <div className='text-center mx-auto my-8 lg:my-16'>
                <h1 className='text-white text-3xl lg:text-5xl font-bold italic mb-4'>Performance of Our Students</h1>
                <p className='text-slate-300 text-lg'>See what our student done before</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-10'>
                <div onClick={() => {
                    console.log("hello");
                    setVideoLink('https://www.youtube.com/watch?v=4nM1izVtALQ')
                    setShow(true)
                }} className="card shadow-xl rounded-md">
                    <figure><img className='h-[400px] w-full opacity-90' src={cricket} alt="Shoes" /></figure>
                    <p className='absolute h-full w-full flex justify-center items-center cursor-pointer hover:scale-125 duration-300'><FaPlay size={100} className='text-red-400'></FaPlay></p>
                </div>
                <div onClick={() => {
                    setVideoLink('https://www.youtube.com/watch?v=mzPfb4cShUc')
                    setShow(true)
                }} className="card shadow-xl rounded-md">
                    <figure><img className='h-[400px] w-full opacity-90' src={football} alt="Shoes" /></figure>
                    <p className='absolute h-full w-full flex justify-center items-center cursor-pointer hover:scale-125 duration-300'><FaPlay size={100} className='text-red-400'></FaPlay></p>
                </div>
                <div onClick={() => {
                    setVideoLink('https://www.youtube.com/watch?v=doXk0apJqgA')
                    setShow(true)
                }} className="card shadow-xl rounded-md">
                    <figure><img className='h-[400px] w-full opacity-90' src={chess} alt="Shoes" /></figure>
                    <p className='absolute h-full w-full flex justify-center items-center cursor-pointer hover:scale-125 duration-300'><FaPlay size={100} className='text-red-400'></FaPlay></p>
                </div>
                <div onClick={() => {
                    setVideoLink('https://www.youtube.com/watch?v=AjHqNxPXvAE')
                    setShow(true)
                }} className="card shadow-xl rounded-md">
                    <figure><img className='h-[400px] w-full opacity-90' src={fight} alt="Shoes" /></figure>
                    <p className='absolute h-full w-full flex justify-center items-center cursor-pointer hover:scale-125 duration-300'><FaPlay size={100} className='text-red-400'></FaPlay></p>
                </div>
            </div>
            <VideoPopUp show={show} setShow={setShow} videoUrl={videoLink}>
                {" "}
            </VideoPopUp>
        </div>
    );
};

export default PerformanceOfOurStudents;