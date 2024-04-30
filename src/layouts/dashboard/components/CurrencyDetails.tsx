import { ArrowUp, ArrowDown, Minus, Icon } from 'iconsax-react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Flag from 'react-world-flags';
import colors from 'tailwindcss/colors';

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
    const currencies = Object.keys(data.conversion_rates).splice(1);

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

  const renderArrowIndicator = (rate: number) => {
    let Indicator: {
      Icon: Icon;
      color: string;
    } = {
      Icon: ArrowUp,
      color: colors.green[700],
    };

    if (rate < 1)
      Indicator = {
        Icon: ArrowDown,
        color: colors.orange[700],
      };
    if (rate === 1)
      Indicator = {
        Icon: Minus,
        color: colors.gray[700],
      };

    return <Indicator.Icon size={12} color={Indicator.color} />;
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="px-4 pt-4 flex justify-between">
        <div>
          <span className="text-3xl font-medium">
            {currentCurrency.currency}{' '}
            <span className="text-gray-700">{currentCurrency.symbol}</span>
          </span>
          <div className="flex gap-2">
            <Flag code={currentCurrency.info?.flag} height={15} width={20} />
            <span>{currentCurrency.info?.country}</span>
          </div>
        </div>
        <div>
          <span className="text-xs text-gray-500">
            {data?.time_last_update_utc}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-2 overflow-auto p-4">
        {data &&
          conversionRates.map(({ currency, value, info, symbol }) => (
            <span
              className="border border-gray-700 rounded p-2 flex flex-col bg-gray-800"
              key={currency}
            >
              <div className="flex justify-between">
                <span className="text-xs text-gray-400 font-bold flex items-center gap-1">
                  <span className="-ml-0.5">{renderArrowIndicator(value)}</span>{' '}
                  {currency}
                </span>
                {info && <Flag code={info.flag} height={10} width={15} />}
              </div>
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
