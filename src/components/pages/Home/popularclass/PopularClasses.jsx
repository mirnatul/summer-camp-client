import React from 'react';
import AllClass from './AllClass';
import { FaChessKing } from 'react-icons/fa';
import useClasses from '../../../../hooks/useClasses';
import usePopularClasses from '../../../../hooks/usePopularClasses';
import { Fade } from 'react-awesome-reveal';
import OneInPopular from './OneInPopular';
import { Link } from 'react-router-dom';

const PopularClasses = () => {
    const [popularClasses] = usePopularClasses()

    return (
        <div className='p-10 rounded-lg'>
            <div cascade className='text-center mx-auto my-10'>
                <h1 className='text-white text-3xl lg:text-5xl font-bold italic mb-16'>Popular Classes</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 lg:gap-10'>
                {
                    popularClasses && popularClasses.slice(0, 6).map((data) => <OneInPopular data={data} key={data._id}></OneInPopular>)
                }
            </div>
            <div className='text-center mt-6'>
                <Link to='/classes' className='btn btn-success'>See all the classes</Link>
            </div>
        </div>
    );
};

export default PopularClasses;