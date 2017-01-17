import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import fetchEvents from './fetchEvents'

ReactDOM.render(
  <App fetchEvents={fetchEvents}/>,
  document.getElementById('root')
);
