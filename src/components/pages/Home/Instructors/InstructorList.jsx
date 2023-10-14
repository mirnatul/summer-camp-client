import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const InstructorList = ({ data }) => {

  return (
    <>
      <div className="flex  card-bordered flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={data.image} alt=""></img>
        <h1 className="mt-4 text-2xl font-semibold  capitalize dark:text-white group-hover:text-white">{data.name}</h1>
        <p className="mt-2 text-base-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{data.email}</p>
        <div className="flex mt-3 -mx-2">
          <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
            <FaInstagram></FaInstagram>
          </a>
          <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="Facebook">
            <FaFacebook></FaFacebook>
          </a>
          <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
            <FaTwitter></FaTwitter>
          </a>
        </div>
      </div>
    </>
  );
};

export default InstructorList;