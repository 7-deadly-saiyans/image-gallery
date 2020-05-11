import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductPage from './ProductPage';

const initial = { imageURLs: [], tagsProcessed: [] };

export default () => {
  const [home, setHome] = useState(initial);

  useEffect(() => {
    const pathname = window.location.pathname;
    fetch(`${pathname}/images`)
    .then(response => response.json())
    .then(home => setHome(home))
    .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <Route path='/homes/:id' children={<ProductPage home={home} />} />
    </Router>
  );
};