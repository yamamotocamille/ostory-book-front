import {
  CHANGE_USER_INPUT, SET_USER, CLEAR_EDIT,
  CLEAR_USER_INPUT,
  SAVE_ERROR_DATA,
  SAVE_ERROR_PROFIL_EDIT,
  SAVE_ERROR_PROFIL_DELETE,
} from '../actions/user';

export const initialState = {
  // le pseudo de l'utilisateur (disponible quand il est connecté)
  nickname: '',
  // contenu du champ email du formulaire de profil
  email: '',
  // contenu du champ password du formulaire de login
  password: '',
  roles: '',
  logged: false,
  passwordcheck: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_INPUT:
      // si le champ concerné par le changement est celui de l'e-mail
      if (action.fieldIdentifier === 'newemail') {
        return {
          ...state,
          Newemail: action.value,
        };
      }

      if (action.fieldIdentifier === 'newnickname') {
        return {
          ...state,
          Newnickname: action.value,
        };
      }

      if (action.fieldIdentifier === 'passwordcheck') {
        return {
          ...state,
          passwordcheck: action.value,
        };
      }

      return {
        ...state,
        Newpassword: action.value,
      };

    case SET_USER: {
      return {
        ...state,
        nickname: action.nickname,
        email: action.email,
        roles: action.roles,
        logged: true,
      };
    }
    case CLEAR_EDIT: {
      return {
        ...state,
        password: '',
      };
    }
    case CLEAR_USER_INPUT: {
      return {
        ...state,
        [action.key]: '',
      };
    }

    case SAVE_ERROR_DATA:
      return {
        ...state,
        errors: action.errors,
      };
    case SAVE_ERROR_PROFIL_EDIT:
      return {
        ...state,
        errors: action.errors,
      };

    case SAVE_ERROR_PROFIL_DELETE:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
};

export default reducer;
