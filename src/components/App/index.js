// == Import
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Pages from '../StoryList/Pages';
import Home from '../Home';
import Login from '../Login';
import Profil from '../Profil';
import EditProfil from '../EditProfil';
import StoryList from '../StoryList';
import ContactForm from '../Footer/Contact';
import Policies from '../Footer/Policies';
import GameRules from '../Footer/GameRules';
import Credits from '../Footer/Credits';
import CGU from '../Footer/CGU';

import { changeUserInput } from '../../actions/user';
import { deleteUser } from '../../actions/auth';

import Error404 from '../Errors/Error404';

// == Styles
import './styles.scss';
import AnimCursor from '../AnimCursor';

// == Actions

// == Component
function App() {
  // as we need to dispatch action to some composant we use the Hook UseDispatch
  const dispatch = useDispatch();
  return (
    <div className="app">
      <AnimCursor />
      <Navigation />
      <div className="app-container">
        <Routes>
          {/* if URL / then we will display home composant */}
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/mon-compte" element={<Profil />} />
          <Route
            path="/mon-compte/edit"
            element={(
              <EditProfil
              // we use changeField fonction with property to change the value of input form
                changeField={(newValue, identifier) => {
                  dispatch(changeUserInput(newValue, identifier));
                }}
                handleDeleteUser={() => {
                  dispatch(deleteUser());
                }}
              />
          )}
          />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/nous-contacter" element={<ContactForm />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/regles-du-jeu" element={<GameRules />} />
          <Route path="/histoires" element={<StoryList />} />
          <Route path="/histoire" element={<Pages />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>

    </div>

  );
}
// == Export
export default App;
