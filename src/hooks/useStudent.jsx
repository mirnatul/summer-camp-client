import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useStudent = () => {
    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem('access_token')
    const [axiosSecure] = useAxiosSecure();


    
    const { isLoading: isStudentLoading, error, data : IsStudent , refetch } = useQuery({
        queryKey: ['IsStudent', user?.email ],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user?.email}`);
            return res.data.student;
        }
      })


      return [IsStudent, isStudentLoading]
};

export default useStudent;