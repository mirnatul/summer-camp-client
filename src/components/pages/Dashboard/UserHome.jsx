import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useUser from '../../../hooks/useUser';
import { FaEnvelope, FaHome, FaMars, FaPenAlt, FaPenFancy, FaPhoneAlt, FaUser, FaUserCheck, FaUsers } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import useRecentUser from '../../../hooks/useRecentUser';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_IMAGE_KEY;


const UserHome = () => {

  const image_key = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [recentUser, refetch] = useRecentUser()
  const { user, updateUserProile } = useContext(AuthContext)



  const onSubmit = data => {
    const updatedData = {
      name: data.name,
      image: data.image,
      phoneNumber: data.Phone,
      address: data.address,
      gender: data.Gender,
    };
  
  
    fetch(`https://dramatix-lab-server.vercel.app/users/${recentUser?.email}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    })
      .then(res => res.json())
      .then(data => {console.log(data)


        Swal.fire(
          
          'Profile updated successfully',
          'success'
        )

        refetch()
      
      
      });
  };
  






  

























  return (
    <div className='mx-auto text-center lg: my-10'>


      <div className='card card-bordered '>

        <div className='card-body'>

          <img className='mx-auto avatar rounded-full w-20' src={recentUser?.image} alt="" />
          <p className='badge badge-success text-white'>{recentUser?.role}</p>


          <div className='space-y-2 '>


            <h1 className=' font-bold flex items-center'> <FaUser className='text-indigo-300 mr-2'></FaUser> Name  : {recentUser?.name}</h1>
            <p className=' font-semibold flex items-center'> <FaEnvelope className='text-indigo-300 mr-2'></FaEnvelope>Email : {recentUser?.email}</p>
            <p className='flex items-center'> <FaPhoneAlt className='text-indigo-300 mr-2'></FaPhoneAlt> Phone : {recentUser?.PhoneNumber} </p>

            <p className='flex items-center'> <FaHome className='text-indigo-300 mr-2'></FaHome> Address : {recentUser?.Address} </p>
            <p className='flex items-center'> <FaMars className='text-indigo-300 mr-2'></FaMars> Gender : {recentUser?.Gender} </p>

            <label htmlFor="my_modal_6" className="btn btn-success text-white">Update Profile</label>
          </div>
        </div>

      </div>




      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input type="text" {...register("image")} placeholder="URL" defaultValue={recentUser?.image} className="input input-bordered w-full max-w-xs" />

            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name")} placeholder="Name" defaultValue={recentUser?.name} className="input input-bordered w-full max-w-xs" />

            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="Type here" value={recentUser?.email} className="input input-bordered w-full max-w-xs" />

            </div>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone No</span>
              </label>
              <input {...register("Phone")} type="number" placeholder="Type here" defaultValue={recentUser?.PhoneNumber} className="input input-bordered w-full max-w-xs" />

            </div>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea {...register("address")} type="text" placeholder="Type here" defaultValue={recentUser?.Address} className="input input-bordered w-full max-w-xs" />

            </div>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>

              <div className="flex items-center space-x-2">
                <input
                  {...register("Gender")}
                  type="radio"
                  value="Male"
                  defaultChecked
                  className="radio radio-success"
                  id="male"
                />
                <label htmlFor="male" className="cursor-pointer">Male</label>

                <input
                  {...register("Gender")}
                  type="radio"
                  value="Female"
                  className="radio radio-success"
                  id="female"
                />
                <label htmlFor="female" className="cursor-pointer">Female</label>
              </div>
            </div>


            <input type="submit" className='btn btn-success text-white' />








            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn">Close!</label>
            </div>
          </form>
        </div>
      </div>
      {/* You can open the modal using ID.showModal() method */}
      {/* <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <img className='mx-auto avatar rounded-full' src={user?.photoURL} alt="" />


          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Type here" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />

          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Type here" value={user?.email} className="input input-bordered w-full max-w-xs" />

          </div>

          <button className='btn btn-success text-white mt-5 mx-auto'>Submit</button>
        </form>
      </dialog> */}
    </div>
  );
};

export default UserHome;