import { useQuery } from '@tanstack/react-query';
import React from 'react';

const usePopularClasses = () => {
  const { isLoading, error, data: popularClasses = [], refetch } = useQuery({
    queryKey: ['popularClasses'],
    queryFn: () =>
      fetch('http://localhost:5000/popularClasses').then(
        (res) => res.json(),
      ),
  })


  return [popularClasses, refetch]
};

export default usePopularClasses;