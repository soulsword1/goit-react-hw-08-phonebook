import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  showPassword: 'password'
};

const handleRegisterFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogInFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUserPending = (state) => {
  state.isRefreshing = true;
};

const handleRefreshUserRejected= (state) => {
  state.isRefreshing = false;
};

const handleRefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleShowPassword = (state) => {
  state.showPassword = 'text';
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, handleRegisterFulfilled)
    .addCase(logIn.fulfilled, handleLogInFulfilled)
    .addCase(logOut.fulfilled,handleLogOutFulfilled)
    .addCase(refreshUser.pending,handleRefreshUserPending)
    .addCase(refreshUser.fulfilled,handleRefreshUserFulfilled)
    .addCase(refreshUser.rejected,handleRefreshUserRejected)
    .addCase(handleShowPassword)
  },
});

export const authReducer = authSlice.reducer;