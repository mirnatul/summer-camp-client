import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { HiBars3, HiXMark } from "react-icons/hi2";
import ActiveLink from './ActiveLink';
import mainLogo from './../../assets/mainLogo.webp'
// import testLogo from './../../assets/testLogo.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogOut = () => {
        logOut()
            .then(res => {
                navigate('/')

            })
            .catch(err => {

                console.log(err);
            })
    }
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    return (
        <div className='bg-[#007057] px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8'>
            <div className='relative  flex items-center justify-between'>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <img className='w-8 lg:w-14' src={mainLogo} alt="" />
                        <p className='italic text-white'>
                            <span className='text-xl lg:text-3xl font-semibold text-slate-300'>Summer</span>
                            <span className='font-bold text-xl lg:text-4xl'>Sports</span>
                        </p>
                    </div>
                </Link>

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-8 lg:flex font-bold text-white'>
                    <li>
                        <ActiveLink to="/">Home</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to="/instructor">Instructor</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to="/classes">Classes</ActiveLink>
                    </li>
                    {user ?
                        <>
                            <li><ActiveLink to="/dashboard">Dashboard</ActiveLink></li>
                            <p className="hidden lg:block">{user?.displayName}</p>
                            <div className="w-10 rounded-full hidden lg:block">
                                <img className="rounded-full  object-cover" src={user?.photoURL} alt="" />
                            </div>
                            <button onClick={handleLogOut} className="button-primary">
                                Log Out
                            </button>
                        </>
                        : (
                            <ActiveLink className="button-primary" to="/logIn">
                                <button>Log In</button>
                            </ActiveLink>
                        )}

                    <div className="flex-none">
                        {/* Toggle button here */}
                        <button className="btn btn-square btn-ghost">
                            <label className="swap swap-rotate w-12 h-12">
                                <input
                                    type="checkbox"
                                    onChange={handleToggle}
                                    // show toggle image based on localstorage theme
                                    checked={theme === "light" ? false : true}
                                />            {/* light theme sun image */}
                                <FaSun alt="light" className="w-8 h-8 swap-on" />
                                {/* dark theme moon image */}
                                <FaMoon alt="dark" className="w-8 h-8 swap-off" />
                            </label>
                        </button>
                    </div>
                </ul>


                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <HiBars3 size={32} className='text-white' />
                    </button>
                    {isMenuOpen && (
                        <div className='top-0 left-0 w-full z-10 fixed'>
                            <div className='p-5 bg-[#007057] border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <ActiveLink to='/' className='inline-flex items-center'>
                                            <div className='flex gap-2 mb-4'>
                                                <img className='w-8' src={mainLogo} alt="" />
                                                <p className='italic text-white'>
                                                    <span className='text-xl lg:text-3xl font-semibold text-slate-300'>Summer</span>
                                                    <span className='font-bold text-2xl lg:text-4xl'>Sports</span>
                                                </p>
                                            </div>
                                        </ActiveLink>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <HiXMark size={32} className='text-white' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4 font-semibold text-white'>
                                        <li>
                                            <ActiveLink to="/">Home</ActiveLink>
                                        </li>
                                        <li>
                                            <ActiveLink to="/instructor">Instructor</ActiveLink>
                                        </li>
                                        <li>
                                            <ActiveLink to="/classes">Classes</ActiveLink>
                                        </li>
                                        {user ?
                                            <>
                                                <li><ActiveLink to="/dashboard">Dashboard</ActiveLink></li>
                                                <p className=" lg:block">{user?.displayName}</p>
                                                <div className="w-10 rounded-full  lg:block">
                                                    <img className="rounded-full w-32 h-32" src={user?.photoURL} alt="" />
                                                </div>
                                                <button onClick={handleLogOut} className="button-primary">
                                                    Log Out
                                                </button>
                                            </>
                                            : (
                                                <ActiveLink className="button-primary" to="/logIn">
                                                    <button>Log In</button>
                                                </ActiveLink>
                                            )}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Navbar;