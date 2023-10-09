import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const EnrolledClass = () => {


    const {user} = useContext(AuthContext)

    const [classInfo, setClasseInfo] = useState([])


    useEffect(() => { 



        fetch (`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/myEnrolled/${user?.email}`)
        .then (res => res.json())
        .then (data => setClasseInfo(data))
    },[])






    return (
        <div>
<div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>


              <th>Class Image</th>
              <th>Course Name</th>

              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>






            {

              classInfo && classInfo.map(data => {


                return (


                  <>
                    <tr className='text-base-500'>
                      <td><div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={data.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>

                      </td>
                      <td>{data.name}</td>

                      
                      <td>{data.price}</td>
                      <td>Enrolled</td>
                      <td>


                       


                      </td>



                    </tr>



                  </>

                )
              })
            }

          </tbody>

        </table>
      </div>        </div>
    );
};

export default EnrolledClass;