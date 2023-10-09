import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import ErrorPage from '../components/shared/ErrorPage';
import Home from '../components/pages/Home/Home';
import LogIn from '../components/pages/Authontication/LogIn';
import Register from '../components/pages/Authontication/Register';
import Instructors from '../components/pages/Instructors/Instructors';
import AllLabClasses from '../components/pages/LabClasses/AllLabClasses';
import Dashboard from '../components/pages/Dashboard/Dashboard';
import MyBooking from '../components/pages/Dashboard/UserDashboard/MyBooking';
import ManageUsers from '../components/pages/Dashboard/Admindashboard/ManageUsers';
import AddClass from '../components/pages/Dashboard/InstructorDashboard/AddClass';
import ManageClass from '../components/pages/Dashboard/Admindashboard/ManageClass';
import InstructorMyClass from '../components/pages/Dashboard/InstructorDashboard/InstructorMyClass';
import Payment from '../components/pages/Dashboard/UserDashboard/Payment/Payment';
import EnrolledClass from '../components/pages/Dashboard/UserDashboard/EnrolledClass';
import MyPaymentHistory from '../components/pages/Dashboard/UserDashboard/MyPaymentHistory';
import AdminRoute from './AdminRoute';
import InstructorRoute from './InstructorRoute';
import StudentRoute from './StudentRoute';
import UserHome from '../components/pages/Dashboard/UserHome';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/instructor",
        element: <Instructors></Instructors>
      },
      {
        path: "/classes",
        element: <AllLabClasses></AllLabClasses>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,

        children: [
          {
            path: "/dashboard",
            element: <UserHome></UserHome>
          },
          {
            path: 'myClass',
            element: <StudentRoute><MyBooking></MyBooking></StudentRoute>
          },
          {
            path: 'manageUsers',
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },
          {
            path: 'addClass',
            element: <InstructorRoute><AddClass></AddClass></InstructorRoute>

          },
          {
            path: 'manageClasses',
            element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
          },
          {
            path: 'instructorClass',
            element: <InstructorRoute><InstructorMyClass></InstructorMyClass></InstructorRoute>
          },
          {
            path: 'payment/:id',
            loader: ({ params }) => fetch(`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/dashboard/payment/${params.id}`),
            element: <Payment></Payment>
          },
          {
            path: 'myEnrolledClass',
            element: <StudentRoute><EnrolledClass></EnrolledClass></StudentRoute>
          },
          {
            path: 'paymentHistory',
            element: <StudentRoute><MyPaymentHistory></MyPaymentHistory></StudentRoute>
          }
        ]
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);