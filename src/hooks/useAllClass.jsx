import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAllClass = () => {
    const { isLoading, error, data : allClass = [], refetch } = useQuery({
        queryKey: ['allClass'],
        queryFn: () =>
          fetch('https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/allClasses').then(
            (res) => res.json(),
          ),
      })


      return [allClass, refetch]
};

export default useAllClass;