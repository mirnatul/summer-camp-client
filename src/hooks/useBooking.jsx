import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useBooking = () => {


    const {user} = useContext(AuthContext)

    const { isLoading, error, data : booking = [], refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: () =>
          fetch(`https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/myBooking/${user?.email}`).then(
            (res) => res.json(),
          ),
      })


      return [booking, refetch]
};

export default useBooking;