import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem('access_token')
    const [axiosSecure] = useAxiosSecure();


    
    const { isLoading: isInstructorLoading, error, data : Isinstructor , refetch } = useQuery({
        queryKey: ['Isinstructor', user?.email ],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }
      })


      return [Isinstructor, isInstructorLoading]
};

export default useInstructor;