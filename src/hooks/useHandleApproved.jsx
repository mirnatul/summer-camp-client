import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useHandleApproved = () => {
  const { isLoading, error, data: classInfo, refetch } = useQuery({
    queryKey: ['classInfo'],
    queryFn: () =>
      fetch(`http://localhost:5000/adminClasses`)
        .then(
          (res) => res.json(),
        ),
  })


  return [classInfo, refetch]
};

export default useHandleApproved;