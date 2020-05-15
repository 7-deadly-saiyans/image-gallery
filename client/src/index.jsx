import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/App';

const imageGallery = document.createElement('div');
document.body.prepend(imageGallery);

const pathname = window.location.pathname.split('/');
const id = parseInt(pathname[pathname.length - 1]);

ReactDOM.render((
  <Router>
    <App id={id} pathname={window.location.pathname} />
  </Router>
  ), imageGallery);
