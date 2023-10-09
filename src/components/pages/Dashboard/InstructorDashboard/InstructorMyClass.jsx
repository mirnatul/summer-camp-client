import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const InstructorMyClass = () => {


    const [myclass, setMyClass] = useState([])

    const {user} = useContext(AuthContext)


    useEffect(() => { 


        fetch (`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/instructorClass/${user.email}`)
        .then (res => res.json())
        .then (data => setMyClass(data))







    }, [])
    return (
        <div>

<div className="overflow-x-auto">
        <table className="table table-sm">
          {/* head */}
          <thead>
            <tr>


              <th>Class Info</th>

              <th>Instructor Info</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Total Enrolled</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>






            {

              myclass && myclass.map(data => {


                return (


                  <>
                    <tr className='text-base-content'>
                      <td><div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={data.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>

                        <p>{data.name}</p> </td>

                      <td>



                        <p>{data.instructor}</p>
                        <p>{data?.email}</p>
                      </td>
                      <td>{data.availableSeats}</td>
                      <td>{data.price}</td>
                      <td>{data.totalEnrolled}</td>
                      <td>{data.status}</td>
                      <td>


                       {data.status === 'approved' || data.status === 'pending' || data.feedback}
                      </td>
                      <td className='btn btn-primary'>Update</td>




                    </tr>



                  </>

                )
              })
            }

          </tbody>

        </table>
      </div>            
        </div>
    );
};

export default InstructorMyClass;