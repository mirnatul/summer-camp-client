import React from 'react';

const OurActivity = () => {
    return (
        <div className='bg-black p-10'>


            <div cascade className='text-center mx-auto my-10 '>
                <p className='text-yellow-400 text-lg'>Our Activity</p>

                <h1 className='text-white text-3xl font-bold '>Theatre Gallery</h1>


            </div>




            <div className='grid lg:grid-cols-2 gap-5 items-center'>


                <div className=''>

                    <img  data-aos="fade-right" data-aos-duration="1000" className='' src="https://images.squarespace-cdn.com/content/v1/5daa59214396551a98644c5e/ddc73ac4-1c35-4733-8ea5-23cd40b1f65b/homepage.jpg" alt="" />



                </div>

                <div className='grid lg:grid-cols-2 gap-5 '>

                    <img data-aos="fade-down" data-aos-duration="1000" className='rounded-lg h-full object-contain' src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Teatersport_-4.jpg" alt="" />

                    <img data-aos="fade-down" data-aos-duration="1000" className='rounded-lg h-full object-contain' src="https://tds-images.thedailystar.net/sites/default/files/images/2022/05/12/_p7a4325.jpg" alt="" />

                    <img  data-aos="fade-up" data-aos-duration="1000" className='rounded-lg h-full object-contain' src="https://static01.nyt.com/images/2020/04/10/arts/10theater-stream-roundup-1/10theater-stream-roundup-1-videoSixteenByNineJumbo1600.jpg" alt="" />
                    <img data-aos="fade-up" data-aos-duration="1000" className='rounded-lg h-full object-contain' src="https://en.ktu.edu/wp-content/uploads/sites/5/2018/12/Getas_generaline_20120921_0077-1024x683.jpg" alt="" />



                </div>

            </div>
        </div>
    );
};

export default OurActivity;