import React from 'react';

const PageCompo = ({children}) => {
    return (
        <div className='lg:w-[1280px] mx-auto'>

            {children}
            
        </div>
    );
};

export default PageCompo;