import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import PageCompo from '../components/shared/PageCompo';

const Main = () => {
    return (
        <div className='overflow-x-hidden'>
            <Navbar></Navbar>
            <div className=' md:min-h-[calc(100vh-341px)] p-2 dark:bg-gray-800 '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;