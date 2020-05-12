import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import setupMapAPI from './helper/map';

setupMapAPI();

const imageGallery = document.createElement('div');
document.body.prepend(imageGallery);

ReactDOM.render(<App />, imageGallery);
