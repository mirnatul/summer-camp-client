import React from 'react';
import coaching from '../../../../assets/animations/coaching.json'
import attention from '../../../../assets/animations/attention.json'
import equipment from '../../../../assets/animations/equipment.json'
import Lottie from 'lottie-react';

const Features = () => {
    return (
        <div className='pb-6 lg:pb-20'>
            <div cascade className='text-center mx-auto my-8 lg:my-16'>
                <h1 className='text-white text-3xl lg:text-5xl font-bold italic mb-4'>Our Features</h1>
                <p className='text-slate-300 text-lg'>Know about the services we provide in the summerSports events</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 lg:gap-10'>
                <div className="card card-compact bg-green-100 shadow-xl rounded-md hover:scale-105 duration-300">
                    <figure><Lottie className='w-48 py-10' animationData={coaching}></Lottie></figure>
                    <div className="card-body">
                        <h2 className="card-title">Expert Coaching</h2>
                        <p className='text-slate-600'>Our summer sports programs are led by experienced and qualified coaches who are passionate about helping athletes of all ages and skill levels improve their performance. Our coaches will teach you the fundamentals of your chosen sport, as well as more advanced techniques and strategies. They will also help you develop a personalized training plan and provide you with the support and encouragement you need to reach your goals.</p>
                    </div>
                </div>
                <div className="card card-compact bg-green-100 shadow-xl rounded-md hover:scale-105 duration-300">
                    <figure><Lottie className='w-48 py-10' animationData={attention}></Lottie></figure>
                    <div className="card-body">
                        <h2 className="card-title">Personalized Attention</h2>
                        <p className='text-slate-600'>We understand that every athlete is different, so we offer personalized attention to all of our participants. Our coaches will take the time to get to know you and your individual needs. They will work with you to develop a training plan that is tailored to your specific goals and abilities. They will also provide you with one-on-one feedback and support to help you stay on track and achieve your goals.</p>
                    </div>
                </div>
                <div className="card card-compact bg-green-100 shadow-xl rounded-md hover:scale-105 duration-300">
                    <figure><Lottie className='w-32 py-20' animationData={equipment}></Lottie></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fun and Competitive Environment</h2>
                        <p className='text-slate-600'>Our summer sports programs are designed to be fun and competitive for athletes of all ages and skill levels. We offer a variety of games and activities that will help you learn and improve your skills, while also having a great time. We also offer opportunities for athletes to compete against each other in a fun and supportive environment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;