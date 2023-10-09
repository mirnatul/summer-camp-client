import React, { useContext } from 'react';
import useStudent from '../hooks/useStudent';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const StudentRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [IsStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if(loading || isStudentLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && IsStudent) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;