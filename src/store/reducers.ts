import { combineReducers } from '@reduxjs/toolkit';

import pairConversionSlice from './slices/pairConversionSlice';

const rootReducer = combineReducers({
  pairConversionSlice,
});

export default rootReducer;
