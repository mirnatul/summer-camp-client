import React from 'react';
import Swal from 'sweetalert2';
import useBooking from '../../../../hooks/useBooking';
import { Link } from 'react-router-dom';

const MyClass = ({data}) => {


    const [,  refetch] = useBooking()


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
    
    
    
    
            fetch (`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/myBooking/${id}`, {
    
            method : 'DELETE',
            })
            .then (res => res.json())
            .then (data  => {console.log(data)
    
              if (data.deletedCount > 0) {
    
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
    
    
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl text-base-content h-full">
                <figure><img src={data.data.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.data.name}</h2>
                    <p> Instructor: {data.data.instructor}</p>
                    <p>Available Seats : {data.data.availableSeats}</p>
                    <p>Price : ${data.data.price}</p>



                    <div className='flex justify-between'>


                        <Link to = {`/dashboard/payment/${data._id}`}><button className='button-primary'>Pay Now</button></Link>
                        <button onClick={() => handleDelete(data._id)} className='btn btn-error'>Delete</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MyClass;