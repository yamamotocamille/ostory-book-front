// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MyProfil from '../MyProfil';
import { fetchUser } from '../../actions/user';

// == Component
function Profil() {
  const userInfo = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div className="container">
      <MyProfil {...userInfo} />
    </div>
  );
}

// == Export
export default Profil;
