import React from 'react';
import AllClass from '../popularclass/AllClass';
import InstructorList from './InstructorList';
import useIntructors from '../../../../hooks/useIntructors';
import { Fade } from 'react-awesome-reveal';
import InstructorInfoPopular from './InstructorInfoPopular';
import TopInstructorInfo from '../../../shared/TopInstructorInfo';

const TopInstructor = () => {
    const [instructor] = useIntructors()

    return (
        <div>
            <div cascade className='text-center mx-auto my-10'>
                <h1 className='text-white text-5xl font-bold italic mb-16'>Top Instructors</h1>
            </div>
            <div className='glass p-10 rounded-md'>
                <div className=' w-full mx-auto '>
                    <TopInstructorInfo data={instructor}></TopInstructorInfo>
                </div>
            </div>
        </div>
    );
};

export default TopInstructor;