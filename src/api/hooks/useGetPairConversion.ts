import { useQuery } from '@tanstack/react-query';

import { getPairConversion } from '../resources';

const useGetPairConversion = ({ from, to }: { from: string; to: string }) => {
  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryKey: ['pairConversion', from, to],
    queryFn: () => getPairConversion(from, to),
  });

  return {
    data: data?.data,
    isFetching,
    isLoading,
    error,
    refetch,
  };
};

export default useGetPairConversion;
