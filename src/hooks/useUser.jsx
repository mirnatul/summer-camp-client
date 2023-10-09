import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUser = () => {
    const { isLoading, error, data : userOne = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
          fetch('https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/users').then(
            (res) => res.json(),
          ),
      })


      return [userOne, refetch]
};

export default useUser;