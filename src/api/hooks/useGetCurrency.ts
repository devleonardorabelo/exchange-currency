import { useQuery } from '@tanstack/react-query';

import { getCurrency } from '../resources';

const useGetCurrency = (code: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ['currency', code],
    queryFn: () => getCurrency(code),
  });

  return {
    data: data?.data,
    ...rest,
  };
};

export default useGetCurrency;
