export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectInputPassword = state => state.auth.showPassword;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
