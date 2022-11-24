// == Import
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';

import { fetchPages } from '../../../actions/pages';
// Style
import './styles.scss';

// == Component
/* eslint-disable max-len */
function Pages() {
  const pages = useSelector((state) => (state.pages.page));
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem('id');
    const startPage = localStorage.getItem('page');
    dispatch(fetchPages(id, startPage));
  }, []);

  return (
    <div className="container-scrolly">
      <div className="page">
        <div className="page page-list">
          <Page {...pages} />
        </div>
      </div>
    </div>
  );
}

export default Pages;
