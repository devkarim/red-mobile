import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

const initialState: LocalState = {
  token: null,
};

const localState = createSlice({
  name: 'local',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
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

export const { setToken } = localState.actions;

export default localState.reducer;
