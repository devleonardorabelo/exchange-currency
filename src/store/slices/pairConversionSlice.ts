import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PairConversion } from '../../api/types';

interface PairConversionState {
  pairConversions: PairConversion[];
}

const initialState: PairConversionState = {
  pairConversions: [],
};

const pairConversionSlice = createSlice({
  name: 'pairConversion',
  initialState,
  reducers: {
    addPairConversion(state, action: PayloadAction<PairConversion>) {
      const hasPair = !!state.pairConversions.find(
        ({ base_code, target_code }) =>
          action.payload.target_code === target_code &&
          action.payload.base_code === base_code
      );
      if (hasPair) return;
      state.pairConversions = [...state.pairConversions, action.payload];
    },
  },
});

export const { addPairConversion } = pairConversionSlice.actions;
export default pairConversionSlice.reducer;
