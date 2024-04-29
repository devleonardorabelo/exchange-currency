import { useQuery } from '@tanstack/react-query';

import { getPairConversion } from '../resources';

const useGetPairConversion = ({
  base,
  target,
}: {
  base: string;
  target: string;
}) => {
  const { data, ...rest } = useQuery({
    queryKey: ['pairConversion', base, target],
    queryFn: () => getPairConversion(base, target),
  });

  return {
    data: data?.data,
    ...rest,
  };
};

export default useGetPairConversion;
