import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import GoogleLogIn from './GoogleLogIn';

const LogIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {logIn, googleLogin} = useContext(AuthContext)
    const [errorMsg, setErrorMessage] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";



    const [show, setShowing] = useState(false)


   

    const onSubmit = data => {
        


        const {email, password} = data

        logIn (email, password)
        .then (res => {

            const user = res.user

            navigate(from, { replace: true });

            reset()
        
        })
        .catch (error => {


            setErrorMessage(error.message)


        })
    
    
    };
    console.log(errors);
    return (
        <div className="my-10  ">
            <div className=" ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Log In now to enjoy our all features!</p>
                </div>
                <div className="card mx-auto w-full max-w-sm shadow-lg bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <p className='text-error'>{errorMsg}</p>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })}  required type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input className='input input-bordered'
                                    type= {show ? `text` : `password`}
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


                                <p className='absolute right-2 top-14'> {show ? <FaRegEyeSlash onClick={() =>setShowing(false)}></FaRegEyeSlash> : <FaRegEye onClick={() => setShowing (true)}></FaRegEye>}
                                
                                
                                
                                
                                </p>

                                {errors.password && <p className='text-error'>{errors.password.message}</p>}

                            </div>
                        <div className="form-control mt-6">
                            <button className="button-primary">Login</button>
                        </div>
                        <GoogleLogIn></GoogleLogIn>


                        <p>New to DramatixLab? <Link to = "/register" className='btn-link'>Register Now</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;