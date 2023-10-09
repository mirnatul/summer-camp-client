import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useUser from '../../../hooks/useUser';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import useStudent from '../../../hooks/useStudent';
import { FaBookmark, FaChalkboardTeacher, FaCheck, FaCheckCircle, FaCog, FaCreditCard, FaEnvelope, FaGraduationCap, FaHome, FaPlusCircle, FaUser, FaUsers } from 'react-icons/fa';
import useRecentUser from '../../../hooks/useRecentUser';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin();
  const [Isinstructor] = useInstructor();
  const [IsStudent] = useStudent()
  

  const [userOne] = useUser();


  const [recentUser] = useRecentUser()

  return (
    

    <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-transparent">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 space-x-5"> 


      <img className='w-16 rounded-full' src={recentUser?.image} alt="" />
      <p className='font-bold'>{recentUser?.name}</p>
      <p className='badge badge-success text-white'>{recentUser?.role}</p>
      
      
      
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <>
              {isAdmin ? (
                <>
                  <li><Link to="/dashboard"> <FaHome></FaHome> User Home</Link></li>

                  <li>
                    <Link to="/dashboard/manageClasses"> <FaCog></FaCog> Manage Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manageUsers"> <FaUsers></FaUsers> Manage Users</Link>
                  </li>
                </>
              ) : Isinstructor ? (
                <>


                  <li><Link to="/dashboard"> <FaHome></FaHome> User Home</Link></li>

                  <li>


                    <Link to="/dashboard/addClass"> <FaPlusCircle></FaPlusCircle> Add A class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/instructorClass"> <FaGraduationCap></FaGraduationCap> My Classes</Link>
                  </li>
                </>
              ) : IsStudent ? (
                <>
                  <li><Link to="/dashboard"> <FaHome></FaHome> User Home</Link></li>

                  <li className='flex'>
                    <Link to="/dashboard/myClass"><FaCheckCircle></FaCheckCircle> My Selected Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myEnrolledClass"> <FaBookmark></FaBookmark>My Enrolled Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/paymentHistory"> <FaCreditCard></FaCreditCard> My Payment History</Link>
                  </li>
                </>
              )
                :

                <p>Loading.....</p>

              }
            </>
        </ul>
      </div>
    </div>
    {/* Page content here */}

    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-transparent">
      {/* Sidebar content here */}
      <>
              {isAdmin ? (
                <>
                  <h1 className='text-3xl font-bold'>Hello <span className='text-primary-content'>Admin</span></h1>
                  <li><Link to="/dashboard"> <FaHome></FaHome> User Home</Link></li>

                  <li>
                    <Link to="/dashboard/manageClasses"> <FaCog></FaCog> Manage Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manageUsers"> <FaUsers></FaUsers> Manage Users</Link>
                  </li>
                </>
              ) : Isinstructor ? (
                <>
                  <h1 className='text-3xl font-bold'>Hello <span className='text-primary-content'>Instructor</span></h1>


                  <li><Link to="/dashboard"> <FaHome></FaHome> User Home</Link></li>

                  <li>


                    <Link to="/dashboard/addClass"> <FaPlusCircle></FaPlusCircle> Add A class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/instructorClass"> <FaGraduationCap></FaGraduationCap> My Classes</Link>
                  </li>
                </>
              ) : IsStudent ? (
                <>
                  <h1 className='text-3xl font-bold'>Hello <span className='text-primary-content'>Student</span></h1>
                  <li><Link to="/dashboard"> <FaHome></FaHome> User Home</Link></li>

                  <li className='flex'>
                    <Link to="/dashboard/myClass"><FaCheckCircle></FaCheckCircle> My Selected Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myEnrolledClass"> <FaBookmark></FaBookmark>My Enrolled Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/paymentHistory"> <FaCreditCard></FaCreditCard> My Payment History</Link>
                  </li>
                </>
              )
                :

                <p>Loading.....</p>

              }
            </>
      
    </ul>
    
  </div>
</div>
  );
};

export default Dashboard;
