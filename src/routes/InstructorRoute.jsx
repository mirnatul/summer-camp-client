import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { Navigate, useLocation } from 'react-router-dom';

const InstructorRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [IsInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && IsInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;