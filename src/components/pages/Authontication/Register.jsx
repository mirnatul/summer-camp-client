import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';
import GoogleLogIn from './GoogleLogIn';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [error, errorMessage] = useState('')
    const { signUp } = useContext(AuthContext)
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
                    role: 'student'
                }
                axios.post('https://summer-camp-server-lime-gamma.vercel.app/users', data)
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

    return (
        <div>
            <div className="my-2 text-white">
                <div className=" ">
                    <div className="text-center py-2">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                    </div>
                    <div className="card mx-auto w-full max-w-sm shadow-2xl">
                        <p className='text-error'>{error}</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input {...register("name", { required: true })} required type="text" placeholder="Name" className="input input-bordered text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input {...register("Email", { required: true })} required type="text" placeholder="email" className="input input-bordered text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input className='input input-bordered text-black'
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
                                    <span className="label-text text-white">Confirm Password</span>
                                </label>
                                <input className='input input-bordered text-black'
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
                                    <span className="label-text text-white">Photo URL</span>
                                </label>
                                <input {...register("photo")} type="text" placeholder='URL' className="input input-bordered w-full max-w-xs text-black" />
                            </div>
                            <button className="btn form-control mt-6 flex p-3 items-center justify-center bg-green-600 hover:bg-green-600 text-black font-bold border-green-600 text-white">
                                Create an Account
                            </button>
                            <GoogleLogIn></GoogleLogIn>
                            <p className='mt-2'>Already have an account? <Link to="/logIn" className='btn-link text-black'>Log In Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;