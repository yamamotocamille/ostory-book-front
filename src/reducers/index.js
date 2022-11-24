import { combineReducers } from 'redux';

import storiesReducer from './stories';
import pagesReducer from './pages';
import authReducer from './auth';
import userReducer from './user';

const rootReducer = combineReducers({
  // nom du tiroir : reducer qui s'en occupe
  stories: storiesReducer,
  pages: pagesReducer,
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;
