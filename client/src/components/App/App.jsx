import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductPage from './ProductPage';

const initial = { imageURLs: [], tagsProcessed: [] };

export default ({ id = 1 }) => {
  const server = 'http://localhost:3001/homes';
  const [home, setHome] = useState(initial);
  const pathname = window.location.pathname;

  useEffect(() => {
    fetch(`${server}/${id}/images`)
    .then(response => response.json())
    .then(home => setHome(home))
    .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <Route path={pathname} children={<ProductPage home={home} />} />
    </Router>
  );
};