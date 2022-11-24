export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const CHANGE_SIGN_FIELD = 'CHANGE_SIGN_FIELD';
export const LOG_IN = 'LOG_IN';
export const LOGOUT = 'LOGOUT';
export const USER_DELETE = 'USER_DELETE';
export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_NEW_USER = 'SAVE_NEW_USER';
export const SIGN_IN = 'SIGN_IN';
export const SET_TOKEN = 'SET_TOKEN';
export const SAVE_ERROR_SIGNIN_DATA = 'SAVE_ERROR_SIGNIN_DATA';

// action type for auth middleware
export const setToken = (token) => ({
  type: SET_TOKEN,
  token: token,
});
// action type for auth middleware
export const changeLoginField = (newValue, fieldIdentifier) => ({
  type: CHANGE_LOGIN_FIELD,
  value: newValue,
  fieldIdentifier: fieldIdentifier,
});

export const changeSignField = (newValue, fieldIdentify) => ({
  type: CHANGE_SIGN_FIELD,
  value: newValue,
  fieldIdentify: fieldIdentify,
});

// action type from auth middleware, got to auth reducer
export const saveNewUser = () => ({
  type: SAVE_NEW_USER,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveLogin = () => ({
  type: SAVE_LOGIN,
});

export const SignIn = () => ({
  type: SIGN_IN,
});

export const deleteUser = () => ({
  type: USER_DELETE,
});

export const saveErrorsSignIn = (errorsSignin) => ({
  type: SAVE_ERROR_SIGNIN_DATA,
  errorsSignin: errorsSignin,
});
