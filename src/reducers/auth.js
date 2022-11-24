import {
  CHANGE_LOGIN_FIELD,
  SIGN_IN, SET_TOKEN, SAVE_NEW_USER, LOGOUT,
  USER_DELETE,
  CHANGE_SIGN_FIELD,
  SAVE_ERROR_SIGNIN_DATA,
} from '../actions/auth';

export const initialState = {
  email: '',
  nickname: '',
  password: '',
  passwordcheck: '',
  token: '',
  logged: false,
  loggedMessage: 'Vous êtes bien connectés !',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      // si le champ concerné par le changement est celui de l'e-mail
      if (action.fieldIdentifier === 'email') {
        return {
          ...state,
          emailAuth: action.value,
        };
      }
      return {
        ...state,
        passwordAuth: action.value,
      };

    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
        logged: true,
      };
    }
    case CHANGE_SIGN_FIELD:
      // si le champ concerné par le changement est celui de l'e-mail
      if (action.fieldIdentify === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }

      if (action.fieldIdentify === 'nickname') {
        return {
          ...state,
          nickname: action.value,
        };
      }

      if (action.fieldIdentify === 'password') {
        return {
          ...state,
          password: action.value,
        };
      }

      return {
        ...state,
        passwordcheck: action.value,
      };

    case SIGN_IN:
      return {
        ...state,
        email: action.email,
        nickname: action.value,
        password: action.value,
        passwordcheck: action.value,
      };
    case SAVE_NEW_USER:
      return {
        ...state,
        email: '',
        nickname: '',
        password: '',
        passwordcheck: '',
      };
    case LOGOUT: {
      return {
        ...state,
        isLogged: false,
      };
    }
    case USER_DELETE: {
      return {
        ...state,
        isLogged: false,
      };
    }
    case SAVE_ERROR_SIGNIN_DATA:
      return {
        ...state,
        errors: action.errorsSignin,
      };

    default:
      return state;
  }
};

export default reducer;
