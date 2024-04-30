import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrencyDetail } from '../../types';

interface PairConversionState {
  currentCurrency: CurrencyDetail;
}

const initialState: PairConversionState = {
  currentCurrency: {
    currency: 'BRL',
    symbol: 'R$',
    value: 1,
    info: {
      code: 'BRL',
      country: 'Brazil',
      name: 'Real',
    },
  },
};

const currencyDetailSlice = createSlice({
  name: 'currencyDetail',
  initialState,
  reducers: {
    setCurrentCurrency(state, action: PayloadAction<CurrencyDetail>) {
      state.currentCurrency = action.payload;
    },
  },
});

export const { setCurrentCurrency } = currencyDetailSlice.actions;
export default currencyDetailSlice.reducer;
