import { combineReducers } from '@reduxjs/toolkit';
import localSlice from './local';

const rootReducer = combineReducers({
  localSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
