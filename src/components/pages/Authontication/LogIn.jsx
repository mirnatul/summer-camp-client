import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import GoogleLogIn from './GoogleLogIn';

const LogIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { logIn } = useContext(AuthContext)
    const [errorMsg, setErrorMessage] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const [show, setShowing] = useState(false)

    const onSubmit = data => {
        const { email, password } = data
        logIn(email, password)
            .then(res => {
                const user = res.user
                navigate(from, { replace: true });
                reset()
            })
            .catch(error => {
                setErrorMessage(error.message)
            })
    };

    return (
        <div className="my-2 text-white">
            <div>
                <div className="text-center py-2">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card mx-auto w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <p className='text-error'>{errorMsg}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input {...register("email", { required: true })} required type="text" placeholder="email" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input className='input input-bordered text-black'
                                type={show ? `text` : `password`}
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
                            <p className='absolute right-2 top-14 text-slate-800'> {show ? <FaRegEyeSlash onClick={() => setShowing(false)}></FaRegEyeSlash> : <FaRegEye onClick={() => setShowing(true)}></FaRegEye>}</p>
                            {errors.password && <p className='text-error'>{errors.password.message}</p>}
                        </div>
                        <div className="form-control mt-6 flex p-3 items-center justify-center bg-green-600 text-black font-bold">
                            <button>Login</button>
                        </div>
                        <GoogleLogIn></GoogleLogIn>
                        <p className='mt-2'>New to summerSports? <Link to="/register" className='btn-link text-black'>Register Now!</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;