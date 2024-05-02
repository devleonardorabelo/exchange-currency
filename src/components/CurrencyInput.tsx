import { ArrowDown2, ArrowUp2, SearchNormal } from 'iconsax-react';
import { FC, useCallback, useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import OutsideClickHandler from 'react-outside-click-handler';
import Flag from 'react-world-flags';

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
  const [search, setSearch] = useState('');

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

  useEffect(() => {
    if (!isExpanded) setSearch('');
  }, [isExpanded]);

  const ExpandedIcon = () => {
    const Icon = isExpanded ? ArrowUp2 : ArrowDown2;
    return <Icon size={16} />;
  };

  const currencies = currencyList.filter((eachCurrency) =>
    eachCurrency.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`relative rounded-lg border p-2 border-gray-700 bg-gray-900 flex ${isFocused && 'border-blue-500'} ${isExpanded && 'rounded-b-none'}`}
    >
      <CurrencyFormat
        value={value}
        decimalSeparator="."
        thousandSeparator=","
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
            className="absolute -left-[1px] -right-[1px] top-10 bg-gray-800 border-gray-700 border rounded-b-lg flex flex-col max-h-72 overflow-auto z-10"
            data-testid="currency-input-list"
          >
            <div className="relative border-b border-b-gray-800">
              <SearchNormal
                className="absolute left-2 top-0 bottom-0 h-full"
                size={16}
              />
              <input
                type="text"
                className="grow outline-none bg-transparent p-2 pl-8"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {currencies.map(({ code, flag }) => (
              <button
                key={code}
                className="p-2 inline-flex items-center justify-between"
                onClick={() => handleOnSelectCurrency(code)}
              >
                <span>{code}</span>
                <Flag width={15} code={flag} />
              </button>
            ))}
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default CurrencyInput;
