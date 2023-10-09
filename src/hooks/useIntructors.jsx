import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useIntructors = () => {
    const { isLoading, error, data : instructor = [], refetch } = useQuery({
        queryKey: ['instructor'],
        queryFn: () =>
          fetch('https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/popularInstructors').then(
            (res) => res.json(),
          ),
      })


      return [instructor, refetch]
};

export default useIntructors;