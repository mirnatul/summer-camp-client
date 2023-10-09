import React, { useContext, useState } from 'react';
import useUser from '../../../../hooks/useUser';
import axios from 'axios';
import { AuthContext } from '../../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useBooking from '../../../../hooks/useBooking';
import useAdmin from '../../../../hooks/useAdmin';
import useInstructor from '../../../../hooks/useInstructor';
import { useLocation, useNavigate } from 'react-router-dom';

const AllClass = ({ data, selectbutton, studentDashboar }) => {


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




        fetch(`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/myBooking/${id}`, {

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
      axios.post('https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/myBooking', item)
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
    <div>
      <div className={`card w-96  shadow text-base-content h-full relative ${data.availableSeats <= 0 ? 'bg-red-600' : 'bg-base-200'}`}>
        <figure><img src={data.image} alt="Shoes" />

        </figure>
        <p className='badge badge-info text-white absolute right-3 top-2'>${data.price}</p>


        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p> Instructor: {data.instructor}</p>
          <p>Available Seats : {data.availableSeats}</p>
          <p>Price : ${data.price}</p>
          <p>Total Student  & enrolled : {data.totalEnrolled}</p>


          {

            selectbutton && <button onClick={() => handleBookings(data._id)} className={`${isAdmin || Isinstructor || data.availableSeats <= 0 ? 'btn btn-disabled' : 'button-primary'}`}>select now</button>
          }

          {

            studentDashboar && <div className='flex justify-between'>


              <button className='button-primary'>Pay Now</button>
              <button onClick={() => handleDelete(data._id)} className='btn btn-error'>Delete</button>
            </div>
          }

        </div>
      </div>
    </div>
  );
};

export default AllClass;