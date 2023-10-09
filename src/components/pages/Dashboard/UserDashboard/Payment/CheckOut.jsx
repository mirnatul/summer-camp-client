import React, { useContext, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AuthContext } from '../../../../../providers/AuthProvider';
import useBooking from '../../../../../hooks/useBooking';
import { useNavigate } from 'react-router-dom';
import useAllClass from '../../../../../hooks/useAllClass';


const CheckOut = ({ price, data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [success, setsuccess] = useState('')
  const navigate = useNavigate()

  const { user } = useContext(AuthContext)
  const [booking, refetch] = useBooking()
  
  const [allClass] = useAllClass()



  const [cardError, setCardError] = useState('')
  const [processing, setProcessing] = useState(false)



  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);






  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }






    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    setProcessing(true)




    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'Anonymous',
            email: user?.email || 'anonymous',
          },
        },
      },
    );


    if (confirmError) {

      console.log(confirmError);
    }

    setProcessing(false)



    if (paymentIntent.status === 'succeeded') {


      const items = {



        id: data._id,
        itemId: data.data._id,
        date: new Date(),
        image: data.data.image,
        name: data.data.name,
        price: data.data.price,
        email: user.email,
        transactionId: paymentIntent.id,




      }

      console.log(paymentIntent.id);

      setsuccess(paymentIntent.id)

      fetch(`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/payments`, {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },


        body: JSON.stringify(items)






      })
        .then(res => res.json())
        .then(data => {
          console.log(data)

          navigate('/classes')









          refetch()
        })
    }

  };

  return (
    <div className='w-full my-10'>
      <form className='space-y-5' onSubmit={handleSubmit}>
        <CardElement className='w-96 text-base-content placeholder-current border p-2 '
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '',
                '::placeholder': {
                  color: '',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className=''>

          <button className='button-primary ' type="submit" disabled={!stripe || !clientSecret || processing}>
            Pay
          </button>
        </div>
      </form>

      <p className='text-error'>{cardError}</p>
      {

        success && <p className='text-success'>Your Transaction completed with ${success}</p>
      }
    </div>
  );
};

export default CheckOut;