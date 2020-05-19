import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../Modal';
import Head from './Head';
// import Photos from '../Media/Photos';
// import Map from '../Media/Map';
// import StreetView from '../Media/StreetView';
// import Schools from '../Media/Schools';
// import Commute from '../Media/Commute';

const Photos = lazy(() => import('../Media/Photos'));
const Map = lazy(() => import('../Media/Map'));
const StreetView = lazy(() => import('../Media/StreetView'));
const Schools = lazy(() => import('../Media/Schools'));
const Commute = lazy(() => import('../Media/Commute'));

const position = {lat: 37.869260, lng: -122.254811};

const MediaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  font-family: arial;
  @media (min-width: 767px) {
    margin: 48px;
    height: calc(100% - 96px);
    width: calc(100% - 96px);
    border-radius: 8px;
  }
`;

const Body = styled.div`
  flex: 1 1 auto;
`;

export default ({ home }) => {
  const { path } = useRouteMatch();
  const [innerWidth, setWidth] = useState(1000);
  const routes = [
    {
      title: 'Photos',
      path: path.replace(':id', 'photos'),
      main: <Suspense fallback={<div />} children={<Photos home={home} innerWidth={innerWidth} />} />,
    },
    {
      title: 'Map',
      path: path.replace(':id', 'mapView'),
      main: <Map innerWidth={innerWidth} position={position} />,
      main: <Suspense fallback={<div />} children={<Map innerWidth={innerWidth} position={position} />} />,
    },
    {
      title: 'Street View',
      path: path.replace(':id', 'streetView'),
      main: <StreetView innerWidth={innerWidth} position={position} />,
      main: <Suspense fallback={<div />} children={<StreetView innerWidth={innerWidth} position={position} />} />,
    },
    {
      title: 'Schools',
      path: path.replace(':id', 'schools'),
      main: <Schools position={position} />,
      main: <Suspense fallback={<div />} children={<Schools position={position} />} />,
    },
    {
      title: 'Crime',
      path: path.replace(':id', 'crime'),
      main: <div></div>,
    },
    {
      title: 'Commute',
      path: path.replace(':id', 'commute'),
      main: <Commute position={position} />,
      main: <Suspense fallback={<div />} children={<Commute position={position} />} />,
    },
    {
      title: 'Shop & Eat',
      path: path.replace(':id', 'ammenities'),
      main: <div></div>,
    },
  ];

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <Modal>
      <MediaContainer>
        <Head routes={routes} />
        <Body>
          <Switch>
            {routes.map(({ path, main }, idx) => <Route key={idx} path={path} children={main} />)}
          </Switch>
        </Body>
      </MediaContainer>
    </Modal>
  )
};