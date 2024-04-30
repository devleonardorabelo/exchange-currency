import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useGetCurrency } from '../../../api/hooks';
import { RootState } from '../../../store';
import { CurrencyDetail } from '../../../types';
import { currencyList, getCurrencySymbol } from '../../../utils';

const CurrencyDetails = () => {
  const currentCurrency = useSelector(
    (state: RootState) => state.currencyDetailSlice.currentCurrency
  );

  const { data } = useGetCurrency(currentCurrency.currency);

  const conversionRates = useMemo(() => {
    if (!data) return [];
    const conversionRatesList: CurrencyDetail[] = [];
    const currencies = Object.keys(data.conversion_rates);

    for (const currency of currencies) {
      conversionRatesList.push({
        currency,
        symbol: getCurrencySymbol('en-US', currency),
        value: data.conversion_rates[currency],
        info: currencyList.find(
          (eachCurrency) => eachCurrency.code === currency
        ),
      });
    }
    return conversionRatesList;
  }, [data]);

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="px-4 pt-4">
        <span className="text-3xl font-medium">{currentCurrency.currency}</span>
      </div>
      <div className="flex flex-wrap w-full gap-2 overflow-auto p-4">
        {data &&
          conversionRates.map(({ currency, value, info, symbol }) => (
            <span
              className="border border-gray-700 rounded p-2 flex flex-col bg-gray-800"
              key={currency}
            >
              <span className="text-xs text-gray-400 font-bold">
                {currency}
              </span>
              {info && (
                <span className="text-xs text-gray-400">{info.country}</span>
              )}
              {symbol} {value}
            </span>
          ))}
      </div>
    </div>
  );
};

export default CurrencyDetails;
