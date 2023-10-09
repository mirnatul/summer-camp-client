import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {

    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem('access_token')
    const [axiosSecure] = useAxiosSecure();

    

    
    const { isLoading: isAdminLoading, error, data : isAdmin , refetch } = useQuery({
        queryKey: ['isAdmin', user?.email ],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
          
      })


      return [isAdmin, isAdminLoading]
};

export default useAdmin;