import { FC, useCallback, useState } from 'react';
import CurrencyFormat from 'react-currency-format';

import currencyList from '../utils/currencyList';
interface Props {
  value: number;
  currency: string;
  onSelectCurrency: (currency: string) => void;
  onChangeValue: (value: number) => void;
}

const CurrencyInput: FC<Props> = ({
  value,
  currency,
  onSelectCurrency,
  onChangeValue,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnChangeValue = useCallback(
    (values: CurrencyFormat.Values) => {
      let newValue = values.floatValue;
      if (!values.value) newValue = 0;
      onChangeValue(newValue);
    },
    [onChangeValue]
  );

  const handleOnSelectCurrency = useCallback(
    (selectedCurrency: string) => {
      setIsExpanded(false);
      onSelectCurrency(selectedCurrency);
    },
    [onSelectCurrency]
  );

  return (
    <div className="relative rounded-lg border border-gray-700 flex py-1 px-2">
      <CurrencyFormat
        value={value}
        decimalSeparator=","
        thousandSeparator="."
        decimalScale={2}
        onValueChange={handleOnChangeValue}
        className="grow outline-none bg-transparent"
      />
      <button
        className="h-8 inline-block"
        onClick={() => setIsExpanded((previousState) => !previousState)}
        data-testid="currency-input"
      >
        {currency}
      </button>
      {isExpanded && (
        <div
          className="absolute left-0 top-8 bg-white border-gray-400 flex flex-col max-h-72 overflow-auto"
          data-testid="currency-input-list"
        >
          {currencyList.map(({ code }) => (
            <button
              key={code}
              className="py-4 px-6"
              onClick={() => handleOnSelectCurrency(code)}
            >
              {code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyInput;
