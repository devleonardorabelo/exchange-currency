import { FC, useCallback, useState } from 'react';

import currencyList from '../utils/currencyList';

interface Props {
  value: string;
  onSelect: (currency: string) => void;
}

const CurrencyInput: FC<Props> = ({ value, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onSelectCurrency = useCallback(
    (currency: string) => {
      setIsExpanded(false);
      onSelect(currency);
    },
    [onSelect]
  );

  return (
    <div className="relative rounded border border-gray-400">
      <button
        className="h-8 w-full"
        onClick={() => setIsExpanded((previousState) => !previousState)}
        data-testid="currency-input"
      >
        {value}
      </button>
      {isExpanded && (
        <div
          className="absolute left-0 top-8 bg-white border-gray-400 flex flex-col max-h-72 overflow-auto"
          data-testid="currency-input-list"
        >
          {currencyList.map((currency) => (
            <button
              key={currency.code}
              className="py-4 px-6"
              onClick={() => onSelectCurrency(currency.code)}
            >
              {currency.code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyInput;
