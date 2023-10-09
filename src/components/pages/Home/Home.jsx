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
import BestTheatre from './BestTheatre';
import CareValue from './CareValue';
import OurActivity from './OurActivity';
import RegistrationPromotion from './RegistrationPromotion';
import Testimonals from './Testimonals';

const Home = () => {
    return (
        <>

            <div className='space-y-10'>

                <Banner></Banner>

                <BestTheatre></BestTheatre>


                <PopularClasses></PopularClasses>


                <PageCompo>


                    <CareValue></CareValue>
                </PageCompo>

                {/* <AnotherExtraSection></AnotherExtraSection> */}
                <PageCompo><TopInstructor></TopInstructor>

                </PageCompo>

                <Testimonals></Testimonals>
                <OurActivity></OurActivity>





                <RegistrationPromotion></RegistrationPromotion>

            </div>

        </>
    );
};

export default Home;