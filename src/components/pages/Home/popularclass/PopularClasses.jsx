import React from 'react';
import AllClass from './AllClass';
import { FaChessKing } from 'react-icons/fa';
import useClasses from '../../../../hooks/useClasses';
import usePopularClasses from '../../../../hooks/usePopularClasses';
import { Fade } from 'react-awesome-reveal';
import OneInPopular from './OneInPopular';

const PopularClasses = () => {
    const [popularClasses] = usePopularClasses()

    return (
        <div className='p-10 rounded-lg'>
            <div cascade className='text-center mx-auto my-10'>
                <h1 className='text-white text-5xl font-bold'>Popular Classes</h1>
            </div>
            <div className='grid  lg:grid-cols-3 gap-2'>
                {
                    popularClasses && popularClasses.slice(0, 6).map((data) => <OneInPopular data={data} key={data._id}></OneInPopular>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;