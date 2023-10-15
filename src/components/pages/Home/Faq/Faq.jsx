import React from 'react';
import faqSVG from '../../../../assets/faq.svg'

const Faq = () => {
    return (
        <div className='pb-6 lg:pb-20'>
            <div cascade className='text-center mx-auto my-10'>
                <h1 className='text-white text-3xl lg:text-5xl font-bold italic mb-20'>Frequently Asked Questions</h1>
            </div>
            <div className='grid lg:grid-cols-2'>
                <div>
                    <img src={faqSVG} alt="" />
                </div>
                <div>
                    <div className="collapse collapse-plus glass rounded-sm mb-2 text-slate-300">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl lg:text-2xl font-semibold">
                            What sports are offered at camp?
                        </div>
                        <div className="collapse-content">
                            <p>This is probably the most important question for parents, so it should be prominently displayed on the website. Be sure to list all of the sports that are offered, as well as the age ranges and skill levels that each sport is appropriate for.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus glass rounded-sm mb-2 text-slate-300">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl lg:text-2xl font-semibold">
                            What is the camp schedule?
                        </div>
                        <div className="collapse-content">
                            <p>The camp schedule should be clearly displayed on the website, so that parents know what to expect. Be sure to include the start and end times for each day of camp, as well as the activities that will be taking place. You may also want to provide a sample daily schedule on the website.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus glass rounded-sm mb-2 text-slate-300">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl lg:text-2xl font-semibold">
                            What are the camp counselor qualifications?
                        </div>
                        <div className="collapse-content">
                            <p>Parents want to know that their children are in good hands at camp, so it's important to highlight the qualifications of your camp counselors on the website. Be sure to mention their experience working with children, their sports expertise, and any other relevant qualifications.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus glass rounded-sm mb-2 text-slate-300">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl lg:text-2xl font-semibold">
                            What is the camp's cancellation policy?
                        </div>
                        <div className="collapse-content">
                            <p>Life happens, and sometimes parents need to cancel their child's camp registration at the last minute. Be sure to have a clear cancellation policy in place and post it on the website. This will help parents to understand their options and make informed decisions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;