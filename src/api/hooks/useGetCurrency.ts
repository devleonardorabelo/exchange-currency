import { useQuery } from '@tanstack/react-query';

import { getCurrency } from '../resources';

const useGetCurrency = (code: string) => {
  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryKey: ['currency', code],
    queryFn: () => getCurrency(code),
  });

  return {
    data: data?.data,
    isFetching,
    isLoading,
    error,
    refetch,
  };
};

export default useGetCurrency;
