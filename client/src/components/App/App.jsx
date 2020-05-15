import React, { useEffect, useState } from 'react';
import { Route, useLocation } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import MainImage from '../MainImage';
import MediaPopup from '../MediaPopup';
import setupMapAPI from '../../helper/map';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const initial = { imageURLs: [], tagsProcessed: [] };

const fetchData = function (id, pathname) {
  return axios.get(`${pathname || ''}/homes/${id}/images`)
};

const App = ({ id, homeInit = initial, pathname = '/' }) => {
  const [home, setHome] = useState(homeInit);
  const resolvedPath = (pathname === '/') ? '' : pathname;
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    setupMapAPI();
    if (homeInit === initial) {
      fetchData(id || 1)
      .then(response => response.data)
      .then(home => {
        if (home) {
          setHome(home);
        }
      })
      .catch(err => console.error(err));
    }
  }, []);

  return (
    <>
    <ImageContainer>
      <MainImage home={home} pathname={resolvedPath} />
    </ImageContainer>
    {background && <Route path={`${resolvedPath}/:id`} children={<MediaPopup home={home} />} />}
    </>
  )
};

App.fetchData = fetchData;

export default App;