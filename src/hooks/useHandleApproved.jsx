import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useHandleApproved = () => {
  const { isLoading, error, data: classInfo, refetch } = useQuery({
    queryKey: ['classInfo'],
    queryFn: () =>
      fetch(`https://summer-camp-server-lime-gamma.vercel.app/adminClasses`)
        .then(
          (res) => res.json(),
        ),
  })


  return [classInfo, refetch]
};

export default useHandleApproved;