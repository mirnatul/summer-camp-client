import React from 'react';
import useUser from '../../../../hooks/useUser';
import useAdmin from '../../../../hooks/useAdmin';
import Swal from 'sweetalert2';

const ManageUsers = () => {


    const [userOne, refetch] = useUser()
    const [isAdmin] = useAdmin()




    const handleMakeAdmin = (id) => {


        fetch (`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/users/admin/${id}`, {

        method : 'PATCH'
        })
        .then (response => response.json())
        .then (data => {console.log(data)
        
        
        refetch()})





     }




     const handleMakeInstructor = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to make this an instructor?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {



                fetch (`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/users/instructor/${id}`, {

                method : 'PATCH'
                })
                .then (response => response.json())
                .then (data => {console.log(data)
                
                refetch()})
              Swal.fire(
                'User Role updated',
                'success'
              )
            }
          })

       





        
      }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>


                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {

                            userOne && userOne.map(userInfo => {

                                return (

                                    <tr>
                                        <th>

                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3 text-base-500">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={userInfo.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{userInfo?.name}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {userInfo.email}

                                        </td>
                                        <td>{userInfo.role}</td>
                                        <th className='flex'>
                                            <button onClick={() => handleMakeAdmin (userInfo._id)} className={` ${userInfo.role === 'admin' ? 'btn btn-disabled' : 'button-primary' }`}>Make Admin</button>
                                            <button onClick={() => handleMakeInstructor(userInfo._id)} className={` ${userInfo.role === 'instructor' ? ' btn btn-disabled' : 'button-primary' }`}>Make Instructor</button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                        {/* row 2 */}

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ManageUsers;