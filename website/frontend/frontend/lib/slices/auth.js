import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

export const IDLE = 'idle';
export const LOADING = 'loading';

export const M_PHONE_NUMBER = 'phone_number';
export const M_EMAIL = 'email';

export const requestMobileOTP = createAsyncThunk(
  //action.type => 'auth/mobileotp',
  'auth/mobileotp',
  async (phoneNumber, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/mobile/', {
        phone_number: phoneNumber,
      });
      return {
        //str
        method: M_PHONE_NUMBER,
        //value
        username: phoneNumber,
        ...response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  },
);

export const requestEmailOTP = createAsyncThunk(
  'auth/emailotp',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/email/', { email });

      return { method: M_EMAIL, username: email, ...response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  },
);

export const login = createAsyncThunk('auth/login', async (cred, thunkAPI) => {
  try {
    const response = await axios.post('/api/auth/confirm/', cred);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.response.data });
  }
});

const internalInitialState = {

  method: null,
  username: null,
  loading: IDLE, // false ,not busy
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: internalInitialState,
  reducers: {

    reset: () => internalInitialState,
  },
  extraReducers: (builder) => {
    // Mobile OTP
    builder.addCase(requestMobileOTP.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.method = action.payload.method;
      state.loading = IDLE;

      return state;
    });
    builder.addCase(requestMobileOTP.rejected, (state, action) => ({ ...state, loading: IDLE, error: action.payload.error }));
    builder.addCase(requestMobileOTP.pending, (state) => {
      state.loading = LOADING;
      return state;
    });

    // Email OTP
    builder.addCase(requestEmailOTP.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.method = action.payload.method;
      state.loading = IDLE;

      return state;
    });
    builder.addCase(requestEmailOTP.rejected, (state, action) => ({ ...state, loading: IDLE, error: action.payload.error }));
    builder.addCase(requestEmailOTP.pending, (state) => ({
      ...state,
      loading: LOADING,
    }));
    // Login
    builder.addCase(login.pending, (state) => ({
      ...state,
      loading: LOADING,
    }));
    builder.addCase(login.rejected, (state, action) => ({
      ...state,
      loading: IDLE,
      error: action.payload.error,
    }));
    builder.addCase(login.fulfilled, (state, action) => {
      state.accessToken = action.payload.access_tok;
      state.accessTokenExp = action.payload.access_tok_exp;
      state.refreshToken = action.payload.refresh_tok;
      state.refreshTokenExp = action.payload.refresh_tok_exp;
      state.loading = IDLE;
      state.me = action.payload.user;
      return state;
    });
  },
});

export const { reset } = authSlice.actions;