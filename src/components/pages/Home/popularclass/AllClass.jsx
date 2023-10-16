import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useBooking from '../../../../hooks/useBooking';
import useAdmin from '../../../../hooks/useAdmin';
import useInstructor from '../../../../hooks/useInstructor';
import { useLocation, useNavigate } from 'react-router-dom';

const AllClass = ({ data, selectButton, studentDashboar }) => {

  const { user } = useContext(AuthContext)
  const [, refetch] = useBooking()

  const [isAdmin] = useAdmin()
  const [Isinstructor] = useInstructor()

  const [disable, setDisabled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation();
  const item = { data, email: user?.email }

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-server-lime-gamma.vercel.app/myBooking/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 1) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
            refetch()
          })
      }
    })
  }

  const handleBookings = (id) => {
    if (user) {
      axios.post('https://summer-camp-server-lime-gamma.vercel.app/myBooking', item)
        .then(function (response) {
          if (response.data.insertedId) {
            Swal.fire(
              'Good job!',
              'Your Class has been added to your class',
              'success'
            )
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(id);
    }
    else {
      Swal.fire({
        title: 'LogIn now to select this class!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log In Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/logIn', { state: { from: location } })
        }
      })
    }
  }

  return (
    <div className={`card w-full shadow-xl rounded-md ${data.availableSeats <= 0 ? 'bg-red-600' : 'bg-slate-300'}`}>
      <figure className='relative'>
        <img className='hover:scale-125 transition duration-300' src={data.image} alt="classes" />
        <p className='absolute top-3 right-3 bg-slate-800 text-white py-2 px-3 font-semibold rounded-md text-lg'>${data.price}</p>
      </figure>
      <div className="card-body bg-slate-200 text-slate-800">
        <h2 className="card-title font-bold">{data.name}</h2>
        <hr />
        <p>Instructor: <span className='font-bold'>{data.instructor}</span></p>
        <p>available seats: {data.availableSeats}</p>
        <p>total enrolled: {data.totalEnrolled}</p>
        <div className='text-center mt-6'>
          {
            selectButton && <button onClick={() => handleBookings(data._id)} className={`${isAdmin || Isinstructor || data.availableSeats <= 0 ? 'btn btn-disabled w-full' : 'btn bg-green-600 hover:bg-green-700 border-green-600 w-full'}`}>select now</button>
          }
        </div>
        {
          studentDashboar && <div className='flex justify-between'>
            <button className='button-primary'>Pay Now</button>
            <button onClick={() => handleDelete(data._id)} className='btn btn-error'>Delete</button>
          </div>
        }
      </div>
    </div >
  );
};

export default AllClass;