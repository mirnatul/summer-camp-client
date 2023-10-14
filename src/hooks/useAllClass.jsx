import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAllClass = () => {
  const { isLoading, error, data: allClass = [], refetch } = useQuery({
    queryKey: ['allClass'],
    queryFn: () =>
      fetch('http://localhost:5000/allClasses').then(
        (res) => res.json(),
      ),
  })


  return [allClass, refetch]
};

export default useAllClass;