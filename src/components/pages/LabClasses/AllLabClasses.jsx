import React, { useState } from 'react';
import useClasses from '../../../hooks/useClasses';
import AllClass from '../Home/popularclass/AllClass';

const AllLabClasses = () => {
    const [allClass] = useClasses()
    const [selectedButton, setSelectedButton] = useState(true)

    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    allClass && allClass.map(data => <AllClass data={data} key={data._id} selectButton={selectedButton}></AllClass>)
                }
            </div>
        </div>
    );
};

export default AllLabClasses;