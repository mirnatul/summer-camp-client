import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useRecentUser = () => {


  const { user } = useContext(AuthContext)
  const { isLoading, error, data: recentUser, refetch } = useQuery({
    queryKey: ['recentUser', user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/users/${user?.email}`)
        .then(
          (res) => res.json(),
        ),



  })


  return [recentUser, refetch]
};

export default useRecentUser;