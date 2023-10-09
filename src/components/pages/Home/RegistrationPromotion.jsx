import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationPromotion = () => {
    return (
        <div className="hero lg:min-h-[400px] " style={{ backgroundImage: 'url(https://nayitaleem.com/wp-content/uploads/2022/10/prod.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="lg:max-w-md bg-black p-5 rounded-s-full rounded-t-full">
                    <p className='text-yellow-400'>Registration</p>
                    <h1 className="mb-5 text-5xl font-bold">Join to experience
                        free right now</h1>








                    <div className="lg:grid grid-flow-col  gap-5 text-center auto-cols-max justify-center hidden">
                        <div className="max-w-max flex flex-col lg:p-2 bg-blue-800 rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div className="max-w-max flex flex-col lg:p-2 bg-blue-800 rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div className="max-w-max flex flex-col lg:p-2 bg-blue-800 rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div className="max-w-max flex flex-col lg:p-2 bg-blue-800 rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 55 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                    <button className="button-primary"> <Link >Register</Link></button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPromotion;