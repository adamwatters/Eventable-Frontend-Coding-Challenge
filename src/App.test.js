import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import spoofFetchEvents from './spoofFetchEvents'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App fetchEvents={spoofFetchEvents}/>, div);
});
