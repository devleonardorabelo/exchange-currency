import { useEffect, useState } from 'react';

import { useGetPairConversion } from '../../api/hooks';
import CurrencyInput from '../../components/CurrencyInput';

const Dashboard = () => {
  const [baseCurrency, setBaseCurrency] = useState('BRL');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [baseValue, setBaseValue] = useState(1);
  const [targetValue, setTargetValue] = useState(0);

  const { data, isLoading, error } = useGetPairConversion({
    base: baseCurrency,
    target: targetCurrency,
  });

  const rate = data?.conversion_rate ?? 1;

  const onChangeBaseValue = (newValue: number) => {
    setTargetValue(newValue * rate);
    setBaseValue(newValue);
  };

  const onChangeTargetValue = (newValue: number) => {
    setBaseValue(newValue / rate);
    setTargetValue(newValue);
  };

  const onSelectCurrency = (currency: string, type: 'base' | 'target') => {
    if (type === 'base') {
      setBaseCurrency(currency);
      setTargetValue(0);
    }
    if (type === 'target') {
      setTargetCurrency(currency);
      setTargetValue(0);
    }
  };

  useEffect(() => {
    if (!data) return;
    if (baseValue === 0) {
      setBaseValue(targetValue / data.conversion_rate);
    }
    if (targetValue === 0) {
      setTargetValue(baseValue * data.conversion_rate);
    }
  }, [baseValue, data, targetValue]);

  if (isLoading) return <div>loading</div>;

  if (error) return <div>error</div>;

  return (
    <div className="bg-gray-900 text-gray-200 h-screen">
      <div className="flex">
        <CurrencyInput
          onSelectCurrency={(newCurrency) =>
            onSelectCurrency(newCurrency, 'base')
          }
          currency={baseCurrency}
          onChangeValue={onChangeBaseValue}
          value={baseValue}
        />
        <CurrencyInput
          onSelectCurrency={(newCurrency) =>
            onSelectCurrency(newCurrency, 'target')
          }
          currency={targetCurrency}
          onChangeValue={onChangeTargetValue}
          value={targetValue}
        />
      </div>
      {data && <div>{data.conversion_rate}</div>}
    </div>
  );
};

export default Dashboard;
