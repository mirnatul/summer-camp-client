import React from 'react';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';


const Payment = () => {



    const data = useLoaderData()
    console.log(data);



    const stripePromise = loadStripe('pk_test_51NHLRyEvzSccsuMSkox8xjZ1nvH4NaXBqA2ihNjQL9S2u5T8Owszz0Zcu5JplCimK1PvkEbzw1dwvvHzbTMbLWWS00xhRLoMdj');

    return (
        <div className='mx-auto my-5'>

           <p className='text-base-content text-3xl font-bold '> Pay Now : {data?.data.price}</p>


            <Elements  stripe={stripePromise}>
            <CheckOut price={Number(data?.data.price)} data = {data} />
            </Elements>

        </div>
    );
};

export default Payment;