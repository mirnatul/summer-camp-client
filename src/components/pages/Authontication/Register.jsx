import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';
import GoogleLogIn from './GoogleLogIn';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [error, errorMessage] = useState('')
    const { user, signUp, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()


   

    const onSubmit = data => {







        if (data.password !== data.ConfirmPassword) {


            return errorMessage('Passwords do not match')





        }



        const { name, Email, password, photo } = data




        signUp(Email, password)
            .then(res => {

                const registered = res.user


                updateProfile(registered, {

                    displayName: name,
                    photoURL: photo
                })


                navigate('/')



                const data = {
                    name: name, image: photo, email: registered.email,
                    role : 'student'
                }


                axios.post('https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/users', data)
                    .then(function (response) {
                        console.log(response);
                        reset()
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })

            .catch(err => {

                console.log(err);
        
            })
            .catch(err => {

                console.log(err);
            })



















    };
    console.log(errors);

    return (
        <div>
            <div className="my-10   ">
                <div className=" ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Register now to enjoy our all features!</p>
                    </div>
                    <div className="card mx-auto w-full max-w-sm shadow-lg bg-base-100">
                        <p className='text-error'>{error}</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} required type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("Email", { required: true })} required type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input className='input input-bordered'
                                    type="password"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters",
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                            message: "Password must contain at least one capital letter and one special character",
                                        },
                                    })}
                                />

                                {errors.password && <p className='text-error'>{errors.password.message}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input className='input input-bordered'
                                    type="password"
                                    placeholder="Confirm Password"
                                    {...register("ConfirmPassword", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters",
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                            message: "Password must contain at least one capital letter and one special character",
                                        },
                                    })}
                                />
                                {errors.ConfirmPassword && <p className='text-error'>{errors.ConfirmPassword.message}</p>}


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photo")} type="text" placeholder='URL' className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="button-primary">Create an account</button>
                            </div>

                        </form>

                       <div className='p-5 space-y-5'>

                       <GoogleLogIn></GoogleLogIn>


<p>Already have an account? <Link to="/logIn" className='btn-link'>Log In Now</Link></p>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;