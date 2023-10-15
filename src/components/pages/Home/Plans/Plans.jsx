import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'

const Plans = () => {
    return (
        <div>
            <div cascade className='text-center mx-auto my-8 lg:my-16'>
                <h1 className='text-white text-3xl lg:text-5xl font-bold italic mb-4'>Plans That Fit Your Need</h1>
                <p className='text-slate-300 text-lg'>Start with 14-day free trial. No credit card needed.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 lg:gap-12'>
                <div className='border-2 rounded-md p-6 lg:p-10 text-white'>
                    <p className='text-center text-3xl font-semibold'>Basic</p>
                    <p className='text-center my-3'><span className=' text-5xl font-bold'>$9</span> /month</p>
                    <ul className='my-8'>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>One week of camp</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Two hours of sports instruction per day</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Access to all basic sports facilities and equipment</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Camp t-shirt and hat</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Snacks and drinks</li>
                    </ul>
                    <div className='text-center mt-6'>
                        <button className='btn w-full'>Start Trial</button>
                    </div>
                </div>
                <div className='border-2 rounded-md p-6 lg:p-10 text-slate-600 bg-white lg:scale-110'>
                    <p className='border-2 absolute -top-5 z-10 bg-red-600 glass text-white py-2 px-4 rounded-full -right-2'>Most Popular</p>
                    <p className='text-center text-3xl font-semibold'>Standard</p>
                    <p className='text-center my-3'><span className=' text-5xl font-bold '>$19</span> /month</p>
                    <ul className='my-8'>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Two weeks of camp</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Three hours of sports instruction per day</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Access to all standard sports facilities</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Camp t-shirt, hat, and water bottle</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Snacks and drinks</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>One field trip to a local sports facility</li>
                    </ul>
                    <div className='text-center mt-6'>
                        <button className='btn w-full bg-[#007057] hover:bg-green-700 text-white'>Start Trial</button>
                    </div>
                </div>
                <div className='border-2 rounded-md p-6 lg:p-10 text-white'>
                    <p className='text-center text-3xl font-semibold'>Premium</p>
                    <p className='text-center my-3'><span className=' text-5xl font-bold '>$39</span> /month</p>
                    <ul className='my-8'>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Three weeks of camp</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Four hours of sports instruction per day</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Access to all premium sports facilities</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Camp t-shirt, hat and backpack</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Snacks and drinks</li>
                        <li className='flex items-center gap-2'><FaCheckCircle></FaCheckCircle>Two field trips to local sports facilities</li>
                    </ul>
                    <div className='text-center mt-6'>
                        <button className='btn w-full'>Start Trial</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;