import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAllClass = () => {
  const { isLoading, error, data: allClass = [], refetch } = useQuery({
    queryKey: ['allClass'],
    queryFn: () =>
      fetch('https://summer-camp-server-lime-gamma.vercel.app/allClasses').then(
        (res) => res.json(),
      ),
  })


  return [allClass, refetch]
};

export default useAllClass;