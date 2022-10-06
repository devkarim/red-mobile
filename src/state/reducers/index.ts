import { combineReducers } from '@reduxjs/toolkit';
import localSlice from './local';
import cacheSlice from './cache';

const rootReducer = combineReducers({
  localSlice,
  cacheSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
