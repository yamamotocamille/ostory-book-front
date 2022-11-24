export const FETCH_STORIES = 'FETCH_STORIES';
export const SAVE_STORIES = 'SAVE_STORIES';

// action type for story middleware
export const fetchStories = () => ({
  type: FETCH_STORIES,
});

export const saveStories = (stories) => ({
  type: SAVE_STORIES,
  stories: stories,
});
