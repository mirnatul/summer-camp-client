import React, { useState } from 'react';
import useClasses from '../../../hooks/useClasses';
import AllClass from '../Home/popularclass/AllClass';

const AllLabClasses = () => {




    const [allClass] = useClasses()

    const [selectedbutton, setSelectedbutton] = useState(true)


    
    return (
        <div className='grid lg:grid-cols-3 gap-5'>
            {

                allClass && allClass.map (data => <AllClass data={data} key={data._id} selectbutton={selectedbutton}></AllClass>)
            }
        </div>
    );
};

export default AllLabClasses;