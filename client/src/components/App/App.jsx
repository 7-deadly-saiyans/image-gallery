import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, useLocation } from "react-router-dom";
import styled from 'styled-components';
import MainImage from '../MainImage';
import setupMapAPI from '../../map';
const MediaPopup = lazy(() => import('../MediaPopup'));

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const initial = { imageURLs: [], tagsProcessed: [] };

export default ({ id, homeInit = initial, pathname = '/' }) => {
  const [home, setHome] = useState(homeInit);
  const resolvedPath = (pathname === '/') ? '' : pathname;
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    setupMapAPI();
    if (homeInit === initial) {
      fetch(`/homes/${id || 1}/images`)
      .then(response => response.json())
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
    <Suspense fallback={<div></div>}>
      {background && <Route path={`${resolvedPath}/:id`} children={<MediaPopup home={home} />} />}
    </Suspense>
    </>
  )
};