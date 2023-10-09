import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClasses = () => {
    const { isLoading, error, data : classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: () =>
          fetch('https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/classes').then(
            (res) => res.json(),
          ),
      })


      return [classes, refetch]
};

export default useClasses;