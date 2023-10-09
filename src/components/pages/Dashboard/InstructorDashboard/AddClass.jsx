import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../providers/AuthProvider';
import Swal from 'sweetalert2';



const img_hosting_token = import.meta.env.VITE_IMAGE_KEY;


const AddClass = () => {



    const image_key = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`



    const { register, handleSubmit, formState: { errors }, reset } = useForm();




    const {user} = useContext(AuthContext)
  const onSubmit = data => {

    const formData = new FormData();
        formData.append('image', data.classImage[0])

        fetch(image_key, {
            method: 'POST',
            body: formData
        })
        .then (res => res.json())
        .then (imgResponse => {
            if (imgResponse.success) {



                const imageURL = imgResponse.data.display_url

                const newItem =  {image : imageURL, name : data.classname, instructor : data.InstructorName, email : data.InstructorEmail, availableSeats : parseFloat(data.seats), price : parseFloat(data.price), status : 'pending', totalEnrolled : 0} 


                fetch (`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/classes`, {
                    method : 'POST',
                    headers: { 'Content-Type' : 'application/json'},

                    body: JSON.stringify(newItem)
                })
                .then (res => res.json())
                .then (data => {console.log(data)

                    if (data.insertedId) {



                        Swal.fire(
                            'Good job!',
                            'Your new item has been inserted successfully! Wait for feedback',
                            'success'
                          )
                    }


                    reset()
                
                
                
                })






             }
        })




};
  console.log(errors);
    return (
        <div className=''>
            <div className="card mx-auto lg:w-96 text-base-content shadow-lg bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input {...register("classname", { required: true })} required type="text" placeholder="Class Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input {...register("classImage", { required: true })} required type="file" placeholder="Class Image" className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input className='input input-bordered'
                                    type="text"
                                    value={user?.displayName}                                    placeholder="Instructor Name"
                                    {...register("InstructorName")}
                                />


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input className='input input-bordered'
                                    type="email"
                                    value={user?.email}
                                    placeholder="Instructor Email"
                                    {...register("InstructorEmail")}
                                />


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input {...register("seats")} type="number" placeholder='seats' className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input {...register("price")} type="number" placeholder='Price' className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="button-primary">Add Class</button>
                            </div>

                        </form>




                    </div>
        </div>
    );
};

export default AddClass;