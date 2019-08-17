/*
  This component is responsible for rendering the application.
  It finds the element 'root' on the index html file located
  at ~/public/index.html and fetches the parent component App.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));
