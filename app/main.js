// This file sets up React. You shouldn't need to edit it.
// (But if you really want to, no one's gonna stop you. ¯\_(ツ)_/¯)
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './components/Routes';

// console.log('what is my store state: ', store.getState()) -> {projects: Array(0), robots: Array(0)}
render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main')
);
