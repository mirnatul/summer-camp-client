import { useQuery } from '@tanstack/react-query';
import React from 'react';

const usePopularClasses = () => {
  const { isLoading, error, data: popularClasses = [], refetch } = useQuery({
    queryKey: ['popularClasses'],
    queryFn: () =>
      fetch('https://summer-camp-server-lime-gamma.vercel.app/popularClasses').then(
        (res) => res.json(),
      ),
  })


  return [popularClasses, refetch]
};

export default usePopularClasses;