import React from 'react';

const SingleImage = ({ href, imgSrc, Alt }) => {
    return (
        <>
            <a
                href={href}
                className="mx-4 flex w-[150px] items-center justify-center 2xl:w-[180px] glass px-8 py-10"
            >
                <img src={imgSrc} alt={Alt} className="w-full h-10" />
            </a>
        </>
    );
};

export default SingleImage;