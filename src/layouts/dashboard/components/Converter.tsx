import { ArrangeHorizontal } from 'iconsax-react';
import { useEffect, useMemo, useState } from 'react';

import { useGetPairConversion } from '../../../api/hooks';
import CurrencyInput from '../../../components/CurrencyInput';
import { currencyList } from '../../../utils';

const Converter = () => {
  const [baseCurrency, setBaseCurrency] = useState('BRL');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [baseValue, setBaseValue] = useState(1);
  const [targetValue, setTargetValue] = useState(0);

  const { data, error } = useGetPairConversion({
    base: baseCurrency,
    target: targetCurrency,
  });

  const baseCurrencyInfo = useMemo(
    () => currencyList.find((currency) => currency.code === baseCurrency),
    [baseCurrency]
  );

  const targetCurrencyInfo = useMemo(
    () => currencyList.find((currency) => currency.code === targetCurrency),
    [targetCurrency]
  );

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

  const onSwapCurrencies = () => {
    setBaseCurrency(targetCurrency);
    setBaseValue(targetValue);
    setTargetCurrency(baseCurrency);
    setTargetValue(baseValue);
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

  if (error) return <div>error</div>;

  return (
    <div className="bg-gray-900 text-gray-200 p-2 flex flex-col gap-8">
      <span className="text-xl font-semibold">Exchange Rate</span>
      <div>
        <div className="inline-flex flex-col gap-4">
          <CurrencyInput
            onSelectCurrency={(newCurrency) =>
              onSelectCurrency(newCurrency, 'base')
            }
            currency={baseCurrency}
            onChangeValue={onChangeBaseValue}
            value={baseValue}
          />
          <div className="flex items-center">
            <span className="h-[1px] grow bg-slate-800" />
            <button
              className="bg-blue-700 h-10 w-10 rounded-full flex justify-center items-center"
              onClick={onSwapCurrencies}
            >
              <ArrangeHorizontal size={20} />
            </button>
            <span className="h-[1px] grow bg-slate-800" />
          </div>
          <CurrencyInput
            onSelectCurrency={(newCurrency) =>
              onSelectCurrency(newCurrency, 'target')
            }
            currency={targetCurrency}
            onChangeValue={onChangeTargetValue}
            value={targetValue}
          />
        </div>
      </div>
      {baseCurrencyInfo && targetCurrencyInfo && (
        <div>
          <div className="inline-flex flex-col border-y border-gray-800 py-4">
            <span className="text-gray-400">
              1 {baseCurrencyInfo.name} equals
            </span>
            <span>
              <span className="text-2xl font-semibold mr-2">{1 * rate}</span>
              <span className="text-gray-400">{targetCurrencyInfo.name}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Converter;