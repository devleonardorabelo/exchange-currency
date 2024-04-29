import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import { FC, useCallback, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import OutsideClickHandler from 'react-outside-click-handler';

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
  const [isFocused, setIsFocused] = useState(false);

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

  const ExpandedIcon = () => {
    const Icon = isExpanded ? ArrowUp2 : ArrowDown2;
    return <Icon size={16} />;
  };

  return (
    <div
      className={`relative rounded-lg border p-2 border-gray-700 bg-gray-900 flex ${isFocused && 'border-blue-500'} ${isExpanded && 'rounded-b-none'}`}
    >
      <CurrencyFormat
        value={value}
        decimalSeparator="."
        thousandSeparator=","
        decimalScale={2}
        onValueChange={handleOnChangeValue}
        className="grow outline-none bg-transparent"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button
        className="border-l pl-2 border-gray-700 flex items-center gap-1"
        onClick={() => setIsExpanded((previousState) => !previousState)}
        data-testid="currency-input"
      >
        {currency}
        <ExpandedIcon />
      </button>
      {isExpanded && (
        <OutsideClickHandler onOutsideClick={() => setIsExpanded(false)}>
          <div
            className="absolute -left-[1px] -right-[1px] top-10 bg-gray-900 border-gray-700 border rounded-b-lg flex flex-col max-h-72 overflow-auto z-10"
            data-testid="currency-input-list"
          >
            {currencyList.map(({ code }) => (
              <button
                key={code}
                className="p-2 inline-block text-start"
                onClick={() => handleOnSelectCurrency(code)}
              >
                {code}
              </button>
            ))}
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default CurrencyInput;
