import { combineReducers } from '@reduxjs/toolkit';

import { currencyDetailSlice, pairConversionSlice } from './slices';

const rootReducer = combineReducers({
  pairConversionSlice,
  currencyDetailSlice,
});

export default rootReducer;
