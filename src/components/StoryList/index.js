// == Import
import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { fetchStories } from '../../actions/stories';

import Story from './Story';

// Style
import './styles.scss';

// == Component

function StoryList() {
  const stories = useSelector((state) => state.stories.stories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, []);
  // console.log(stories);
  // const { slug } = useParams();
  // if (!storylist) {
  //   return <Navigate to="/error" replace />;
  // }
  return (
    <div className="container-scrollx">
      <div className="story-list">
        <h1>Veuillez choisir une histoire</h1>
        <div className="story-list__list">
          <div className="story-list__list-container">
            {stories.map((story) => (
              <Story {...story} key={story.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default StoryList;
