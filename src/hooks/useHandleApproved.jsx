import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useHandleApproved = () => {
    const { isLoading, error, data : classInfo , refetch } = useQuery({
        queryKey: ['classInfo' ],
        queryFn: () =>
          fetch(`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/adminClasses`)
          .then(
            (res) => res.json(),
          ),
      })


      return [classInfo, refetch]
};

export default useHandleApproved;