import React from 'react';
import useIntructors from '../../../hooks/useIntructors';
import InstructorList from '../Home/Instructors/InstructorList';

const Instructors = () => {


    const [instructor] = useIntructors()
    return (
        <div className='grid lg:grid-cols-3 gap-5'>
           {

            instructor.map (data => <InstructorList data={data} key={data._id}></InstructorList>)
           }
        </div>
    );
};

export default Instructors;