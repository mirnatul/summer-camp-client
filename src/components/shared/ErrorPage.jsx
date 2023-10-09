import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Lottie from "lottie-react";
import errorAnim from "../../assets/anim/error.json";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='m-96'>

            <Link to = "/"> <button className='button-primary flex items-center'>Back to Home <FaArrowRight className='ml-4'></FaArrowRight> </button></Link>
            <Lottie animationData={errorAnim} />;






        </div>
    );
};

export default ErrorPage;