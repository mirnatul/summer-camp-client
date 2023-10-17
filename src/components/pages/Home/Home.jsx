import React from 'react';
import Slider from 'react-slick';
import Banner from './Banner/Banner';
import PopularClasses from './popularclass/PopularClasses';
import TopInstructor from './Instructors/TopInstructor';
import RocketScrollAnimation from '../../shared/RocketScrollAnimation';
import PerformanceShowCase from '../../shared/PerformanceShowcase'
import AnotherExtraSection from './AnotherExtraSection';
import SampleClass from './SampleClass';
import PageCompo from '../../shared/PageCompo';
import OurActivity from './OurActivity';
import RegistrationPromotion from './RegistrationPromotion';
import Testimonials from './Testimonials';
import WhatYouWillGet from './WhatYouWillGet';
import Contact from './Contact/Contact';
import OurClient from './OurClient/OurClient';
import Faq from './Faq/Faq';
import Plans from './Plans/Plans';
import Features from './Features/Features';
import PerformanceOfOurStudents from './PerformanceOfOurStudents/PerformanceOfOurStudents';

const Home = () => {
    return (
        <>
            <div className='space-y-10'>
                <Banner></Banner>
                <WhatYouWillGet></WhatYouWillGet>
                <PopularClasses></PopularClasses>
                <PageCompo>
                    <TopInstructor></TopInstructor>
                </PageCompo>
                <Features></Features>
                <PerformanceOfOurStudents></PerformanceOfOurStudents>
                <OurClient></OurClient>
                <Testimonials></Testimonials>
                {/* <OurActivity></OurActivity> */}
                {/* <RegistrationPromotion></RegistrationPromotion> */}
                <Plans></Plans>
                <Contact></Contact>
                <Faq></Faq>
            </div>
        </>
    );
};

export default Home;