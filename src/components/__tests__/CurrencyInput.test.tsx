import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import { currencyList } from '../../utils';
import CurrencyInput from '../CurrencyInput';

describe('<CurrencyInput />', () => {
  test('renders CurrencyInput with default value', () => {
    const onSelectMock = jest.fn();
    const onChangeValue = jest.fn();

    const currency = 'USD';
    const { getByTestId } = render(
      <CurrencyInput
        currency={currency}
        onSelectCurrency={onSelectMock}
        onChangeValue={onChangeValue}
        value={0}
      />
    );
    const button = getByTestId('currency-input');
    expect(button).toBeInTheDocument();
  });

  test('renders currency input list when expanded', () => {
    const currency = 'USD';
    const onSelectMock = jest.fn();
    const onChangeValue = jest.fn();

    const { getByTestId, queryByTestId } = render(
      <CurrencyInput
        currency={currency}
        onSelectCurrency={onSelectMock}
        onChangeValue={onChangeValue}
        value={0}
      />
    );

    const currencyInput = getByTestId('currency-input');

    // check if currency input exists
    expect(currencyInput).toBeInTheDocument();

    // check if currency list is not expanded
    expect(
      queryByTestId('currency-input-list', { exact: false })
    ).not.toBeInTheDocument();

    fireEvent.click(currencyInput);

    const currencyInputList = getByTestId('currency-input-list');

    // check if currency list is expanded after click
    expect(currencyInputList).toBeInTheDocument();
  });

  test('changes value when another currency is selected', () => {
    const initialValue = 'USD';
    const onSelectMock = jest.fn();
    const onChangeValue = jest.fn();

    const { getByTestId, rerender } = render(
      <CurrencyInput
        currency={initialValue}
        onSelectCurrency={onSelectMock}
        onChangeValue={onChangeValue}
        value={0}
      />
    );

    const currencyInput = getByTestId('currency-input');

    expect(currencyInput).toBeInTheDocument();

    fireEvent.click(currencyInput);

    const currencyInputList = getByTestId('currency-input-list');

    const firstCurrencyButton = currencyInputList.querySelector('button');

    if (!firstCurrencyButton) fail('first currency button not found');

    fireEvent.click(firstCurrencyButton);

    expect(onSelectMock).toHaveBeenCalledWith(currencyList[0].code);

    const newValue = currencyList[0].code;

    // rerendering the component with the new value
    rerender(
      <CurrencyInput
        currency={newValue}
        onSelectCurrency={onSelectMock}
        onChangeValue={onChangeValue}
        value={0}
      />
    );

    // getting the currencyInput again after rerender
    const updatedCurrencyInput = getByTestId('currency-input');

    // check if the value is updated
    expect(updatedCurrencyInput.textContent).toEqual(newValue);
  });
});
