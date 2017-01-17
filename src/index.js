import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import fetchEvents from './fetchEvents'
// import spoofFetchEvents from './spoofFetchEvents'

ReactDOM.render(
  <App fetchEvents={fetchEvents}/>,
  document.getElementById('root')
);
