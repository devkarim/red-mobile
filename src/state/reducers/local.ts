import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocationObject } from 'expo-location';
import { LocalState } from '../../models/state';
import { AppThunk } from '../store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LAST_UPDATED_STORAGE_KEY,
  LOC_STORAGE_KEY,
} from '../../config/storage';

const initialState: LocalState = {
  token: null,
  location: null,
  lastUpdatedAt: 0,
};

const localState = createSlice({
  name: 'local',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    setLocation(state, action: PayloadAction<LocationObject | null>) {
      state.location = action.payload;
    },
    setLastUpdatedAt(state, action: PayloadAction<number>) {
      state.lastUpdatedAt = action.payload;
    },
  },
});

export const saveToken =
  (code: string): AppThunk =>
  async (dispatch) => {
    // await AsyncStorage.setItem('@code', code);
    dispatch(setLocalToken(code));
  };

export const setLocalToken =
  (token: string): AppThunk =>
  async (dispatch) => {
    // client.defaults.headers.common['X-Auth-Token'] = token;
    dispatch(setToken(token));
  };

export const logout = (): AppThunk => async (dispatch) => {
  // await AsyncStorage.removeItem('@code');
  dispatch(setToken(null));
};

export const updateLastUpdated =
  (timestamp?: number): AppThunk =>
  async (dispatch) => {
    const timestampNow = Date.now();
    if (!timestamp) {
      await AsyncStorage.setItem(
        LAST_UPDATED_STORAGE_KEY,
        timestampNow.toString()
      );
    }
    dispatch(setLastUpdatedAt(timestamp || timestampNow));
  };

export const saveLocation =
  (loc: LocationObject, lastUpdatedAt?: number): AppThunk =>
  async (dispatch) => {
    await AsyncStorage.setItem(LOC_STORAGE_KEY, JSON.stringify(loc));
    dispatch(setLocation(loc));
    await dispatch(updateLastUpdated(lastUpdatedAt));
  };

export const { setToken, setLocation, setLastUpdatedAt } = localState.actions;

export default localState.reducer;
