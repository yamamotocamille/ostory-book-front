import { SAVE_STORIES } from '../actions/stories';

export const initialState = {
  storiesLoaded: false,
  stories: [],
};

const reducer = (state = initialState, action = {}) => {
  // console.log(action);
  switch (action.type) {
    case SAVE_STORIES:
      return {
        ...state,
        storiesLoaded: true,
        stories: action.stories,
      };
    default:
      return state;
  }
};
export default reducer;
