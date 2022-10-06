import { Prayers } from './../../helpers/parsers/prayer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CacheState } from '../../models/state';

const initialState: CacheState = {
  prayers: null,
};

const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {
    setPrayers(state, action: PayloadAction<Prayers | null>) {
      state.prayers = action.payload;
    },
  },
});

export const { setPrayers } = cacheSlice.actions;

export default cacheSlice.reducer;
