import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUser = () => {
  const { isLoading, error, data: userOne = [], refetch } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      fetch('https://summer-camp-server-lime-gamma.vercel.app/users').then(
        (res) => res.json(),
      ),
  })


  return [userOne, refetch]
};

export default useUser;